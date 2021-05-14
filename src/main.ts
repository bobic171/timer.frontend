import { createApp } from 'vue';
import './styles/app.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret, faLemon as fasLemon,
  faBuilding as fasBuilding,
  faClipboard as fasClipboard,
  faPlus as fasPlus,
  faUser as fasUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import store from './store';
import App from './App.vue';

library.add(faUserSecret, fasLemon,
  fasBuilding, fasClipboard, fasPlus,
  fasUser);

createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
