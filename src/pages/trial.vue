<template>
  <div>
    <div class="box">gmbm</div>
  </div>
</template>

<script setup>

</script>

<style scoped>

  .box{
  width: 300px;
  height: 80px;
  border: double 1em transparent;
  border-radius: 30px;
  background-image: linear-gradient(white, white), 
                    linear-gradient(to right, green, gold);
  background-origin: border-box;
  background-clip: content-box, border-box;
  content: "";
}
</style>