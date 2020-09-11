window.Vue = require('vue');
import App from './App.vue';
import vuetify from './plugins/vuetify';

import router from './router'

const app = new Vue({
    vuetify,
    router,
    el: '#app',
    components: {
        App
    },
    render: h => h(App)
});