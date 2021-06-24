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
      if (!this.Validation(inputVal)) {
        return;
      }

      this.members.push({ name: inputVal });
      this.isValid = true;

    },
    resetInputVal: function() {
      return this.value;
    },
    Validation(inputVal) {
      const isDuplicate = this.members.filter(
        member => member.name === inputVal
      );

      const regex = /(^[\w\d])([\w\d]+$)|(-[\w\d]+$)+/g;
      const isAllowChar = regex.test(inputVal);

      if (isDuplicate.length) {
        alert(`parametr ${inputVal} już istnieje, podaj nowy paramter`);
        return false;
      } else if (!isAllowChar) {
        alert(`parametr  może zawierać liczby litery oraz "-"`);
        return false;
      }

      return true;
    }
  }
});
