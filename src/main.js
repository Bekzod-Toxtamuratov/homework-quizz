import firstPlugin from '@/plugins/firstPlugin'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import App from './App.vue'
import i18n from './plugins/i18n'
import router from './router'
import store from './store'
import './style.css'
const pinia =createPinia()
const app = createApp(App)
app.use(router)
app.use(Vue3Toasity)



app.use(i18n)
app.use(firstPlugin)
app.use(store)
app.use(pinia)
app.mount('#app')
