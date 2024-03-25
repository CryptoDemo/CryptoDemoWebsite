<template>
  <v-container>
    <div style="background: rgba(6, 10, 29, 0.70) !important; backdrop-filter: blur(25px) !important; ">
      <div class="d-flex mt-5" style="justify-content: space-between;padding: 10px !important; align-items: center;">
          <span  :class="isDark ? 'demo-web1':'demo-web1-light'" >Demo Web</span>
          <Language-dropdown/>
        </div>
      <v-card class="mx-auto" width="100%" style="background: rgba(6, 10, 29, 0.70); backdrop-filter: blur(25px); box-shadow: none;">
        <v-list  v-model:opened="open" style="background: rgba(6, 10, 29, 0.70); backdrop-filter: blur(25px);">

          <v-list-group v-for="(links, i) in footer" :key="i" style="border-bottom: 1px solid #10192D;">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props">
              <span class="mobile-title">{{ links.title }}</span>
              </v-list-item>
            </template>

            <v-list-group>
              <template v-slot:activator="{props  }">   
                <div>
                <v-list-item  v-bind="props" :append-icon="null">
                <span class="mobile-footer">{{ links.subtitle1 }}</span>
                </v-list-item>
                 <v-list-item v-bind="props"  :append-icon="null">
                <span class="mobile-footer">{{ links.subtitle2 }}</span>
                </v-list-item>
                <v-list-item  v-bind="props" :append-icon="null">
                <span class="mobile-footer">{{ links.subtitle3 }}</span>
                </v-list-item>
                <v-list-item v-bind="props" :append-icon="null">
                <span class="mobile-footer">{{ links.subtitle4 }}</span>
                </v-list-item>
                <v-list-item v-bind="props" :append-icon="null">
                <span class="mobile-footer">{{ links.subtitle5 }}</span>
                </v-list-item>
                <v-list-item v-bind="props" :append-icon="null">
                <span class="mobile-footer">{{ links.subtitle6 }}</span>
                </v-list-item>
                <v-list-item v-bind="props" :append-icon="null">
                <span class="mobile-footer">{{ links.subtitle7 }}</span>
                </v-list-item>
                <v-list-item v-bind="props" :append-icon="null">
                <span class="mobile-footer">{{ links.subtitle8 }}</span>
                </v-list-item>
              </div>
            </template> 
          </v-list-group>
        </v-list-group>
          <div class="d-flex" style="margin-top: 16px; align-items: center;">
            <v-icon icon="mdi-information me-2" color="#165CDD"></v-icon>
            <span  :class="isDark ? 'FAQ-text':'FAQ-text-light'">FAQ’s and Help Centre</span>
          </div>
        </v-list>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';




const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);

const open = ref(['Users']);
const footer = ref ([
        {
          title: 'Legal', 
          subtitle1:'Vendor Reminder', link:'#',
          subtitle2:"Terms & Conditions", link:'#',
          subtitle3: 'AML Policy', link:'#',
          subtitle4: 'Stablecoin Terms Of Service', link:'#',
          subtitle5: 'Privacy Notice', link:'#',
          subtitle6: 'Cookie Policy', link:'#',
          subtitle7: 'Restricted Countries', link:'#',
          subtitle8: 'Bug Bounty Policy', link:'#',

        },

        {
          title: 'For You', 
          subtitle1:'Buy Bitcoin',
          subtitle2:'Buy Tether',
          subtitle3:'Sell Bitcoin',
          subtitle4:'Buy Bitcoin',
          subtitle5:'Demo web Wallet',
          subtitle6:'Become Vendor',
        },
        {
          title: 'For Your Business', 
          subtitle1:'Demo Web Pay',
          subtitle2:'Virtual Bitcoin Kiosk',
          subtitle3:'API Documentation',
      
        },

        {
          title: 'Growth', 
          subtitle1:'Demo Web Rewards Program',
          subtitle2:'Demo Web Trader Program',
          subtitle3:'Demo Web Peer Program',
          subtitle4:'Community',
        },

        {
          title: 'Buy Anywhere', 
          subtitle1:'Buy Bitcoin in USA',
          subtitle2:'Buy Bitcoin in Nigeria',
          subtitle3:'Buy Bitcoin in India',
        },

        {
          title: 'Useful Links', 
          subtitle1:'Demo Web Status',
          subtitle2:'Bitcoin Calculator',
          subtitle3:'Peer-to-Peer Market Prices',
        },

        {
          title: 'About Demo Web', 
          subtitle1:'About Us',
          subtitle2:'Business Contacts',
          subtitle3:'Careers',
          subtitle4:'Demo Web Blog',
          subtitle5:'Demo Web Reviews',
        },
      ])

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
.mobile-footer{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 16px */
letter-spacing: 0.16px;
}

.mobile-title{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 16px */
letter-spacing: 0.16px;
}
.demo-web1{
 font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 700 !important;
line-height: normal;
}

.FAQ-text{
  color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: underline; 
cursor: pointer;
}
.FAQ-text-light{
color: #64748B;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: underline; 
cursor: pointer;
}
</style>