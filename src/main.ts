import { createApp } from "vue";
import App from "./App.vue";

import "./styles/index.scss";

import BuBuUI from "./components/button/";
createApp(App).use(BuBuUI).mount("#app");
