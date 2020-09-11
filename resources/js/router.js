import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import PlaygroundMain from './components/db-tool/main.vue';

const routes = [
    { name: "", path: '/', component:  {template :  `
        <router-link to="playground">Playground</router-link>
    `}},
    { name: "playground", path: '/playground', component:  PlaygroundMain},
]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
export default new VueRouter({
    routes:routes
})