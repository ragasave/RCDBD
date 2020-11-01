import vue from "vue";
import header from "./../layouts/header.vue";
import leftAside from "./../layouts/left-aside.vue";
import rightAside from "./../layouts/right-aside.vue";
import Playground from "./../playground.vue";
import dataTypes from "./data/dataType";
import $ from "jquery";

import 'vue-simple-context-menu/dist/vue-simple-context-menu.css'
import VueSimpleContextMenu from 'vue-simple-context-menu'


import config from './config';
import pg from './playground';
import db from './db.js';
import util from './util';
vue.use(config);
vue.use(pg);
vue.use(db);
vue.use(util);
vue.component('vue-simple-context-menu', VueSimpleContextMenu)

export default {
    name : "playgroundRoot",
    created(){
        window.dbApp = this;
        $('body').on('change', '.rc-right-aside input, .rc-right-aside select, .rc-right-aside textarea', function() {
            this.$db.update();
        }.bind(this));
        $('body').ready(function() {
            this.$db.updateAllConnector()
        }.bind(this));
        // load database
        // var localDB = localStorage.getItem('db');
        // if(localDB){
        //     this.db = JSON.parse(localDB);
        // }else{
        //     this.db = database;
        // }
        // localDB = undefined;

    },
    data (){
        return {
            db : null,
            dataTypes : dataTypes,
        };
    },
    methods : {
        // updateDB(){
        //     localStorage.setItem('db', JSON.stringify(this.db));
        // }
    },
    components : {
        headerLayout : header,
        leftAside,
        Playground,
        rightAside
    }
};
