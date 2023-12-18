import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const app = createApp(App)

app.use(router)

app.mount('#app')
