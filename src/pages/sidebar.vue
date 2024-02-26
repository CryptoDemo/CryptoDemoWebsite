<template>
    <div>
        <v-layout >
             <v-navigation-drawer permanent location="left" style="border-radius: 24px; background: #12181F; width: fit-content;border: unset;">
       

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" class="text2" height="56px" title="Profile" value="Profile"></v-list-item>
          <v-list-item prepend-icon="mdi-account" class="text2" height="56px" title="Security" value="Security"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" height="56px" class="text2" title="Payment Methods" value="Payment Methods"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" height="56px" class="text2" title="Connected Apps and Websites" value="Connected Apps and Websites"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" height="56px" class="text2" title="Security Questions " value="Security Questions "></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 344px"></v-main>
    </v-layout>
    </div>
</template>

<style scoped>
.text2{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}
</style>