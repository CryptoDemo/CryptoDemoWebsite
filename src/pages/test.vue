<template>
     <div class="sd-nav2">
       <span style="color: #C3CDDB; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 400;">Filter</span>
       <div>
          <span style="color: #C3CDDB; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600;">Applied filters</span>
        </div>

        <div style="display: flex;">
          <v-btn class="btn-filter1 me-3">
            Bitcoin
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" style="margin-left: 5px;">
                <g clip-path="url(#clip0_2934_42452)">
                  <path d="M8.00065 15.1673C4.31865 15.1673 1.33398 12.1827 1.33398 8.50065C1.33398 4.81865 4.31865 1.83398 8.00065 1.83398C11.6827 1.83398 14.6673 4.81865 14.6673 8.50065C14.6673 12.1827 11.6827 15.1673 8.00065 15.1673ZM8.00065 13.834C9.41514 13.834 10.7717 13.2721 11.7719 12.2719C12.7721 11.2717 13.334 9.91514 13.334 8.50065C13.334 7.08616 12.7721 5.72961 11.7719 4.72941C10.7717 3.72922 9.41514 3.16732 8.00065 3.16732C6.58616 3.16732 5.22961 3.72922 4.22941 4.72941C3.22922 5.72961 2.66732 7.08616 2.66732 8.50065C2.66732 9.91514 3.22922 11.2717 4.22941 12.2719C5.22961 13.2721 6.58616 13.834 8.00065 13.834ZM8.00065 7.55798L9.88598 5.67198L10.8293 6.61532L8.94332 8.50065L10.8293 10.386L9.88598 11.3293L8.00065 9.44332L6.11532 11.3293L5.17198 10.386L7.05798 8.50065L5.17198 6.61532L6.11532 5.67198L8.00065 7.55798Z" fill="#A4A8AB"/>
                </g>
                <defs>
                  <clipPath id="clip0_2934_42452">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
              </defs>
            </svg>
          </v-btn>

          <v-btn class="btn-filter1">
            Completed
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <g clip-path="url(#clip0_2934_42452)">
                  <path d="M8.00065 15.1673C4.31865 15.1673 1.33398 12.1827 1.33398 8.50065C1.33398 4.81865 4.31865 1.83398 8.00065 1.83398C11.6827 1.83398 14.6673 4.81865 14.6673 8.50065C14.6673 12.1827 11.6827 15.1673 8.00065 15.1673ZM8.00065 13.834C9.41514 13.834 10.7717 13.2721 11.7719 12.2719C12.7721 11.2717 13.334 9.91514 13.334 8.50065C13.334 7.08616 12.7721 5.72961 11.7719 4.72941C10.7717 3.72922 9.41514 3.16732 8.00065 3.16732C6.58616 3.16732 5.22961 3.72922 4.22941 4.72941C3.22922 5.72961 2.66732 7.08616 2.66732 8.50065C2.66732 9.91514 3.22922 11.2717 4.22941 12.2719C5.22961 13.2721 6.58616 13.834 8.00065 13.834ZM8.00065 7.55798L9.88598 5.67198L10.8293 6.61532L8.94332 8.50065L10.8293 10.386L9.88598 11.3293L8.00065 9.44332L6.11532 11.3293L5.17198 10.386L7.05798 8.50065L5.17198 6.61532L6.11532 5.67198L8.00065 7.55798Z" fill="#A4A8AB"/>
                </g>
                <defs>
                  <clipPath id="clip0_2934_42452">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
              </defs>
            </svg>
          </v-btn>
        </div>

      
        <div class="mx-auto"  width="300">
          <v-list v-model:opened="open" style="background: inherit;">

            <v-list-group value="Users">
              <template v-slot:activator="{ props }">
                <v-list-item rounded="shaped" v-bind="props">
                    <span style="color: #C3CDDB;font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Trade Outcome</span>   
                </v-list-item>
              </template>


              <v-list-group class="mt-4">
                <template v-slot:activator="{ props }">
                  <div class="px-6" v-bind="props" style="display: flex; align-items: center;">
                    <div style="display: flex; align-items: center;">
                      <div class="d-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" class="me-3">
                              <path d="M4.08334 14.168V15.8346C4.08334 16.2767 4.25894 16.7006 4.5715 17.0131C4.88406 17.3257 5.30798 17.5013 5.75001 17.5013H15.75C16.192 17.5013 16.616 17.3257 16.9285 17.0131C17.2411 16.7006 17.4167 16.2767 17.4167 15.8346V14.168" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M6.58334 9.16797L10.75 13.3346L14.9167 9.16797" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M10.75 3.33398V13.334" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span class="buy-text1">Buy</span>
                      </div>
                    <v-btn class="btn-filter1" style="position: absolute; right: 5px;">25</v-btn>
                  </div>
                  </div>
                  <div class="px-6" v-bind="props" style="display: flex; align-items: center; margin-top: 25px;">
                    <div style="display: flex; align-items: center;">
                      <div class="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" class="me-3">
                          <path d="M3.58334 5.83203V4.16536C3.58334 3.72334 3.75894 3.29941 4.0715 2.98685C4.38406 2.67429 4.80798 2.4987 5.25001 2.4987H15.25C15.692 2.4987 16.116 2.67429 16.4285 2.98685C16.7411 3.29941 16.9167 3.72334 16.9167 4.16536V5.83203" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.08334 10.832L10.25 6.66536L14.4167 10.832" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M10.25 16.666V6.66602" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                          <span class="buy-text1">Sell</span>
                      </div>
                    <v-btn class="btn-filter1" style="position: absolute; right: 5px;">25</v-btn>
                  </div>
                </div>
                </template>
              </v-list-group>
              
             

             


            </v-list-group>
          </v-list>
        </div>
        <div class="mx-auto"  >
          <v-list v-model:opened="open" style="background: inherit;">

            <v-list-group value="Users">
              <template v-slot:activator="{ props }">
                <v-list-item
                rounded="shaped"
                  v-bind="props">
                  <span style="color: #C3CDDB;font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Trade Outcome</span>  
                </v-list-item>
              </template>


              <v-list-group class="mt-4">
                <template v-slot:activator="{ props }">
                  <div class="px-6" v-bind="props" style="display: flex; align-items: center;">
                    <div style="display: flex; align-items: center;">
                      <div class="d-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" class="me-3">
                              <path d="M4.08334 14.168V15.8346C4.08334 16.2767 4.25894 16.7006 4.5715 17.0131C4.88406 17.3257 5.30798 17.5013 5.75001 17.5013H15.75C16.192 17.5013 16.616 17.3257 16.9285 17.0131C17.2411 16.7006 17.4167 16.2767 17.4167 15.8346V14.168" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M6.58334 9.16797L10.75 13.3346L14.9167 9.16797" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M10.75 3.33398V13.334" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span class="buy-text1">Buy</span>
                      </div>
                    <v-btn class="btn-filter1" style="position: absolute; right: 5px;">25</v-btn>
                  </div>
                  </div>
                  <div class="px-6" v-bind="props" style="display: flex; align-items: center; margin-top: 25px;">
                    <v-list-group style="display: flex; align-items: center;">
                      <div class="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" class="me-3">
                          <path d="M3.58334 5.83203V4.16536C3.58334 3.72334 3.75894 3.29941 4.0715 2.98685C4.38406 2.67429 4.80798 2.4987 5.25001 2.4987H15.25C15.692 2.4987 16.116 2.67429 16.4285 2.98685C16.7411 3.29941 16.9167 3.72334 16.9167 4.16536V5.83203" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.08334 10.832L10.25 6.66536L14.4167 10.832" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M10.25 16.666V6.66602" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                          <span class="buy-text1">Sell</span>
                      </div>
                    <v-btn class="btn-filter1" style="position: absolute; right: 5px;">25</v-btn>
                    </v-list-group>
                </div>
                </template>
              </v-list-group>
              
             

             


            </v-list-group>
          </v-list>
        </div>
   
      </div>

     

</template>
<script setup>
const open =  ref(['Users']);
    const admins = [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ];
  // const cruds = [
  //       ['Create', 'mdi-plus-outline'],
  //       ['Read', 'mdi-file-outline'],
  //       ['Update', 'mdi-update'],
  //       ['Delete', 'mdi-delete'],
  //     ];

</script>
<style>
 
.sd-nav2{
border-radius: 24px;
background: var(--secondary-background, #12181F);
padding: 17px;
width: 306px;
 }  
 
.btn-filter1{
border-radius: 13px !important;
border: 1px solid rgba(128, 129, 149, 0.30) !important;
display: flex;
padding: 8px 9px;
align-items: center;
height: 37px !important;
background: inherit !important;
letter-spacing: 0px !important;
text-transform: capitalize !important;
box-shadow: none;
}
.v-icon--size-default {
    font-size: calc(var(--v-icon-size-multiplier)* 1.5em);
    display: none;
}

.buy-text1{
color: var(--White, var(--Colors-Base-white, #FFF));
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
</style>