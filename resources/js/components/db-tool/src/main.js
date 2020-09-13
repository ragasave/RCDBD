import vue from "vue";
import header from "./../layouts/header.vue";
import leftAside from "./../layouts/left-aside.vue";
import rightAside from "./../layouts/right-aside.vue";
import Playground from "./../playground.vue";
import database from "./data/database";
import dataTypes from "./data/dataType";
import $ from "jquery";
export default {
    created(){
        var vm = this;
        $('body').on('change', '.rc-right-aside input, .rc-right-aside select, .rc-right-aside textarea', function() {
            vm.updateDB();
        });

        var localDB = localStorage.getItem('db');
        if(localDB){
            this.db = JSON.parse(localDB);
        }else{
            this.db = database;
        }
    },
    data (){
        return {
            db : null,
            dataTypes : dataTypes,
        };
    },
    methods : {
        updateDB(){
            localStorage.setItem('db', JSON.stringify(this.db));
        }
    },
    components : {
        headerLayout : header, 
        leftAside,
        Playground,
        rightAside
    }
};