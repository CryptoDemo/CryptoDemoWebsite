<template>
    <div>
      <div class="text-center">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="dashboard-menu" :class="isDark ? 'sd-nav1-dark':'sd-nav1-light'" style="width: fit-content; height: 130px; box-shadow: none;">
            <div class="d-flex" style="padding: 35px"> 
               <img src="/svg/Dashboard.svg"  class="me-10" alt="dashboard-icon">
                  <div style="display: grid;">
                    <div class="d-flex">
                      <span class="acct-level1 me-2" :class="isDark ? 'card-text-dark':'card-text-light'">Account Level 1</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <g clip-path="url(#clip0_5037_26892)">
                            <path d="M10.7879 18.3327C6.18542 18.3327 2.45459 14.6018 2.45459 9.99935C2.45459 5.39685 6.18542 1.66602 10.7879 1.66602C15.3904 1.66602 19.1213 5.39685 19.1213 9.99935C19.1213 14.6018 15.3904 18.3327 10.7879 18.3327ZM10.7879 16.666C12.556 16.666 14.2517 15.9636 15.502 14.7134C16.7522 13.4632 17.4546 11.7675 17.4546 9.99935C17.4546 8.23124 16.7522 6.53555 15.502 5.2853C14.2517 4.03506 12.556 3.33268 10.7879 3.33268C9.01981 3.33268 7.32412 4.03506 6.07388 5.2853C4.82364 6.53555 4.12126 8.23124 4.12126 9.99935C4.12126 11.7675 4.82364 13.4632 6.07388 14.7134C7.32412 15.9636 9.01981 16.666 10.7879 16.666ZM9.95459 12.4993H11.6213V14.166H9.95459V12.4993ZM11.6213 11.1285V11.666H9.95459V10.416C9.95459 10.195 10.0424 9.98304 10.1987 9.82676C10.3549 9.67048 10.5669 9.58268 10.7879 9.58268C11.0247 9.58267 11.2565 9.51543 11.4565 9.38879C11.6565 9.26215 11.8165 9.08132 11.9177 8.86733C12.019 8.65335 12.0574 8.41501 12.0285 8.18005C11.9996 7.94509 11.9046 7.72317 11.7545 7.54011C11.6043 7.35705 11.4053 7.22037 11.1806 7.14599C10.9559 7.07161 10.7146 7.06257 10.4849 7.11994C10.2553 7.1773 10.0466 7.29871 9.88323 7.47003C9.71985 7.64135 9.60849 7.85554 9.56209 8.08768L7.92709 7.76018C8.02845 7.25359 8.26251 6.78299 8.60536 6.3965C8.9482 6.01002 9.38752 5.7215 9.87841 5.56045C10.3693 5.3994 10.8942 5.37159 11.3993 5.47986C11.9045 5.58814 12.3718 5.82861 12.7536 6.1767C13.1354 6.5248 13.4179 6.96802 13.5722 7.46107C13.7265 7.95412 13.7471 8.4793 13.632 8.98294C13.5168 9.48657 13.27 9.9506 12.9167 10.3276C12.5634 10.7045 12.1164 10.9809 11.6213 11.1285Z" fill="#A4A8AB"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_5037_26892">
                              <rect width="20" height="20" fill="white" transform="translate(0.786621)"/>
                            </clipPath>
                          </defs>
                      </svg>
                    </div>
                    <img src="/svg/Line1.svg"/>
                    <span class="acct-level-text1">1000 USD</span>     
                  </div>
                </div>
          </v-btn>
        </template>
  
        <v-list :class="isDark ? 'coin-bg1':'coin-bg1-light'" style="border-radius: 24px; border: 1px solid #303A46; width: 231px; padding: 22px; position: relative; margin-left: 170px;">
          <div class="d-flex">
            <div  class="me-5" style="position: relative; padding-top: 22px;">
            <!-- <img src="/svg/bluelevel-star.svg" class="position-absolute" style="top: 0; left: -10px;"/> -->
            <img src="/svg/bluelevel-line.svg" class="my-2"/>
            <div style="position: relative; display: grid;">
              <img src="/svg/greylevel-line.svg" class="position-absolute" style="left: -10px; top: -10px;"/>
              <img src="/svg/grey-star.svg" class="mt-4"/>
              <img src="/svg/greylevel-line.svg" style="margin-left: -10px;"/>
            </div>
        </div>
  
          <div style="display: flex; flex-direction: column;">
            <div style="display: flex; flex-direction: column;">
              <span class="lvl-1" :class="isDark ? 'card-text-dark':'card-text-light'">Level 1</span>
                <v-btn :class="isDark ? 'toggle-btn-dark':'toggle-btn-light'" style="border-radius: 4px; width: 130px; ">
                  <img src="/svg/grad-msg.svg" class="me-2"/>
                  <span class="phone-text1">Email Verified</span>
                </v-btn>
  
              <div style="display: flex; align-items: center; margin-top: 12px; margin-bottom: 38px;">
                <img src="/svg/bluecheck.svg" class="me-2"/>
                <span class="phone-text1">Buy Crypto up to 1000 USD</span>
              </div>
        
            </div>
  
            <div style="display:flex;flex-direction: column; margin-top: 7px; margin-bottom: 29px;">
              <span class="lvl-1" :class="isDark ? 'card-text-dark':'card-text-light'">Level 2</span>

              <v-btn :class="isDark ? 'toggle-btn-dark':'toggle-btn-light'" style="border-radius: 4px; width: 130px;">
                <img src="/svg/bluephone.svg" class="me-2"/>
                <span class="phone-text1">Phone Verified</span>
              </v-btn>
  
              <v-btn :class="isDark ? 'unverified-dark':'unverified-light'" style="border-radius: 4px; margin-top: 9px; width: 130px;">
                <img src="/svg/profile-circle.svg" class="me-2" v-if="theme.global.current.value.dark"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" class="me-2" v-else>
                  <path d="M16.5 9C16.5 4.8675 13.1325 1.5 9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 11.175 2.4375 13.1325 3.9225 14.505C3.9225 14.5125 3.9225 14.5125 3.915 14.52C3.99 14.595 4.08 14.655 4.155 14.7225C4.2 14.76 4.2375 14.7975 4.2825 14.8275C4.4175 14.94 4.5675 15.045 4.71 15.15C4.7625 15.1875 4.8075 15.2175 4.86 15.255C5.0025 15.3525 5.1525 15.4425 5.31 15.525C5.3625 15.555 5.4225 15.5925 5.475 15.6225C5.625 15.705 5.7825 15.78 5.9475 15.8475C6.0075 15.8775 6.0675 15.9075 6.1275 15.93C6.2925 15.9975 6.4575 16.0575 6.6225 16.11C6.6825 16.1325 6.7425 16.155 6.8025 16.17C6.9825 16.2225 7.1625 16.2675 7.3425 16.3125C7.395 16.3275 7.4475 16.3425 7.5075 16.35C7.7175 16.395 7.9275 16.425 8.145 16.4475C8.175 16.4475 8.205 16.455 8.235 16.4625C8.49 16.485 8.745 16.5 9 16.5C9.255 16.5 9.51 16.485 9.7575 16.4625C9.7875 16.4625 9.8175 16.455 9.8475 16.4475C10.065 16.425 10.275 16.395 10.485 16.35C10.5375 16.3425 10.59 16.32 10.65 16.3125C10.83 16.2675 11.0175 16.23 11.19 16.17C11.25 16.1475 11.31 16.125 11.37 16.11C11.535 16.05 11.7075 15.9975 11.865 15.93C11.925 15.9075 11.985 15.8775 12.045 15.8475C12.2025 15.78 12.36 15.705 12.5175 15.6225C12.5775 15.5925 12.63 15.555 12.6825 15.525C12.8325 15.435 12.9825 15.3525 13.1325 15.255C13.185 15.225 13.23 15.1875 13.2825 15.15C13.4325 15.045 13.575 14.94 13.71 14.8275C13.755 14.79 13.7925 14.7525 13.8375 14.7225C13.92 14.655 14.0025 14.5875 14.0775 14.52C14.0775 14.5125 14.0775 14.5125 14.07 14.505C15.5625 13.1325 16.5 11.175 16.5 9ZM12.705 12.7275C10.6725 11.3625 7.3425 11.3625 5.295 12.7275C4.965 12.945 4.695 13.2 4.47 13.4775C3.33 12.3225 2.625 10.74 2.625 9C2.625 5.4825 5.4825 2.625 9 2.625C12.5175 2.625 15.375 5.4825 15.375 9C15.375 10.74 14.67 12.3225 13.53 13.4775C13.3125 13.2 13.035 12.945 12.705 12.7275Z" fill="#8E9BAE"/>
                  <path d="M9 5.19727C7.4475 5.19727 6.1875 6.45727 6.1875 8.00977C6.1875 9.53227 7.38 10.7698 8.9625 10.8148C8.985 10.8148 9.015 10.8148 9.03 10.8148C9.045 10.8148 9.0675 10.8148 9.0825 10.8148C9.09 10.8148 9.0975 10.8148 9.0975 10.8148C10.6125 10.7623 11.805 9.53227 11.8125 8.00977C11.8125 6.45727 10.5525 5.19727 9 5.19727Z" fill="#8E9BAE"/>
                </svg>
                <span class="phone-text1">ID Verification</span>
              </v-btn>
              <div>
                <span class="menu-text mt-4" :class="isDark ? 'card-text-dark':'card-text-light'">Increase trade and send out limits to 10, 000 USD</span>
                <span class="menu-text my-4" :class="isDark ? 'card-text-dark':'card-text-light'">Convert one crypto into another</span>
                <span class="menu-text" :class="isDark ? 'card-text-dark':'card-text-light'">Trade and send any crypto</span>
              </div>
            </div>
  
            <!-- <div style="margin-top: 10px;">
              <span class="lvl-1" :class="isDark ? 'text-dark':'text-light'">Level 3</span>
              <v-btn style="border-radius: 4px; border: 1px solid #303A46; background: #12181F; margin-top: 24px; width: 150px;">
                <img src="/svg/location.svg" class="me-2"/>
                <span class="phone-text1">Address Verification</span>
              </v-btn>
              <span class="menu-text mt-3">Unlimited trades and send outs</span>
            </div> -->
          </div>
        </div>
  
  
        <div v-for="(item, index) in items" :key="index"></div>
        </v-list>
      </v-menu>
    </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { useTheme } from 'vuetify';

  const theme = useTheme()
  const isDark = computed(() =>  theme.global.current.value.dark);
  
  </script>
  
  <style scoped>
  .dashboard-menu{
  border-radius: 20px;
  background: var(--secondary-background, #10192D);
  letter-spacing: 0px;
  text-transform: capitalize;
  justify-content: flex-start;
  }
  
  .acct-level-text1{
  overflow: hidden;
  color: #FF3E46;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  }
  .phone-text1{
  /* color: var(--Gray-Medium-light, #969696); */
  font-family: Manrope;
  font-size: 10px !important;
  font-style: normal;
  font-weight: 500 !important;
  line-height: normal;
  letter-spacing: 0px;
  text-transform: capitalize;
  }
  
  .lvl-1{
  /* color: var(--Colors-Base-white, #FFF); */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
  }
  
  .menu-text{
  font-family: Manrope;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: list-item;;
  }
  .acct-level1{
  overflow: hidden;
  color: var(--White, var(--Colors-Base-white, #FFF));
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
.coin-bg1 {
border-radius: 15px !important;
background: #1B2537 !important;
width: 100%;
display: flex;
margin: auto;
justify-content: center;
margin-top: 10px;
border: 0.5px solid #2f3946;
}
.coin-bg1-light{
border-radius: 15px !important;
border: 1px solid #DBE8FF !important;
background: #F8FAFC !important;
color: #060A1D;
width: 100%;
margin-top: 10px;
border: 0.5px solid #2f3946;
box-shadow: none !important;
}

.toggle-btn-dark{
background: #303A46 !important;
border: 1px solid #303A46;
box-shadow: none;
} 
.toggle-btn-light{
border-radius: 4px;
border: 1px solid var(--Primary-60, #89B2FF);
background: #D2DBEF;
box-shadow: none;
} 
.unverified-dark{
background: #12181F !important;
border: 1px solid #303A46 !important;
box-shadow: none;
} 
.unverified-light{
border-radius: 4px;
border: 1px solid var(--Gray-Light, #D8D8D8);
background: #FFF;
box-shadow: none;
} 

.text-dark{
  color: #646464 !important;
} 
.text-light{
  color: #646464 !important;
}
  </style>