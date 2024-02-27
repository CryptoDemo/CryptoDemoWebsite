<template>
  <div>
          <v-row no-gutters style="overflow:;">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
            </v-col>

            <v-col cols="9" style="margin-bottom: 194px">
                <div class="pa-2 ma-2">
                    
                    <div class="acct-settings" style="display: flex; justify-content: space-between; margin-bottom: 47px">    
                        <span class="acct-text"> Security Questions</span>
                        <span class="mail-text">vaststudiosng@gmail.com</span>  
                    </div>
 
                    <section style="width: 938px;">
                         <v-expansion-panels variant="popout" style="display: contents !important">
                                <div v-for=" (FAQs, i ) in FAQ" :key="i" >
                                        <v-expansion-panel  :class="isDark ? 'expansion-panel':'expansion-panel-light'"  >
                                            <v-expansion-panel-title expand-icon="mdi-chevron-down" collapse-icon="mdi-chevron-up">
                                            <span :class="isDark ? 'title-text':'title-text-light'"> {{FAQs.question}} </span>
                                            </v-expansion-panel-title>
                                            
                                            <v-expansion-panel-text>
                                                <div><span class="answer-text d-flex" style="margin-bottom: 32px;">{{FAQs.subQuestion1}}</span></div>
                                                <div><span class="answer-text d-flex" style="margin-bottom: 32px;">{{FAQs.subQuestion2}}</span></div>
                                                <div><span class="answer-text d-flex" style="margin-bottom: 32px;">{{FAQs.subQuestion3}}</span></div>
                                                <div><span class="answer-text d-flex">{{FAQs.subQuestion4}}</span></div>
                                            </v-expansion-panel-text>
                                        </v-expansion-panel>
                                            <input type="text" class="response-input" placeholder="Your answer here" width="100%"/>
                                    </div>
                        </v-expansion-panels>
                                    <v-btn class="primary-btn1" style="font-weight: 600" width="224px">Save Answers</v-btn>
                    </section>
                        
                        
                </div>
            </v-col>     
          </v-row>
          
          <Footer/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';



const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);

const FAQ = [
    {question: 'Question 1', subQuestion1:'What is Demo Web and how does it work?', subQuestion2:'What is Demo Web and how does it work?', subQuestion3:'What is Demo Web and how does it work?', subQuestion4:'What is Demo Web and how does it work?'},
    {question:'Question 2', subQuestion1:'How can I start trading on Demo Web?', subQuestion2:'How can I start trading on Demo Web?', subQuestion3:'How can I start trading on Demo Web?', subQuestion4:'How can I start trading on Demo Web?'},  
    {question:'Question 3', subQuestion1:'How can I start trading on Demo Web?', subQuestion2:'How can I start trading on Demo Web?', subQuestion3:'How can I start trading on Demo Web?', subQuestion4:'How can I start trading on Demo Web?'},  
     
]
</script>

<style scoped>

.acct-settings{
border-radius: 16px;
background: var(--secondary-background, #12181F);
display: flex;
width: 940px;
padding: 21px var(--spacing-3xl, 24px);
justify-content: space-between;
align-items: center;
margin-bottom: 16px;
}


.mail-text{
  color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 28px; 
}

.expansion-panel{
border-radius: 16px;
background: var(--secondary-background, #12181F);
display: flex;
width: 938px;
/* padding: 12px 40px; */
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
margin-bottom: 16px;
}

.expansion-panel-light{
border-radius: 15px;
background: #F8FAFC;
display: flex;
/* padding: 30px; */
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
margin-bottom: 16px;
}
.answer-text{
color: #F8FAFC;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
flex: 1 0 0;
margin-bottom: 32px;
}
.title-text{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.title-text-light{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.response-input{
border-radius: 16px;
background: var(--secondary-background, #12181F);
height: 48px;
width: 100%;
padding: 15px;
outline: none;
margin-bottom: 16px;
}
</style>