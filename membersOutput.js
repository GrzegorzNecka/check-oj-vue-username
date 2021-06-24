import Vue from 'vue';

const membersOutput = () =>
  Vue.component('members-output', {
    props: ['member'],
    template: `

      <div 
      <p>{{member.name}} </p>
    
      </div>

    `
  });

export default membersOutput;
