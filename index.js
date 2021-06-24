import Vue from 'vue';
import inputUsername from './inputUsername';
import membersOutput from './membersOutput';

const members = [
  { name: 'overment' },
  { name: 'poznaj-programowanie' },
  { name: 'algosmart' },
  { name: 'przeprogramowani' }
];

inputUsername();
membersOutput();

new Vue({
  el: '#app',
  data: {
    members: [...members],
    value: '',
    isValid: false
  },
  methods: {
    getInputVal: function(inputVal) {
      // this.members = [...members];

      console.log(inputVal);

      this.members.push({ name: inputVal });

      this.isValid = true;
    },
    resetInputVal: function() {
      return this.value;
    }
  }
});
