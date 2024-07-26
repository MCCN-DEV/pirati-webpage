import './assets/main.css'
import './assets/styles/tailwind.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

createApp(App).use(router).mount('#app')
