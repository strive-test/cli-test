<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/reset.css'

createApp(App).mount('#app')
=======
import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/reset.css";
import router from "./router";
console.log("dev/2.0.3");
createApp(App).use(router).mount("#app");
>>>>>>> 24f9a1543f6a8904e41697bdc9385d2e06fe7fb3
