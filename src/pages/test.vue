<template>
   <v-combobox 
       v-model="select" :items="items" style="border: 1px solid #1B2537; background: #10192D; "
       variant="none"
          chips
          multiple>
        <template #prepend-item> <v-card flat width="100%" height="100%" style=" background: #161D26;  position: absolute; top: 0px " /> </template> 
  </v-combobox>
</template>

<script setup>
const  select = ref (['25,000', '25,000', '25,000' ]);
const items =ref([
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ]);
</script>
<style>

.v-chip{
border-radius: 12px !important;
background: #131D35 !important;
width: 67px !important;
height: 36px !important;
display: flex !important;
align-items: center !important;
font-family: Manrope; 
color: #8E9BAE !important; 
font-size: 14px !important;
line-height: 140% !important;
}

.v-input--density-default .v-field__input {
    row-gap: 8px;
    width: 50%;
}
</style>