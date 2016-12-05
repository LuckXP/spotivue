import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase';
import VueResource from 'vue-resource';
import App from './App';

Vue.use(VueResource);
Vue.use(VueFire);


const db = firebase.initializeApp({
  apiKey: 'AIzaSyCR6-pTzUjhA5tB_EPIVX1w3x_5Mj00_WI',
  authDomain: 'spotivue.firebaseapp.com',
  databaseURL: 'https://spotivue.firebaseio.com',
  storageBucket: 'spotivue.appspot.com',
  messagingSenderId: '706074300175',
}).database();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  firebase: {
    songs: db.ref('songs'),
  },
});
