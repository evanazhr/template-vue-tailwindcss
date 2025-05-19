import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
console.log('router ', router)

app.use(createPinia())
app.use(router)
app.mount('#app')
