<template>
    <NuxtPage>
        <slot />
    </NuxtPage>
</template>

<script setup>
    import { onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useTheme } from 'vuetify';

    const invalidPathBGs = ref(["/"]);
    
    const theme = useTheme()
    const isDark = computed(() =>  theme.global.current.value.dark);

    const changeBG = (path=window.location.pathname)=>{
        if(isDark.value){
            // case when the page loads for the first time
            if(!invalidPathBGs.value.includes(path)){
                changeToDashboardBG();
            }else{
                removeDashboardBG();
            }
        }else{
            removeDashboardBG();
        }
    }
    
    onMounted(()=>{
        watch(()=>isDark.value,(newVal)=>{
            if(newVal){
                changeBG();
            }else{
                removeDashboardBG();
            }
        });

        changeBG();

        // case when the user starts navigating
        const route = useRoute();
        watch(()=>route.path,(newPath)=>{
            changeBG(newPath)
        });
    });
</script>