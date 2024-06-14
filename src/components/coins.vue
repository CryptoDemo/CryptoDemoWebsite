<template>
  <div>
     <v-container>
          <div style="margin-top: 110px; display: flex; width: 100% !important;">
             
            <div style="width: -webkit-fill-available">
              <div>   
                 <div class="wallet-box" :class="isDark ? 'wallet-border':'wallet-border-light'" style="border-radius: 24px; width: 100%; padding: 25px; margin-top: 28px; width: 100%;">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; flex-direction: column">
                      <span :class="isDark ? 'coin-name':'coin-name-light'" style="font-family: Manrope;font-size: 16px; font-style: normal; font-weight: 600">Hot Coins</span>
                      <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 12px; font-style: normal; font-weight: 400;">Updates every 60 seconds</span>
                    </div>
                    <div @click.stop style="margin-top: 4px; margin-bottom: 15px; display: flex; width: 40%; margin-inline-start: auto;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" style="margin-left: 16px; margin-top: 20px; left: 16%; margin-right: 10px; position: relative;">
                        <path d="M10.3033 18.2301C14.6756 18.2301 18.22 14.6148 18.22 10.1551C18.22 5.69538 14.6756 2.08008 10.3033 2.08008C5.93105 2.08008 2.38664 5.69538 2.38664 10.1551C2.38664 14.6148 5.93105 18.2301 10.3033 18.2301Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M19.0533 19.0809L17.3866 17.3809" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <v-textarea clearable variant="plain" rows="1" no-resize  placeholder="Search for Coins..." v-model="input" style=" border: 1px solid #64748B; height: 55px; border-radius: 30px; padding-left: 45px; padding-right: 15px; align-items: center; width: 50%;"></v-textarea>
                    </div>
                  </div>

                  <v-table style="display: grid! important; background: inherit; width: 100%; height: 420px;">
                    <thead>
                      <tr style="display: flex; margin-bottom: 8px;">

                        <th style="display: flex; align-items: center; align-self: center; width: 7%; justify-content: center;">
                          <div class="d-flex" >
                            <span class="table-header-text" :class="isDark ? 'text-dark':'text-light'">S/N</span>
                          </div>
                        </th>

                        <th style="display: flex; align-items: center; align-self: center; width: 20%; justify-content: center;">
                          <div class="d-flex" >
                            <span class="table-header-text" :class="isDark ? 'text-dark':'text-light'">Coin</span>
                          </div>
                        </th>

                        <th style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 24px; width: 42%; justify-content: center;">
                          <span class="table-header-text me-1"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Price (USD)</span>
                        </th>

                        <th style="display: flex; align-items: center; align-self: center; position: relative;right: 72px">
                          <span></span>
                        </th>
                        <th style="display: flex; align-items: center; align-self: center; position: relative;right: 72px">
                          <span></span>
                        </th> 
                      </tr>
                    </thead>
                  
                <tbody>
                  <tr v-for="(item, index) in filteredItems?.length ? filteredItems : pinia.state.tokenLists" :key="index" style="display: flex; justify-content: space-between;">

                    <!-- <div v-if="!filteredItems.includes(item)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="177" height="137" viewBox="0 0 177 137" fill="none">
  <path d="M1.96575 37.1891C2.00175 37.1841 2.03793 37.1811 2.07293 37.1781C2.57322 35.3831 3.59433 33.7766 5.00725 32.5617C6.42017 31.3467 8.16143 30.5779 10.0112 30.3522C11.8609 30.1265 13.736 30.454 15.3996 31.2936C17.0632 32.1332 18.4406 33.4469 19.3578 35.069C19.2334 35.2332 19.1358 35.4161 19.0688 35.611C18.3183 34.1622 17.1852 32.9468 15.7924 32.0968C14.3996 31.2469 12.8005 30.795 11.1689 30.7902C10.724 30.7908 10.2797 30.824 9.83977 30.89C8.13309 31.1455 6.53722 31.8905 5.24529 33.0346C3.95336 34.1786 3.02099 35.6728 2.56096 37.3361C2.39519 37.3393 2.23108 37.3708 2.07585 37.4291C2.07722 37.5164 2.08423 37.6036 2.09685 37.6901L2.04192 37.6962C1.57206 37.7666 1.14928 38.0203 0.866382 38.402C0.583487 38.7837 0.463555 39.2621 0.532886 39.7321C0.591903 40.118 0.774898 40.4743 1.05413 40.7472C1.33335 41.0201 1.69353 41.1948 2.08074 41.245C2.21474 41.26 2.36597 41.268 2.41497 41.275C2.85939 43.531 4.14356 45.534 6.00823 46.8793C7.8729 48.2246 10.1789 48.8118 12.4599 48.5221C14.798 48.1746 16.9023 46.9125 18.31 45.0136C19.7176 43.1146 20.3131 40.7343 19.9657 38.3961C19.9487 38.2851 19.9289 38.1741 19.9079 38.0631C20.0803 38.1561 20.2668 38.2202 20.4599 38.2531C20.4599 38.2761 20.4689 38.2982 20.4719 38.3212C20.8224 40.6771 20.2676 43.0782 18.9189 45.0414C17.5702 47.0046 15.5277 48.384 13.2028 48.902V52.8881H12.6908V49.0011C12.6388 49.0101 12.5909 49.021 12.5339 49.028C12.0733 49.0957 11.6083 49.1292 11.1427 49.1281C10.7222 49.1281 10.3023 49.0988 9.88591 49.0402V52.8842H9.37395V48.9511C7.58335 48.5777 5.93638 47.7012 4.62664 46.4244C3.31689 45.1477 2.39873 43.5236 1.97991 41.7431C1.48829 41.6742 1.03216 41.4482 0.679614 41.0988C0.327068 40.7493 0.096973 40.2951 0.0238528 39.8041C-0.0646301 39.1999 0.0902117 38.5853 0.454273 38.0951C0.818334 37.6049 1.36178 37.279 1.96575 37.1891Z" fill="white"/>
  <path d="M16.521 33.9631L18.05 40.2321L15.7021 40.319L15.6831 39.808L17.4041 39.7441L16.0242 34.0849L16.521 33.9631Z" fill="white"/>
  <path d="M13.667 42.015L13.6118 42.524C13.1589 42.5255 12.7126 42.4171 12.3108 42.2081C11.909 41.9991 11.5638 41.6958 11.305 41.3241C11.1465 40.9827 11.0635 40.6111 11.0616 40.2347C11.0597 39.8584 11.139 39.4859 11.294 39.1429L11.7591 39.358C11.6384 39.6272 11.5751 39.9185 11.5735 40.2135C11.572 40.5085 11.6322 40.8005 11.75 41.0709C11.9715 41.3693 12.2609 41.6106 12.5943 41.7748C12.9277 41.939 13.2955 42.0213 13.667 42.015Z" fill="white"/>
  <path d="M1.40894 38.7828L1.354 38.2741C1.64692 38.2127 1.95042 38.2242 2.23779 38.3077C2.52516 38.3913 2.78754 38.5443 3.00195 38.7531C3.18359 39.0074 3.30947 39.2972 3.37134 39.6036C3.4332 39.91 3.42955 40.226 3.36084 40.5309L2.86084 40.421C2.91142 40.1946 2.91608 39.9603 2.87451 39.7321C2.83294 39.5038 2.74605 39.286 2.6189 39.0919C2.45647 38.9476 2.26201 38.8444 2.05151 38.7907C1.84102 38.7369 1.62065 38.7341 1.40894 38.7828Z" fill="white"/>
  <path d="M125.663 136.794H176.257C176.257 136.794 177.188 128.918 162.682 124.911L129.282 125.111C126.67 127.966 125.998 132.404 125.663 136.794Z" fill="#2873FF"/>
  <path d="M79.4751 136.794H132.613C132.613 136.794 133.591 128.918 118.355 124.911L83.2981 125.111C80.7561 128.336 79.8271 132.404 79.4751 136.794Z" fill="#2873FF"/>
  <path d="M132.358 136.796H132.87C132.838 131.434 127.28 128.31 127.043 128.179L126.796 128.627C126.852 128.656 132.328 131.738 132.358 136.796Z" fill="white"/>
  <path d="M166.271 66.7659V0.419006L166.148 0.443909C160.194 4.30491 147.235 14.7731 146.466 33.1351C146.466 33.1341 145.573 51.4339 166.271 66.7659Z" fill="#2873FF"/>
  <path d="M69.3643 17.9471L69.3494 17.942L68.8284 17.8721C68.7974 17.8721 68.7673 17.8721 68.7373 17.8721C68.8832 17.6663 69.0692 17.4922 69.2842 17.3602C69.4992 17.2282 69.7387 17.141 69.9883 17.1041C70.6773 17.0601 71.3552 17.6041 71.9812 18.7261C72.1732 18.6533 72.376 18.6123 72.5813 18.605C72.4221 18.7776 72.2929 18.9757 72.1992 19.191C72.1302 19.2138 72.0633 19.2427 71.9993 19.2772L71.7664 19.4171L71.6414 19.1761C71.0934 18.1221 70.5412 17.585 70.0212 17.615C69.7708 17.6475 69.539 17.7647 69.3643 17.9471Z" fill="white"/>
  <path d="M60.26 17.986C59.693 18.61 59.3279 20.551 58.9429 23.132C58.7677 23.1204 58.5918 23.1324 58.4199 23.1679C58.8339 20.3679 59.2109 18.379 59.8809 17.642C60.093 17.3422 60.3825 17.1055 60.7185 16.9572C61.0545 16.8089 61.4246 16.7546 61.7891 16.8C62.7771 17.006 63.4529 18.1898 63.7749 18.8998C64.1819 18.1768 65.0291 16.945 66.0691 16.945H66.1001C66.7001 16.959 67.254 17.379 67.75 18.194C67.6372 18.2643 67.5343 18.3493 67.4441 18.447C67.4291 18.461 67.4171 18.4759 67.4021 18.4899C66.9821 17.7839 66.5359 17.467 66.0879 17.457H66.0691C65.1491 17.457 64.251 19.0138 63.981 19.6188L63.7139 20.2189L63.5049 19.601C63.3109 19.029 62.6049 17.501 61.6829 17.308C61.407 17.286 61.1304 17.337 60.8806 17.456C60.6308 17.575 60.4167 17.7579 60.26 17.986Z" fill="white"/>
  <path d="M18.699 59.5571C20.5397 59.8722 22.4035 60.0327 24.271 60.0371C31.308 60.0371 40.1951 57.656 49.3091 48.208C49.5031 48.008 49.691 47.7991 49.876 47.5891C50.0478 47.6656 50.2286 47.7202 50.4141 47.7519C50.1761 48.0293 49.9306 48.2996 49.678 48.563C42.993 55.493 35.602 59.456 27.709 60.341C24.7029 60.6677 21.6661 60.5765 18.6851 60.07C18.7271 59.9021 18.7318 59.7271 18.699 59.5571Z" fill="white"/>
  <path d="M37.6531 86.997C37.8071 86.872 53.2621 74.3669 70.2581 62.3229C93.1231 46.1229 107.746 38.423 113.717 39.453C119.239 40.404 122.388 42.0709 124.589 45.2079C127.635 49.5509 128.709 56.8688 128.072 68.9388C127.585 78.1498 126.106 90.214 123.386 106.911C125.443 113.449 127.5 119.727 129.178 124.711H163.578C155.456 95.5428 148.228 75.49 141.203 62.778C141.395 62.8058 141.591 62.8027 141.783 62.7689C148.814 75.5839 156.045 95.7058 164.161 124.898L164.251 125.222H128.813L128.755 125.048C128.493 124.272 126.067 117.054 123.209 108.012C122.355 113.218 121.382 118.867 120.284 125.012L120.246 125.223H81.282L94.7219 77.766C91.5503 85.47 87.5437 92.8031 82.7739 99.6339C77.1979 107.484 71.0239 113.603 64.4219 117.82C58.6121 121.585 51.9569 123.845 45.0559 124.398C44.8897 124.357 44.7193 124.336 44.5481 124.336C43.3361 124.336 42.1261 124.407 40.9141 124.395C39.8281 124.385 38.7401 124.221 37.6541 124.295L37.5591 124.232V87.0709L37.6531 86.997ZM38.0701 124.153C58.9851 125.709 73.6869 111.538 82.3479 99.3478C88.231 90.9261 92.938 81.7417 96.3389 72.048L96.8289 72.1959L81.957 124.71H119.816C124.528 98.3198 126.916 81.1098 127.562 68.9098C128.193 56.9628 127.148 49.7429 124.171 45.4999C122.057 42.4869 119.004 40.8809 113.631 39.9559C107.88 38.9659 92.9849 46.8429 70.5559 62.7369C54.2679 74.2799 39.3951 86.2468 38.0701 87.3158V124.153Z" fill="white"/>
  <path d="M9.89315 51.9741C9.89315 51.9741 11.774 54.222 13.203 52.041C13.203 52.041 15.8031 57.7109 30.1661 62.1169C31.3034 62.4096 32.4823 62.748 33.703 63.132V77.456L30.4852 77.1999C32.1202 80.9537 34.5313 84.3188 37.5601 87.0739V124.388C37.5601 124.388 17.7271 124.305 7.69613 102.088C-0.792874 83.2881 4.04115 53.9831 9.89315 51.9741Z" fill="#2873FF"/>
  <path d="M30.175 77.4148C26.632 76.9752 23.1824 75.9699 19.958 74.437L20.1802 73.9758C23.4283 75.52 26.9077 76.5208 30.48 76.938C43.38 78.079 54.8052 74.1589 64.5542 65.2009C82.2812 48.9109 82.8491 29.4129 82.6011 23.8249C82.4871 21.2739 81.8512 20.406 81.3362 20.125C81.1701 20.035 80.984 19.9886 80.7952 19.99C80.5593 19.9928 80.3276 20.0526 80.1201 20.1648L80.0032 20.2349C80.4122 22.5349 79.9291 26.535 78.5471 32.335L78.0471 32.2158C80.1411 24.4158 79.7141 20.03 79.1921 19.147C78.7921 18.621 78.3922 18.36 78.0122 18.384C77.1472 18.44 76.4121 19.9399 76.2051 20.5139L76.125 20.7349C76.396 22.9089 76.0251 26.1 74.9961 30.553L74.4961 30.438C75.6261 25.538 76.0162 22.1779 75.5552 20.1089C75.0142 18.8809 74.415 18.226 73.813 18.209H73.792C72.8 18.209 71.8351 19.8788 71.5461 20.5278L71.5251 20.574C71.9541 22.434 71.9872 25.332 71.5642 29.595L71.0552 29.5439C71.5552 24.5029 71.46 21.4548 70.781 19.8188C70.456 19.1478 69.874 18.2029 69.113 18.0439C68.8144 18.0205 68.515 18.0764 68.2449 18.206C67.9748 18.3356 67.7438 18.5344 67.5752 18.782C66.8272 19.605 66.408 22.55 65.875 26.282C64.769 34.048 63.098 45.7818 56.53 52.5908C49.464 59.9158 42.1352 64.0298 33.7002 64.9458V64.47C40.5662 63.725 48.0272 60.6699 56.1602 52.2349C62.6132 45.5459 64.2702 33.909 65.3672 26.209C65.9322 22.244 66.3401 19.3789 67.1941 18.4399C67.4188 18.122 67.7255 17.871 68.0815 17.7134C68.4376 17.5558 68.8296 17.4975 69.2161 17.5449C69.6521 17.7076 70.0495 17.9591 70.3833 18.2834C70.7171 18.6077 70.9799 18.9978 71.155 19.4289V19.4348C71.223 19.5678 71.2842 19.6949 71.3352 19.8079C71.7662 19.0359 72.6891 17.68 73.8201 17.699C74.6201 17.718 75.3411 18.4158 75.9651 19.7768C76.3121 19.0678 77.0141 17.9359 77.9751 17.8769C78.7131 17.8279 79.261 18.2719 79.928 19.4719C80.4806 19.3347 81.0646 19.4059 81.5681 19.6719C82.4891 20.1719 83.0072 21.557 83.1072 23.802C83.3582 29.446 82.785 49.1379 64.895 65.5779C56.143 73.6199 46.0652 77.6538 34.7952 77.6528C34.4482 77.6528 34.095 77.6469 33.748 77.6379C33.687 77.6379 33.578 77.6379 33.448 77.6379C32.3538 77.6288 31.2612 77.5536 30.176 77.4128L30.175 77.4148Z" fill="white"/>
  <path d="M76.2073 19.7781L75.5962 19.907C75.5379 19.6738 75.4232 19.4585 75.2622 19.28L76.5623 19.0051C76.3895 19.2341 76.2684 19.4978 76.2073 19.7781Z" fill="white"/>
  <path d="M19.0891 35.3981L32.0581 28.8981C33.1907 28.3303 34.3915 27.9102 35.6311 27.6481L66.3779 21.1581C66.2926 21.3925 66.2418 21.6381 66.2271 21.8871L63.27 22.5111C61.5695 24.5265 60.3396 26.8954 59.6699 29.4459C58.7189 32.9389 58.3639 38.246 61.1699 44.976C61.081 45.0783 61.0044 45.1907 60.9419 45.3109C58.0029 38.3849 58.366 32.922 59.342 29.337C59.9958 26.8922 61.1452 24.608 62.719 22.6261L45.9189 26.172C44.6011 27.8009 43.6313 29.6827 43.0691 31.701C42.1341 35.0321 41.9071 40.318 46.0491 46.682L59.1121 48.8429C58.9758 49.0383 58.8742 49.2559 58.812 49.486L35.9761 45.7079C34.6323 45.4857 33.3257 45.0782 32.094 44.4969C32.015 44.4609 31.9359 44.4229 31.8569 44.3839L19.082 37.9789C18.8429 37.8591 18.6418 37.6752 18.5012 37.4476C18.3607 37.2201 18.2861 36.958 18.2861 36.6906C18.2861 36.4231 18.3607 36.1608 18.5012 35.9332C18.6418 35.7057 18.8429 35.5217 19.082 35.402L19.0891 35.3981ZM21.6721 38.507L23.7319 39.5399C23.3135 37.6501 23.3313 35.6899 23.7839 33.808L21.708 34.849C21.5183 36.0599 21.5078 37.2921 21.677 38.506L21.6721 38.507ZM28.061 33.496C28.2603 32.735 28.5206 31.9914 28.8391 31.2721L26.5161 32.4369C26.3931 32.7889 26.278 33.157 26.177 33.546C25.5298 35.9714 25.6264 38.5351 26.4541 40.9049L28.7871 42.0751C27.5535 39.387 27.2983 36.3522 28.0659 33.496H28.061ZM29.0339 42.1959L31.5859 43.476C30.6759 41.9991 30.0766 40.3522 29.8247 38.6359C29.5728 36.9196 29.6738 35.17 30.1211 33.494C30.4547 32.2361 30.9484 31.0261 31.5901 29.8939L29.0801 31.153C28.726 31.9268 28.4391 32.73 28.2229 33.5531C27.4531 36.4397 27.7427 39.5066 29.0391 42.1981L29.0339 42.1959ZM26.0129 33.496C26.0989 33.166 26.1951 32.85 26.2981 32.546L23.9841 33.7059C23.4924 35.6509 23.4737 37.6855 23.9299 39.639L26.2351 40.795C25.4485 38.436 25.373 35.8976 26.0181 33.496H26.0129ZM36.094 45.0309L45.594 46.6029C41.553 40.2409 41.8001 34.945 42.7461 31.589C43.2873 29.6686 44.1856 27.8674 45.394 26.2799L35.7681 28.3119C34.5859 28.5622 33.4406 28.9629 32.3601 29.504L31.8601 29.7531C31.1636 30.937 30.6317 32.2103 30.2791 33.538C29.8253 35.237 29.7323 37.0122 30.0063 38.7494C30.2804 40.4865 30.9154 42.147 31.8701 43.6239L32.063 43.724L32.155 43.7689C32.228 43.8049 32.2999 43.8401 32.3789 43.8751C33.5595 44.4295 34.8117 44.8167 36.0991 45.026L36.094 45.0309ZM19.394 37.3651L21.4851 38.413C21.3382 37.2598 21.3496 36.0921 21.519 34.942L19.394 36.007C19.2682 36.0701 19.1623 36.1669 19.0884 36.2867C19.0144 36.4066 18.9751 36.5446 18.9751 36.6854C18.9751 36.8262 19.0144 36.9643 19.0884 37.0841C19.1623 37.2039 19.2682 37.3008 19.394 37.3639V37.3651Z" fill="white"/>
  <path d="M84.3972 53.0219C84.0763 53.1209 83.7931 53.3153 83.5852 53.5791L75.3701 52.2199C75.5039 52.0242 75.6015 51.8061 75.6582 51.5759L84.3972 53.0219Z" fill="white"/>
  <path d="M82.2039 33.2181C82.2853 32.8405 82.336 32.4569 82.355 32.0711C82.421 31.0341 82.8699 30.002 82.8469 28.919C82.844 28.703 82.8077 28.4888 82.739 28.284C82.8157 27.8727 82.8975 27.4754 82.9849 27.0921C83.7262 23.6811 85.0796 20.4325 86.979 17.504L79.5679 19.0679C79.4014 18.8287 79.1768 18.6362 78.915 18.5081L166.08 0.107971L166.614 -0.00311279V67.315L127.781 60.889C127.811 60.6582 127.806 60.424 127.765 60.1949L136.939 61.713C131.839 54.307 128.651 46.8371 127.47 39.4991C126.519 33.7334 126.857 27.8285 128.46 22.209C130.063 16.5896 132.891 11.3953 136.741 6.99908L108.841 12.888C105.909 16.2941 103.759 20.301 102.541 24.627C100.902 30.545 100.902 36.7969 102.541 42.7149C102.428 42.765 102.32 42.8261 102.219 42.897C101.862 41.562 101.577 40.2088 101.366 38.8431C100.608 34.0683 100.897 29.1856 102.215 24.534C103.414 20.3096 105.485 16.3828 108.292 13.0059L87.4739 17.4C85.4786 20.3665 84.0697 23.6876 83.323 27.1839C82.087 32.6559 81.7328 41.2161 86.6118 51.6751C86.5065 51.721 86.4062 51.7772 86.312 51.8431C83.4775 46.051 82.0688 39.6651 82.2039 33.2181ZM165.915 0.843079C162.467 3.11897 159.331 5.83603 156.587 8.92511C152.122 13.9391 146.771 22.21 146.636 33.14C146.512 43.113 151.88 51.724 156.404 57.192C159.238 60.6101 162.432 63.7134 165.93 66.4481V0.841125L165.915 0.843079ZM128.889 21.95C126.262 30.783 125.622 44.85 137.406 61.794L165.333 66.4151C161.971 63.7373 158.893 60.7215 156.147 57.4151C151.583 51.9021 146.17 43.2151 146.295 33.1351C146.432 22.0951 151.833 13.748 156.34 8.68903C158.915 5.80146 161.826 3.23158 165.01 1.034L137.31 6.87994C133.412 11.2109 130.534 16.3605 128.889 21.95Z" fill="white"/>
  <path d="M8.18992 43.512C9.67592 43.512 6.09678 41.8432 7.19578 38.0352C8.29478 34.2272 15.2149 40.9282 20.5759 36.1272C25.9369 31.3262 17.8189 24.1271 15.7759 26.4111C13.7329 28.6951 16.293 29.8892 14.406 30.2112C12.519 30.5332 1.81491 28.0901 1.98191 37.6951C1.97991 37.6991 6.70392 43.508 8.18992 43.512Z" fill="white"/>
  <path d="M15.8491 128.974H62.7891V124.106H15.8491V128.974ZM62.449 128.633H16.1909V124.447H62.449V128.633Z" fill="white"/>
    </svg>
                    </div> -->
                    <td class="mt-2 me-5" style="display: flex; align-items: center;">{{index+1}}</td>

                    <td style="display: contents;">
                      <div class="d-flex" style="align-items: center; width: 30%;">
                            <img :src="item.icon" width="30" class="me-3 py-5"/>
                            <div style="flex-direction:row">
                              <span class="coin-name1" :class="isDark ? 'coin-name':'coin-name-light'" style="font-family: Manrope; font-weight: 600; font-size: 16px; line-height:normal">{{item.name }}</span>
                              <span class="sml-text d-flex flex-lg-and-up hidden-md-and-down" :class="isDark ? 'text-dark':'text-light'">{{ item.symbol }}</span>
                            </div>
                      </div>
                    </td>
                  

                    <td class="mt-4" style="width: 20%; overflow: scroll; overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical;-webkit-line-clamp: 1; display: flex; align-self: self-start;"><span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'">{{ item?.converted_value || 0 }}</span></td>
                      <td style="display: flex; align-items: center;"> 
                        <v-chip 
                        class="ma-2" color="success" variant="outlined">
                        0.008%
                        </v-chip> 
                      </td>
                  </tr>
                </tbody>
            </v-table>
          </div>

        </div>
      </div>
    </div>
  </v-container>   
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import {getTokens, currencyConverter} from "@/composables/requests/tokens";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const pageNumber = ref(1)
const symbolPrice= ref()
const conversionResult = ref([]);
const currentPageNumber = ref(1);
const fetchMore = async()=>{
  // increment the pageNumber
  currentPageNumber.value += 1;

  // fetch the new page record
  
}
try {
  const data = await getTokens(pageNumber.value);
  if(data.success) {
    const fetchedTokens = data.data.result;

    const storedTokenIds = pinia.state.tokenLists.map(item => item.id);

    // Check if there are any new items in the fetched data
    const newItems = fetchedTokens.filter(item => !storedTokenIds.includes(item.id));

    if (newItems.length > 0) {
      console.log('fetching')
      pinia.setTokenLists(fetchedTokens);
    }
  } else {
    console.log('Unavailable')
  }
} catch (error) {
  console.log(error);
};

watch(()=>conversionResult.value,(newVal)=>{
  pinia.state.tokenLists.map(t=>{
  const tokenConversion = newVal.find(tc=>tc.from== t.symbol);
  if(tokenConversion){
    t.converted_value = tokenConversion.value;
  }
});
});


const convertCurrencies = async () => {


// Get the list of coins from pinia state

const coins = pinia.state.tokenLists;

try {
  console.log("Starting currency conversion...");

  const convertCurrency = [];
  
  // Loop through each coin and convert to USD
  for (const coin of coins) {
    convertCurrency.push({ from: coin.symbol, to: "USD" });
  }

  try {
    const data = await currencyConverter(convertCurrency);
    console.log(`Data received: `, data);

    if (data.success) {
      // Store the conversion result in the array
      conversionResult.value = data.data;
    } else {
      console.log(`Conversion failed:`, data.message);
    }
  } catch (error) {
    console.log(`Error converting:`, error);
  }

  // Optionally, store all conversion results in pinia
  // pinia.setTokenPrices(conversionResults, addMinutes(10));

} catch (error) {
  console.log(error);
}

// Log the array to see the stored conversion results
console.log("Conversion Results:", conversionResult.value);
};

let input = ref("");

const filteredItems = computed(() => {
const searchTerm = input.value.toLowerCase();
return pinia.state.tokenLists.filter((loc) => {
const lowername = loc.name.toLowerCase();
const symbol = loc.symbol.toLowerCase();
return (
lowername.includes(searchTerm) || symbol.includes(searchTerm)
);
});
});
const props = defineProps({
  selectedCoin: String,
});

onMounted(async () => {
await convertCurrencies();

});
</script>

<style scoped>
.swap{
border-radius: 16px;
box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
display: flex;
width: 86.333px;
height: 48px !important;
padding: 12px 16px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
letter-spacing: 0px;
text-transform: unset;
align-content: center;
}
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
border: none !important;
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%;
}
.v-table--density-default > .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
border: none !important;
}

.browser-txt{
color: var(--White, var(--Colors-Base-white, #FFF));
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.sml-text{
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.table-header-text{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.active-offers-dark{
background: var(--secondary-background, #1B2537);
}
.active-offers-light{
background: var(--secondary-background, #F8FAFC);
}
.wallet-border{
border: 0.5px solid rgba(142, 155, 174, 0.5);
}
.wallet-border-light{
border: 1px solid #DBE8FF;
}

.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
}
::-webkit-scrollbar {
display: none;
}

@media screen and (max-width: 600px) {
.wallet-box{
padding: 15px !important;
width: 100% !important;
}
.coin-name1{
font-size: 14px !important;
/* width: 10px !important; */
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
overflow: hidden;
text-overflow: ellipsis;
}

}
</style>
