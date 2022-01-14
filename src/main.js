import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

import 'mdb-vue-ui-kit/css/mdb.min.css'
import './assets/style.scss'

createApp(App).use(store).mount('#app');
