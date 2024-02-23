<template>
  <div>
    <!-- <v-menu transition="slide-x-transition">  -->
      <!-- <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" >
          Slide X Transition
        </v-btn>
      </template>   -->
      <v-card>
        <v-layout>
          <v-navigation-drawer
           permanent
            theme="dark" 
          >
            <v-list nav>
              <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
              <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors"></v-list-item>
              <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main style="height: 200px"></v-main>
        </v-layout>
      </v-card>
    <!-- </v-menu> -->
  </div>
</template>
<style scoped>

</style>