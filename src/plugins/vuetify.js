// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';
import { VDateInput } from 'vuetify/labs/VDateInput';
import { VNumberInput } from 'vuetify/labs/VNumberInput'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VDateInput,
      VNumberInput,
    },
    theme: {
      defaultTheme: 'DarkThemeConfig',
      themes: {
        DarkThemeConfig,
        LightThemeConfig
      },
    },
    // ... your configuration
    ssr:true,
  })
  app.vueApp.use(vuetify)
});

const DarkThemeConfig = {
  dark: true,
  colors: {
    background: '#060A1D',
    height: '100%', 
     
  }
} 

const LightThemeConfig = {
  dark: false,
  colors: {
    background: '#FFF',
    opacity: 0.2,
  }
}

