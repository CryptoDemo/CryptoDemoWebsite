<template>
  <div>
    <div class="sd-nav1" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'">
      <div v-for="(item, i) in navigation" :key="i">
        <div style="display: flex; justify-content: space-between;">

          <router-link :to="item.link">
            <v-btn class="nav-options1"
              :class="[isDark ? 'nav-options1-dark' : 'nav-options1-light', isActive(item.link) ? (isDark ? 'active-button-dark' : 'active-button-light') : '']">
              <!-- <div v-html="item.icon" class="me-2 mt-1"></div> -->
              <img
                :src="isDark ? (!isActive(item.link) ? item.icon : item.activeIcon) : (!isActive(item.link) ? item.icon : item.darkIcon)"
                :class="!isActive(item.link) ? 'me-2 mt-1' : 'me-2'">
              {{ item.title }}
            </v-btn>
          </router-link>
        </div>
      </div>
    </div>

    <div class="adv" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="margin-top: 32px;">
      <div style="display: flex; justify-content: space-between;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 18 22" fill="none"
          class="me-3 mt-2">
          <path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11 4.5H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M9.00001 18.1C9.85605 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85605 15 9.00001 15C8.14397 15 7.45001 15.694 7.45001 16.55C7.45001 17.406 8.14397 18.1 9.00001 18.1Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div>
          <span :class="isDark ? 'text-dark' : 'text-light'"
            style="font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 800!important; line-height: 28px;">Download
            the Betacrypto✨️ mobile app and dive into<br> the world <br> of crypto trading!</span>
        </div>
      </div>
      <v-btn
        style="border-radius: 8px; display: flex;  background: linear-gradient(360deg, #2873FF, #0B6B96); padding: 6px 45px; color: white; letter-spacing: 0px; box-shadow: none; text-transform: unset; width: 100%; height: 40px!important; font-weight: 600;">Get
        App</v-btn>
    </div>
  </div>
</template>
<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();


const navigation = [

  { icon: '/svg/dashboardCopy.svg', darkIcon: '/svg/activeDark/dashboard.svg', activeIcon: '/svg/active/dashboard.svg', title: 'Dashboard', link: '/account/dashboard' },
  { icon: '/svg/market.svg', darkIcon: '/svg/activeDark/market.svg', activeIcon: '/svg/active/market.svg', title: 'MarketPlace', link: '/account/marketplace/activeOffers', },
  { icon: '/svg/createoffer.svg', darkIcon: '/svg/activeDark/createoffer.svg', activeIcon: '/svg/active/createoffer.svg', title: 'Create Offer', link: '/account/marketplace/createOffer', },
  { icon: '/svg/trades.svg', darkIcon: '/svg/activeDark/trades.svg', activeIcon: '/svg/active/trades.svg', title: 'Trades', link: '/account/marketplace/trades', },
  { icon: '/svg/addressBook.svg', darkIcon: '/svg/activeDark/addressBook.svg', activeIcon: '/svg/active/addressBook.svg', title: 'Address Book', link: '/account/trade/addressBook', },
  { icon: '/svg/profileSide.svg', darkIcon: '/svg/activeDark/profile1.svg', activeIcon: '/svg/active/profileSide.svg', title: 'profile', link: '/account/profile', },
  { icon: '/svg/security.svg', darkIcon: '/svg/activeDark/security.svg', activeIcon: '/svg/active/security.svg', title: 'Security', link: '/account/security', },
  { icon: '/svg/settingSide.svg', darkIcon: '/svg/activeDark/settingSide.svg', activeIcon: '/svg/active/settingSide.svg', title: 'Settings', link: '/account/settings' },


];

// const navigation = [

// {icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   </svg>`, title: 'Dashboard', link:'/account/dashboard'},

//   {icon:`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="currentColor">
//   <path d="M2.16663 18.4814H13" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M4.57159 14.625H10.595C12.5233 14.625 13 15.1017 13 17.0083V21.4608C13 23.3675 12.5233 23.8442 10.595 23.8442H4.57159C2.64326 23.8442 2.16663 23.3675 2.16663 21.4608V17.0083C2.16663 15.1017 2.64326 14.625 4.57159 14.625Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M23.8333 16.25C23.8333 20.4425 20.4425 23.8333 16.25 23.8333L17.3875 21.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M2.16663 9.75008C2.16663 5.55758 5.55746 2.16675 9.74996 2.16675L8.61247 4.06258" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M20.0416 11.9167C22.734 11.9167 24.9166 9.73414 24.9166 7.04175C24.9166 4.34936 22.734 2.16675 20.0416 2.16675C17.3492 2.16675 15.1666 4.34936 15.1666 7.04175C15.1666 9.73414 17.3492 11.9167 20.0416 11.9167Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`,  title: 'MarketPlace', link:'/account/marketplace/activeOffers', },

//   {icon:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-database-fill" viewBox="0 0 16 16">
//     <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223"/>
//     <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
//     <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
//     <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
//   </svg>`,  title: 'Create Offer', link:'/account/marketplace/createOffer', },

//   {icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//     <path d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M2.5 12.4113V7.84132C2.5 6.65132 3.23 5.59128 4.34 5.17128L12.28 2.17128C13.52 1.70128 14.85 2.62131 14.85 3.95131V7.7513" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M22.5588 13.9692V16.0292C22.5588 16.5792 22.1188 17.0292 21.5588 17.0492H19.5988C18.5188 17.0492 17.5288 16.2592 17.4388 15.1792C17.3788 14.5492 17.6188 13.9592 18.0388 13.5492C18.4088 13.1692 18.9188 12.9492 19.4788 12.9492H21.5588C22.1188 12.9692 22.5588 13.4192 22.5588 13.9692Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M7 12H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   </svg>`,  title: 'Trades', link:'/account/marketplace/trades', },


// { icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 80 81" fill="none">
//   <path d="M60 7.4668H20C14.4667 7.4668 10 11.9001 10 17.3668V53.7335C10 59.2001 14.4667 63.6668 20 63.6668H22.5333C25.1667 63.6668 27.7333 64.7001 29.6 66.5668L35.3 72.2001C37.9 74.7668 42.1 74.7668 44.7 72.2001L50.4 66.5668C52.2667 64.7001 54.8333 63.6668 57.4667 63.6668H60C65.5333 63.6668 70 59.2001 70 53.7335V17.3668C70 11.9001 65.5333 7.4668 60 7.4668ZM40 19.3001C43.6 19.3001 46.5 22.2335 46.5 25.8001C46.5 29.3335 43.7 32.1668 40.2333 32.3001C40.1 32.3001 39.9 32.3001 39.7333 32.3001C36.2333 32.1668 33.4667 29.3335 33.4667 25.8001C33.5 22.2335 36.4 19.3001 40 19.3001ZM49.1667 49.7668C44.1333 53.1335 35.8667 53.1335 30.8333 49.7668C26.4 46.8335 26.4 41.9668 30.8333 39.0001C35.9 35.6335 44.1667 35.6335 49.1667 39.0001C53.6 41.9668 53.6 46.8001 49.1667 49.7668Z" 
//     fill="currentColor" 
//     stroke="currentColor" 
//     stroke-width="1.5" 
//     stroke-linecap="round" 
//     stroke-linejoin="round"/>
// </svg>`, title: 'Address Book', link:'/account/trade/addressBook', },


// { icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//   <path d="M12.12 12.9807C12.05 12.9707 11.96 12.9707 11.88 12.9807C10.12 12.9207 8.72 11.4807 8.72 9.71066C8.72 7.90066 10.18 6.43066 12 6.43066C13.81 6.43066 15.28 7.90066 15.28 9.71066C15.27 11.4807 13.88 12.9207 12.12 12.9807Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M18.74 19.5798C16.96 21.2098 14.6 22.1998 12 22.1998C9.40001 22.1998 7.04001 21.2098 5.26001 19.5798C5.36001 18.6398 5.96001 17.7198 7.03001 16.9998C9.77001 15.1798 14.25 15.1798 16.97 16.9998C18.04 17.7198 18.64 18.6398 18.74 19.5798Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M12 22.2002C17.5228 22.2002 22 17.723 22 12.2002C22 6.67735 17.5228 2.2002 12 2.2002C6.47715 2.2002 2 6.67735 2 12.2002C2 17.723 6.47715 22.2002 12 22.2002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`, title: 'profile', link:'/account/profile', },

//   {icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//   <path d="M7.79999 13.9998V9.7998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M7.95001 18.1998C9.02697 18.1998 9.90002 17.3267 9.90002 16.2498C9.90002 15.1728 9.02697 14.2998 7.95001 14.2998C6.87306 14.2998 6 15.1728 6 16.2498C6 17.3267 6.87306 18.1998 7.95001 18.1998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M7.79999 9.8002C8.7941 9.8002 9.59998 8.9943 9.59998 8.00018C9.59998 7.00607 8.7941 6.2002 7.79999 6.2002C6.80588 6.2002 6 7.00607 6 8.00018C6 8.9943 6.80588 9.8002 7.79999 9.8002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M16.2 9.8002C17.1941 9.8002 18 8.9943 18 8.00018C18 7.00607 17.1941 6.2002 16.2 6.2002C15.2059 6.2002 14.4 7.00607 14.4 8.00018C14.4 8.9943 15.2059 9.8002 16.2 9.8002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M7.88 14.0003C8.15 12.9503 9.10999 12.1703 10.24 12.1803L12.3 12.1903C13.87 12.2003 15.21 11.1903 15.7 9.78027" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M9 2.2002H15C20 2.2002 22 4.2002 22 9.2002V15.2002C22 20.2002 20 22.2002 15 22.2002H9C4 22.2002 2 20.2002 2 15.2002V9.2002C2 4.2002 4 2.2002 9 2.2002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`,  title: 'Security', link:'/account/security',},

//   {icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//   <path d="M12 15.2002C13.6569 15.2002 15 13.857 15 12.2002C15 10.5433 13.6569 9.2002 12 9.2002C10.3431 9.2002 9 10.5433 9 12.2002C9 13.857 10.3431 15.2002 12 15.2002Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M2 13.0806V11.3206C2 10.2806 2.85 9.42062 3.9 9.42062C5.71 9.42062 6.45 8.14062 5.54 6.57062C5.02 5.67062 5.33 4.50062 6.24 3.98062L7.97 2.99062C8.76 2.52062 9.78 2.80062 10.25 3.59062L10.36 3.78062C11.26 5.35062 12.74 5.35062 13.65 3.78062L13.76 3.59062C14.23 2.80062 15.25 2.52062 16.04 2.99062L17.77 3.98062C18.68 4.50062 18.99 5.67062 18.47 6.57062C17.56 8.14062 18.3 9.42062 20.11 9.42062C21.15 9.42062 22.01 10.2706 22.01 11.3206V13.0806C22.01 14.1206 21.16 14.9806 20.11 14.9806C18.3 14.9806 17.56 16.2606 18.47 17.8306C18.99 18.7406 18.68 19.9006 17.77 20.4206L16.04 21.4106C15.25 21.8806 14.23 21.6006 13.76 20.8106L13.65 20.6206C12.75 19.0506 11.27 19.0506 10.36 20.6206L10.25 20.8106C9.78 21.6006 8.76 21.8806 7.97 21.4106L6.24 20.4206C5.33 19.9006 5.02 18.7306 5.54 17.8306C6.45 16.2606 5.71 14.9806 3.9 14.9806C2.85 14.9806 2 14.1206 2 13.0806Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`,  title: 'Settings', link:'/account/settings'},


// ];

const route = useRoute();

const isActive = (link) => {
  return route.path === link;
};

</script>
<style scoped>
.sd-nav1 {
  border-radius: 24px;
  display: inline-flex;
  padding: 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.nav-options1 {
  display: flex;
  width: 283px !important;
  height: 56px !important;
  flex-shrink: 0;
  border-radius: 8px !important;
  justify-content: flex-start !important;
  align-items: center;
  box-shadow: none !important;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize !important;
  letter-spacing: 0px !important;
}

.nav-options1-dark {
  background: var(--secondary-background, #0c1428) !important;
  color: #8E9BAE !important;
}

.nav-options1-light {
  color: #8e9bae !important;
}

.active-button-dark {
  border-radius: 8px;
  border-left: 2px solid var(--Primary-100, #2873FF);
  background: var(--dark-bg, #10192D) !important;
  color: #ffffff !important;
  font-weight: 900 !important;
  font-size: 16px !important;
}

.active-button-light {
  border-radius: 8px;
  border-left: 2px solid #4284FF !important;
  background: #F8FAFC !important;
  color: #10192D !important;
  font-weight: 900 !important;
  font-size: 16px !important;
}

.adv {
  display: flex;
  width: 305px;
  padding: var(--spacing-3xl, 24px);
  align-items: center;
  align-content: center;
  gap: 23px 179px;
  flex-wrap: wrap;
  border-radius: 16px;
}

.profile-cards-dark {
  background: #10192D !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px !important;
}

.profile-cards-light {
  background: #F8FAFC !important;
}
</style>