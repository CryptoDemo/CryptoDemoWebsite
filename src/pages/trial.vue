<template>
  <div>
    <div class="text-center">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="dashboard-menu" style="width: 415.533px; height: 130px;">
          <div class="d-flex" style="padding: 35px"> 
                      <img src="/svg/Dashboard.svg" class="me-10" alt="dashboard-icon">
                      <div style="display: grid;">
                        <div class="d-flex">
                          <span class="acct-level-text me-2">Account Level 1</span>
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

      <v-list style="border-radius: 24px; border: 1px solid #303A46; background: #12181F; padding: 22px; position: relative;">
        <div style="position: relative; padding-top: 22px;">
        <img src="/svg/bluelevel-star.svg" class="position-absolute" style="top: 0; left: -10px;"/>
        <img src="/svg/bluelevel-line.svg" class="my-2"/>
        <div style="position: relative; display: grid;">
         <img src="/svg/greylevel-line.svg" class="position-absolute" style="left: -10px; top: -10px;"/>
         <img src="/svg/grey-star.svg" class="mt-4"/>
         <img src="/svg/greylevel-line.svg" style="margin-left: -10px;"/>
        </div>
      </div>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  </div>
</template>

<script setup>
// const items = [
//         { title: 'Click Me' },
//         { title: 'Click Me' },
//         { title: 'Click Me' },
//         { title: 'Click Me 2' },
//       ];

</script>

<style scoped>
.dashboard-menu{
border-radius: 20px;
background: var(--secondary-background, #12181F);
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
</style>