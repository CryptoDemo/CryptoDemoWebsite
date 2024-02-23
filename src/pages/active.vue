<template>
    <div>
         <v-data-table
    :headers="headers"
    :items="Userdata"
  >
    <template v-slot:calories="{ value }">
      <v-chip :color="getColor(value)">
        {{ value }}
      </v-chip>
    </template>
  </v-data-table>
    </div>
</template>

<script setup>

const  headers = [
        { title: 'S.N.', key: 'number' },
        { title: 'Signed in', key: 'time' },
        { title: 'Browser', key: 'Browser' },
        { title: 'IP address', key: 'address' },
        { title: 'Location', key: 'location' },
        { title: 'Status', key: 'isActive' },
        { title: '', key: 'delete' },
      ];
    const Userdata = [
       
        {
          number: '1',
          time: '4 hours ago',
          Browser: 'Chrome (Windows 11)',
          address: '102.215.57.47',
          location: 'Nigeria, Lagos',
          isActive: 'active',
          delete: 'delete',
        },
           
      
      ];
    
</script>

<style scoped>
.active{
border-radius: 12px;
background: #1F2F2F;
}
</style>