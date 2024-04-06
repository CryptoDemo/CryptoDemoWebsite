<template>
<div>
    <v-btn append-icon="mdi-arrow-right" class="btn" :disabled="disabled">
  {{buttonText}}
</v-btn>
</div>
</template>
<script>
export default {
    props: ["buttonText","disabled"]
}
</script>
<style>
.btn{
width: 300.384px!important;
height: 57.474px!important;
flex-shrink: 0;
border-radius: 24px!important;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF)!important;
color: white!important;
display: flex!important;
justify-content: center!important;
text-transform: unset !important;
padding: 30px;
display: flex;
font-size: 14px !important;
font-weight: 400 !important;  
text-decoration: none;
letter-spacing: unset !important;
}
.mdi-arrow-right{
border-radius: 12px;
background: rgba(255, 255, 255, 0.20);
width: 34.928px!important;
height: 33.527px!important;
flex-shrink: 0;
position: absolute!important;
right: 18px!important;
}

.btn:disabled {
    box-shadow: none;
    opacity: 1;
    background: #575757!important;
}
</style>