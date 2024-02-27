<template>
    <div>
        <v-layout >
             <v-navigation-drawer permanent location="right" style="border-radius: 24px; background: #12181F; width: 307px; border: unset;">

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" class="text2" height="56px" style="border-radius: 8px;" title="Profile" value="Profile"></v-list-item>
          <v-list-item prepend-icon="mdi-account" class="text2" height="56px" style="border-radius: 8px;" title="Security" value="Security"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" height="56px" style="border-radius: 8px;" class="text2" title="Payment Methods" value="Payment Methods"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" height="56px" style="border-radius: 8px;" class="text2" title="Connected Apps and Websites" value="Connected Apps and Websites"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" height="56px" style="border-radius: 8px;" class="text2" title="Security Questions " value="Security Questions "></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 344px"></v-main>
    </v-layout>
      <div style="border-radius: 16px; background: #12181F; height: 215px; padding: var(--spacing-3xl, 24px); width: 307px; display: flex; margin: auto; margin-top: 32px">

      </div>
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