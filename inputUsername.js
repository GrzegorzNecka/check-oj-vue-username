import Vue from 'vue';

const inputUsername = () =>
  Vue.component('input-username', {
    data: function() {
      return {
        message: '✏️ Start writing...'
      };
    },

    template: `
<input id="handle" type="text" class="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="handle" placeholder="username">
`
  });

export default inputUsername;
