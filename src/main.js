import { createApp } from 'vue'
import App from './App.vue'

import './style.css'
import { i18n } from './core/i18n'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
