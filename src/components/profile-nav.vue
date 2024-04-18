<template>
  <div>
    
    <v-row>
      <v-col cols="12" offset-sm="3" sm="6">
        <div height="200px">
            <v-spacer></v-spacer>
            <v-menu> <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="nav-btn">
                  <img src="/svg/profile-icon.svg"/>
                </v-btn>
              </template>

              <v-list style="background: rgba(22, 29, 38, 0.60)!important; backdrop-filter: blur(20px)!important; border-radius: 15px;">
                <v-list-item v-for="(item, i) in items" :key="i">
                
                    <div>
                      <v-btn  @click.prevent="navigateTo(item.link)" class="profile-btn">
                      <img :src="item.icon" class="me-3"/>
                      {{ item.title }}
                      </v-btn>
                    </div>
                </v-list-item>
              </v-list>
            </v-menu>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>

const items = [
       {icon:'/svg/profile1.svg', title: 'My profile', link:'/profile'},
       {icon:'/svg/payment.svg', title: 'Payment Method', link:'/payment'},
       {icon:'/svg/transaction.svg', title: 'Transactions', link:''},
       {icon:'/svg/history.svg', title: 'History', link:'/history'},
       {icon:'/svg/settings.svg', title: 'Settings', link:'/settings'},
       {icon:'/svg/friend.svg', title: 'Invite a Friend', link:'/trade/invite'},
       {icon:'/svg/logout.svg', title: 'Log Out', link:''},
     ];
</script>
<style>
.profile-btn{
display: flex;
width: 247px !important;
height: 48px !important;
justify-content: flex-start !important;
align-items: center;
flex-shrink: 0;
border-radius: 16px !important;
background: var(--BUTTON-SECONDARY-DEFAULT, #0F141A) !important;
letter-spacing: 0px !important;
text-transform: unset !important;
color: var(--Gray-Medium-light, #969696) !important;
font-family: Manrope !important;
font-size: 14px !important;
font-style: normal;
font-weight: 600 !important;
line-height: 28px !important; /* 200% */
}     

.nav-btn{
border-radius: 20px !important; 
background: #12181F !important; 
min-width: 56px!important;
height: 53.2px !important;
flex-shrink: 0;
box-shadow: none;
}

</style>