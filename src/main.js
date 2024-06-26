import "./assets/main.css";
import "animate.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_BASE_API_KEY,
  authDomain: "yourmealvue3.firebaseapp.com",
  projectId: "yourmealvue3",
  storageBucket: "yourmealvue3.appspot.com",
  messagingSenderId: "582039068589",
  appId: "1:582039068589:web:6b1577e2796d750c7c4b24",
};

initializeApp(firebaseConfig);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
