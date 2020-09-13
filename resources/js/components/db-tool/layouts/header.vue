<template>  
    <v-toolbar dense>
      <div @click="toggleMenu">
        <v-app-bar-nav-icon @click="showLeftMenu != showLeftMenu"></v-app-bar-nav-icon>
      </div>

      <v-toolbar-title>RCDBD</v-toolbar-title>

      <v-spacer></v-spacer>
<!-- 
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-toolbar>
</template>


<script>
const $ = require('jquery');

export default {
  data(){
    return {
      showLeftMenu:false
    }
  },
  methods : {
    toggleMenu(){
      this.showLeftMenu = !this.showLeftMenu;
      if(this.showLeftMenu){
        $('.rc-left-aside').show();
      }else{
        $('.rc-left-aside').hide();
      }
    }
  }
}
</script>