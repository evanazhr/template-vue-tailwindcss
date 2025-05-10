import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)

console.log('router ', router)

app.use(router)
app.mount('#app')
