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
    members: [...members],
    startInputVal: 'username'
  },
  methods: {
    getInputVal: function(inputVal) {
      this.members = [...members];

      console.log(inputVal);
    }
  }
});
