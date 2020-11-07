import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './pages/App';
import router from './router';
import store from './store';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  store,
  vuetify: new Vuetify(),
  render: (h) => h(App),
});
