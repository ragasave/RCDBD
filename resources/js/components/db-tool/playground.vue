<template>
    <div class="playground-board">
        <div class="playground-board-wrapper">
            <div @mousewheel="mouseWheel($event)" @contextmenu="boardContextMenu($event)" class="playground-board-tables" ref="rcdbdBoardTables">
                <!-- Table -->
                <vue-draggable-resizable :active="true" v-for="(table, index) in db.tables" v-bind:key="index" w="auto" h="auto" :resizable="false" :parent="false">
                <div :rcdbTableSelected="db.selectedTableIndex == index" class="rcdbd-table" @click="db.selectedTableIndex = index">
                    <div class="rcdbd-table-wrapper">
                        <div class="rcdbd-tablename">
                            <span v-text="table.name"></span>
                            <v-icon class="icon-show-table-options">mdi-dots-vertical</v-icon>
                        </div>
                        <hr class="">
                        <div class="rcdbd-table-columns">
                            <table class="rcdbd-table-columns-wrapper">
                                <tr v-for="(column, index) in table.columns" v-bind:key="index" class="rcdbd-table-column">
                                    <td class="rcdbd-table-column-pk">
                                        <v-icon v-if="column.pk">mdi-key</v-icon>
                                    </td>
                                    <td class="rcdbd-table-column-name">
                                        <span v-text="column.name"></span>
                                    </td>
                                    <td class="rcdbd-table-column-type">
                                        <span v-text="column.type"></span>
                                    </td>
                                    <!-- <td class="rcdbd-table-column-fk"></td> -->
                                    <td class="rcdbd-table-column-null">
                                        <span v-if="column.null">null</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                </vue-draggable-resizable>
            </div>

            <div class="playground-board-zoom-control" rcdbd-zoomer>
                <div class="rcdbd-zoom-wrapper">
                    <div class="rcdbd-zoom-item">
                        <div class="rcdbd-zoom-item-wrapper text--secondary pr-8">
                            <span class=" font-title" v-text="Math.round(scale*100)"></span>%
                        </div>
                    </div>
                    <div class="rcdbd-zoom-item" @click="zoom(scale-0.1)">
                        <div class="rcdbd-zoom-item-wrapper">
                            <v-icon>mdi-minus</v-icon>
                        </div>
                    </div>
                    <div class="rcdbd-zoom-item" @click="zoom(scale+0.1)">
                        <div class="rcdbd-zoom-item-wrapper">
                            <v-icon>mdi-plus</v-icon>
                        </div>
                    </div>
                    <div class="rcdbd-zoom-item">
                        <div class="rcdbd-zoom-item-wrapper">
                            <v-icon>mdi-fit-to-page-outline</v-icon>
                        </div>
                    </div>
                </div>
            </div>



            <div class="playground-board-summary" rcdbd-summary>
                <div class="rcdbd-summary-wrapper">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
const $ = require('jquery');
const velocity = require('velocity-animate');
export default {
    props:{
        db:Object,
    },
    data()  {
        return {
            scale : 1,
            translateX : 1,
            translateY : 1,
            scaling : false,
        }
    },
    created() {
       $('body').on('click', '.playground-board-tables', (e) => {
           if($(e.target).parents('.rcdbd-table').length == 0){
                // this.db.selectedTableIndex = null;
           }
       });
       $(window).keydown((e) => {
           let keyCode = e.keyCode || e.which;
           if(e.ctrlKey && keyCode == 189){
                e.preventDefault();
               this.zoom(this.scale-0.1);
           }else if(e.ctrlKey && keyCode == 187){
               e.preventDefault();
                this.zoom(this.scale+0.1);

           }
       })
    },
    methods : {
        mouseWheel(e){
            e.preventDefault();
            // if(e.deltaY < 1 && e.deltaX == -0){
            //     this.zoom(this.scale+0.1);
            // }else if(e.deltaY > 1 && e.deltaX == -0){
            //     this.zoom(this.scale-0.1);
            // }
            // this.scroll(++this.translateX, ++this.translateY);
        },
        scroll(x,y){
            Velocity(this.$refs.rcdbdBoardTables, {translateX : x, translateY:y}, {
                duration : 0  
            })
        },
        zoom(scale){
            if(this.scaling || scale > 2 || scale < 0.1){return}
            scale = scale || 0;
            this.scale = scale;
            this.scaling = true;
            Velocity(this.$refs.rcdbdBoardTables, {scale : scale}, {
                duration : 150  
            })
            .then(function(elements) { this.scaling = false; }.bind(this))
            .catch(function(error) { this.scaling = false; }.bind(this))
        },
        boardContextMenu(e){
            e.preventDefault();
        }
    },
    components:{
        'vue-draggable-resizable' : VueDraggableResizable
    }
}
</script>