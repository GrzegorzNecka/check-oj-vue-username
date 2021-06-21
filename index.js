import Vue from 'vue';
import inputUsername from './inputUsername';

const members = [
  { name: 'overment' },
  { name: 'poznaj-programowanie' },
  { name: 'algosmart' },
  { name: 'przeprogramowani' }
];

inputUsername();

new Vue({
  el: '#app',
  data: {
    startInputVal: 'username'
  },
  methods: {
    searchText: function(text) {
      console.log(text);
    }
  }
});
