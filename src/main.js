import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const MY_ICONS = {
  complete: '',
  cancel: '',
  close: '',
  delete: '', // delete (e.g. v-chip close)
  clear: '',
  success: '',
  info: '',
  warning: '',
  error: '',
  prev: '',
  next: '',
  checkboxOn: '',
  checkboxOff: '',
  checkboxIndeterminate: '',
  delimiter: '', // for carousel
  sort: '',
  expand: '',
  menu: '',
  subgroup: '',
  dropdown: '',
  radioOn: '',
  radioOff: '',
  edit: '',
};

Vue.use(vuetify, {
  icons: MY_ICONS,
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
