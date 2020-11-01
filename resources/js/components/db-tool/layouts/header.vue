<template>
    <v-toolbar dense>
      <div @mousedown="pg.leftAside.toggle()">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </div>

      <v-toolbar-title>
          <a href="https://github.com/ragasave">
          <div>
          RCDBD
          </div>
          <div style="  font-size: 16px;margin-top: -9px;">
              Ragasave
          </div>
          </a>
      </v-toolbar-title>
      <!-- <span>{{$getConfig('leftMenuEnabled')+""}}</span> -->
      <v-spacer></v-spacer>
      <v-btn icon>
        <a href="https://github.com/ragasave">
            <v-icon>mdi-github</v-icon>
        </a>
      </v-btn>
<!--

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
    }
  },
  methods : {

  }
}
</script>
