import Vue from 'vue';

const inputUsername = () =>
  Vue.component('input-username', {
    props: ['value'],
    template: `
      <input id="handle" 

      v-on:keyup.enter="$emit('input', $event.target.value)"

      type="text" class="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="handle" placeholder="username">
    `
  });

export default inputUsername;
