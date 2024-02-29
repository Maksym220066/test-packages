import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify';

const pinia = createPinia()


createApp(App)
    .use(vuetify)
    .use(pinia)
    .mount('#app')
