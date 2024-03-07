<template>
    <div>
        <Header/>
        <v-container style="margin-top: 70px;">
            <span class="swap1">Swap</span>
            <div style="border-radius: 24px; border: 1px solid #303A46; padding: 37px; margin-top: 40px;">
    
                <div class="d-flex" style="justify-content: space-between; background: #060A1D; position: relative;">
                    <div style="display: flex; align-items: center;">
                        <span class="success-text-1"> Successful <br>
                            <span style="font-size: 24px;font-style: normal; font-weight: 400;">Your coin has been successfully swapped</span>
                        </span>
                    </div>
                    
                    <div style="display: flex; flex-direction: column;">
                        <img src="/svg/Frame 1s.svg"/>
                        <img src="/svg/Frame 2s.svg"/>
                    </div>
                </div> 
                
                <div style="display: flex; justify-content: end;">
                    <v-btn  class="exchange-btn1 me-5">Start New Conversion</v-btn>
                </div>
            </div>  
        </v-container>
        <Footer/>
    </div> 
</template>

<style scoped>
.success-text-1{
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 60px; /* 166.667% */
}

.exchange-btn1{
border-radius: 20px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
width: 258px;
height: 60px !important;
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
letter-spacing: 0px;
position: relative !important;
}
</style>