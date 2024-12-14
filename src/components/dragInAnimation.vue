<template>
    <div :style="{ paddingLeft: $vuetify.display.mobile ? '20px' : '0' }">
        <img :class="'imgs3' + i" v-for="(n, i) in items" :src="n.image" :key="i"
            :style="{ opacity: 0, width: $vuetify.display.mobile ? '70%' : '60%', position: 'absolute', top: 0, left: '25%' }"></img>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, computed } from "vue";
import { gsap, Back, CSSPlugin } from "gsap";
import { useTheme } from 'vuetify';

const theme = useTheme()

gsap.registerPlugin(CSSPlugin);

const isDark = computed(() => theme.global.current.value.dark);

const selected = ref(0);
const items = reactive([
    { image: (isDark ? "/svg/item1.svg" : "/img/item (1btc).png") },
    { image: (isDark ? "/svg/item2.svg" : "/img/item (3usd).png") },
    { image: (isDark ? "/svg/item3.svg" : "/img/item (4).png") },
    { image: (isDark ? "/svg/item4.svg" : "/img/item (1btc).png") },
]);

const interval = ref(null);
let moveInvar = null;
let moveOutvar = null;
let transcendvar1 = null;
let transcendvar2 = null;

// Computed properties
const selected1 = computed(() => selected.value);
const selected2 = computed(() => (selected.value + 1) % items.length);
const selected3 = computed(() => (selected2.value + 1) % items.length);
const selected4 = computed(() => (selected3.value + 1) % items.length);

// Watch for theme changes
watch(isDark, (newVal) => {
    items[0].image = newVal ? "/svg/item1.svg" : "/img/item (1btc).png";
    items[1].image = newVal ? "/svg/item2.svg" : "/img/item (3usd).png";
    items[2].image = newVal ? "/svg/item3.svg" : "/img/item (4).png";
    items[3].image = newVal ? "/svg/item4.svg" : "/img/lightitem4.png";
});

// Methods
const clearIntervalAndKillGSAP = () => {
    clearInterval(interval.value);
    killGSAP(moveInvar);
    killGSAP(moveOutvar);
    killGSAP(transcendvar1);
    killGSAP(transcendvar2);
};

const killGSAP = (instance) => {
    if (instance) {
        instance.kill();
    }
};

const animateImgs = async () => {
    await animatedvalue();
    interval.value = setInterval(() => {
        animatedvalue();
        gsap.set(`.imgs3${selected3.value}`, { zIndex: 9 });
    }, 4000);
};

const animatedvalue = async () => {
    const img = document.querySelector(`.imgs3${selected1.value}`);
    const img2 = document.querySelector(`.imgs3${selected2.value}`);
    const img3 = document.querySelector(`.imgs3${selected3.value}`);
    const img4 = document.querySelector(`.imgs3${selected4.value}`);

    await moveOut(img);
    await transcend1(img2);
    await transcend2(img3);
    await moveIn(img4);
};

const moveIn = (img) => {
    moveInvar = gsap.fromTo(img,
        {
            opacity: 0,
            scale: 1,
            x: "-0px",
            y: "-100px",
            rotation: -4,
        },
        {
            opacity: 1,
            x: "-70px",
            y: "5px",
            ease: Back.easeOut.config(1.7),
            scale: 1,
            delay: 0.2,
            duration: 1,
            rotation: 0,
        }
    );
};


const transcend2 = (img) => {
    transcendvar2 = gsap.fromTo(img,
        {
            opacity: 1,
            x: "-60px",
            y: "5px",
            scale: 1,
            rotation: 0,
        },
        {
            opacity: 1,
            scale: 1,
            x: "10px",
            y: "40px",
            ease: Back.easeOut,
            duration: 1.2,
            rotation: 0,
        }
    );
};

const transcend1 = (img) => {
    transcendvar1 = gsap.fromTo(img,
        {
            opacity: 1,
            x: "0px",
            y: "50px",
            scale: 1,
            rotation: 0,
        },
        {
            opacity: 1,
            scale: 1,
            x: "-40px",
            y: "90px",
            ease: Back.easeOut,
            duration: 1.2,
            rotation: 0,
        }
    );
};


const moveOut = (img) => {
    moveOutvar = gsap.fromTo(img,
        {
            opacity: 1,
            scale: 1,
            x: "-40px",
            y: "100px",
            rotation: 0,
        },
        {
            opacity: 0,
            scale: 1.1,
            x: "-60px",
            y: "100px",
            duration: 0.2,
            ease: "circ.inOut",
            rotation: 5,
            onComplete: () => {
                selected.value = selected.value === items.length - 1 ? 0 : selected.value + 1;
            },
        }
    );
};

onMounted(() => {
    animateImgs();
});

onBeforeUnmount(() => {
    clearIntervalAndKillGSAP();
});
</script>

<style scoped>
.v-img__img--contain {
    object-fit: cover;
}
</style>