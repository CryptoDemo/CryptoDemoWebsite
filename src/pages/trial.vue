<template>
  <div>
    <v-row  style="gap: 16px; margin-bottom: 32px !important">
                    <v-col
                        v-for="(variant, i) in profileCards" class="profile-cards" :key="i" cols="3">
                        <v-card class="mx-aut" max-width="auto" :variant="variant">
                            <v-card-item>
                              <div>
                                <div class="d-flex">
                                  <img :src="variant.image" class="me-3"/>
                                  <span class="card-text">{{ variant.Title }}</span>
                                  <span class="card-text" style="color:#969696">{{ variant.Title1 }}</span>
                                </div>
                                
                                <div class="textCaption" style="color: var(--Gray-Medium-dark, #646464);margin-top: 8px;">{{variant.textCaption}}</div>
                              </div>
                            </v-card-item>
                                
                            <v-card-actions>
                              <NuxtLink to="#"><span class="verify-text">
                                {{ variant.status }}</span>
                                <span style="color: #646464 !important; right: 0; position: absolute;">{{ variant.status1 }}</span>
                              </NuxtLink>
                            </v-card-actions>
                        </v-card>
                   </v-col>
                  <!-- </v-row> -->
                  </v-row>
  </div>
</template>

<script setup>
const profileCards = [
    {image:'/svg/call.svg', Title: 'Phone not verified', textCaption: 'Take a minute to verify your phone number', status:'Verify now'},
    {image:'/svg/sms.svg', Title1: 'Email verified', textCaption: 'You have verified your phone number.',  status1:'Verified' },
    {image:'/svg/login.svg', Title: '2FA not enabled', textCaption: 'Enabling 2FA is a great way to secure your account',  status:'Verify now'}, 
    {image:'/svg/profile-circle.svg', Title:'I.D. not verified', textCaption: 'Take a minute to verify your phone I.D.',  status:'Verify now'}, 
    {image:'/svg/location.svg', Title: 'Address not verified', textCaption:'Take a minute to verify your address',  status:'Verify now'},
];

</script>

<style scoped>

</style>