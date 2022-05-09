window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Vue = require('vue');

//importiamo il componente APP

import App from './views/App.vue';


const app = new Vue({
    el:'#root',
    render: h=>h(App) 
})