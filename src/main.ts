import { createApp } from "vue";
import App from "./App.vue";

import "./styles/index.scss";

import BuBuUI from "../build/";
createApp(App).use(BuBuUI).mount("#app");
