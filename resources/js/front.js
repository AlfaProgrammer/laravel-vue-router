window.Vue = require('vue');

//importiamo il componente APP

import App from './views/App';

const app = new Vue({
    el:'#root',
    render: h=>h(App) 
})