import { createApp } from 'vue';
import App from './app.vue';
import BuBuUI from '@bubu-ui/components';
const app = createApp(App);
app.use(BuBuUI);
app.mount('#app');
