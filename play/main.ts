import { createApp } from 'vue';
import App from './app.vue';
import { BuButton } from '@bubu-ui/components';
const app = createApp(App);
app.use(BuButton);
app.mount('#app');
