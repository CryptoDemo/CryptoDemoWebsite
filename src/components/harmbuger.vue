<template>
    <div style="margin-bottom: 6px;">
     <label for="check">
      <input type="checkbox" id="check" :checked="isOpen"/> 
      <span></span>
      <span></span>
      
     </label>
    </div>
</template>

<script setup>
import { ref } from 'vue'
  const props = defineProps({
    isOpen: Boolean
  })
</script>

<style scoped>
body{
  display:grid;
  place-items:center;
  height:100vh;
  background:#4C23E8;
  margin:0;
  padding:0;
}

label{
 display:flex;
 flex-direction:column;
 width:70px;
 cursor:pointer;
}

label span{
  background: #fff;
  border-radius:10px;
  height:7px;
  margin: 7px 0;
  transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);

}


span:nth-of-type(1){
width: 29.381px;
height: 2.102px;
position: relative; 
top: 10px;
}

span:nth-of-type(2){
width: 29.381px;
height: 2.102px;
position: relative;
}


input[type="checkbox"]{
  display:none;
}


input[type="checkbox"]:checked ~ span:nth-of-type(1){
  transform-origin:bottom;
  transform:rotatez(45deg) translate(3px,-12px)
}


input[type="checkbox"]:checked ~ span:nth-of-type(2){
  
  transform-origin:top;
  transform: translate(10px,-12px) rotatez(-45deg)
}


</style>