<template>
  <v-card
    class="mx-auto"
    width="300"
  >
    <v-list v-model:opened="open">
   

      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Users"
          ></v-list-item>
        </template>

        <v-list-group value="hello">
          <template v-slot:activator="{ props }">
            <v-list-item aria-hidden="false"
              v-bind="props">
             <span>hello</span>
            </v-list-item>
          </template>

         
        </v-list-group>

        <!-- <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Actions"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group> -->
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script setup>
const open = ref(['Users']);
const admins = ref([
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ]);
// const cruds = ref([
//         ['Create', 'mdi-plus-outline'],
//         ['Read', 'mdi-file-outline'],
//         ['Update', 'mdi-update'],
//         ['Delete', 'mdi-delete'],
//       ]);
</script>
