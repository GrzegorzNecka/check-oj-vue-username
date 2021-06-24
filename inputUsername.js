import Vue from 'vue';

const inputUsername = () =>
  Vue.component('input-username', {
    props: ['resetInputVal', 'isValid', 'value'],

    computed: {
      setActiveClass: function() {
        if (this.isValid) {
          return '';
        }
      }
    },

    template: `
 <div>

            <input  id="handle" 
            v-on:keyup.enter=" $emit('input', $event.target.value)"
            v-bind:value='setActiveClass'
            type="text" class="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="handle" 
            placeholder="username">


 
  </div>
    
      `
  });

export default inputUsername;
