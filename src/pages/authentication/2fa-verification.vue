<template>
  <div class="section">
    <LoginBG/>
    <Header/>

    <v-container class="form-layout overflow-hidden">
      <div class="section">
        <v-row no-gutters class="">
          <v-col dense cols="md-5" class="form" :class="isDark ? 'form' : 'form-light'" style="padding: 0px 70px">
            <div style="margin-top: 55px">
              <span class="card-title" :class="isDark ? 'card-title' : 'card-title-light'">Enable 2FA Verification</span>
              <div class="card-subtitle" :class="isDark ? 'card-subtitle' : 'card-subtitle-light'" style="margin-top: 20px">
                The Login 2step Verification adds an extra layer of security to your account.
              </div>
              <span class="otp-text">Enter code</span>

              <v-otp-input :length="6" v-model="otp" variant="plain" @input="onOtpChange"></v-otp-input>

              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <div class="d-flex" style="margin-top: 23px"> </div>
              </div>

              <div style="margin-top: 65px">
                <Button
                  buttonText="Enable authentication"
                  :loading="loading"
                  @click="verify2FA_()"
                />
              </div>
              <div class="d-flex" style="margin-top: 43px; margin-bottom: 140px">
              </div>
            </div>
          </v-col>

          <v-col cols="7" class="flex-lg-and-up hidden-sm-and-down">
            <div class="ma-8 carousel-styling">
              <Carousel />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { Verify2FA } from "@/composables/requests/users";
definePageMeta({
  middleware: 'auth'
});

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const otp = ref("");
const pinia = useStore();
const loading = ref(false);
const OtpCountdown = ref(60);
const timerFinished = ref(false);



const verify2FA_ = async () => {
  loading.value = true;

  const verify_otp = {
    email: pinia.state.email,
    code: otp.value,
  };

  console.log(verify_otp);
  try {
    const data = await Verify2FA(verify_otp);
    if (data.success) {
      pinia.setUser(data.data);
      navigateTo("/account/dashboard");
    } else {
      loading.value = false;
      push.error(data.message);
      otp.value = "";
    }

  } catch (e) {
    loading.value = false;
    console.log(e);
    push.error(`${e}`);
  }
};

const onOtpChange = () => {
  if (otp.value.length === 6) {  // Adjust this if your OTP length is different
    verify2FA_();
  }
};
</script>


<style scoped>
.carousel-styling {
  max-height: 550px;
  position: relative;
  top: 3%;
  bottom: 0;
}
.form :deep(.v-otp-input .v-field) {
  height: 50px !important;
  width: 51px !important;
  justify-content: flex-start !important;
  margin-top: 12px;
  border-radius: 15px;
  border: 1px solid #303a46;
  background: inherit !important;
  border-radius: 15px;
}
.form-light :deep(.v-otp-input .v-field) {
  height: 56px !important;
  width: 56px !important;
  justify-content: flex-start !important;
  margin-top: 12px;
  border-radius: 10px;
  background: white !important;
  border: 1px solid #969696;
  border-radius: 15px;
}
.card-subtitle {
  color: var(--Basic-White, #fff);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.card-subtitle-light {
  color: var(--Black-80, #1b2537) !important;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.v-otp-input__content {
  margin-right: 20px;
}
</style>