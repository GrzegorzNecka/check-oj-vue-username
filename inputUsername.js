import Vue from 'vue';

const inputUsername = () =>
  Vue.component('input-username', {
    props: ['resetInputVal', 'isValid'],
    template: `
 <div>

      <div v-if="isValid"> 
            <input  id="handle" 
            v-on:keyup.enter=" $emit('input', $event.target.value)"
            v-bind:value='resetInputVal()'
            type="text" class="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="handle" 
            placeholder="username">

      </div>

        <div v-else> 
            <input  id="handle" 
            v-on:keyup.enter=" $emit('input', $event.target.value) "
            type="text" class="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="handle" 
            placeholder="username">
        </div> 
  
  </div>
    
      `
  });

export default inputUsername;
