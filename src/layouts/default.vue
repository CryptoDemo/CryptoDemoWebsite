<template>
 <slot/>
</template>

<script setup>
    import {useStore}  from "@/stores/index";
    const store = useStore()
    const router = useRouter();
    // check if the user is logged in

    // if the user is logged in, and they are on the authentication, take them to the dashboard
    const blackListedRoutesWhenLoggedIn = ["/authentication/register","/authentication/login","/authentication/reset-Password","/authentication/reset-Password-otp", "/authentication/create-new-Password"];
    
    const handleRouting = ()=>{
        const currentPath = router.currentRoute.value.path;
        if(currentPath.includes("/account") && !store?.state.isAuthenticated){
            router.push("/authentication/login")
        }else{
            if(store?.state.isAuthenticated && blackListedRoutesWhenLoggedIn.includes(currentPath)){
                router.push("/account/profile")
            } else {
                router.push("/authentication/login")
            }
        }
    }

    watch(()=>router.currentRoute.value.path,()=>{
        handleRouting();
    });

    onBeforeMount(()=>handleRouting());
</script>
