<template>
    <div class="playground-board" @contextmenu="playgroundHandleRightClick">
        <div class="playground-board-wrapper">
            <div @mousewheel="mouseWheel($event)" @contextmenu="boardContextMenu($event)" class="playground-board-tables" ref="rcdbdBoardTables">
                <!-- Table -->
                <vue-draggable-resizable   @dragstop="$db.updateTablePosition" :x="$db.getTableByIndex(index).left" :y="$db.getTableByIndex(index).top" :active="true" v-for="(table, index) in $db.getTables()" v-bind:key="index" w="auto" h="auto" :resizable="false" :parent="false">
                <div :rcdbTableSelected="$db.isThisTableIsSelected(index)" @contextmenu="tableHandleRightClick($event, table)" :rcdbTableIndex="index" class="rcdbd-table" @click="$db.selectTable(index)" :data-top="table.top" :data-left="table.left">
                    <div class="rcdbd-table-wrapper">
                        <div class="rcdbd-tablename">
                            <span v-text="table.name"></span>
                            <v-icon class="icon-show-table-options" >mdi-dots-vertical</v-icon>
                        </div>
                        <hr class="">
                        <div class="rcdbd-table-columns">
                            <table class="rcdbd-table-columns-wrapper">
                                <tr v-for="(column, cIndex) in $db.getTableByIndex(index).columns" :rcdbColumnIndex="cIndex" :rcdbColumnSelected="table.selectedColumnIndex == cIndex" @click="table.selectedColumnIndex = cIndex" v-bind:key="cIndex" :class="['rcdbd-table-column', table.selectedColumnIndex == cIndex ? 'active' : '']">
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
                                    <!-- <td class="rcdbd-table-column-ai">
                                        <span v-if="column.ai">ai</span>
                                    </td> -->
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
            <vue-simple-context-menu
            :elementId="$util.uniqueId()"
            :options="playgroundMenuOptions"
            ref="playgroundContextMenu"
            @option-clicked="playgroundOptionClicked"
            />

            <vue-simple-context-menu
            :elementId="$util.uniqueId()"
            :options="tableMenuOptions"
            ref="tableContextMenu"
            @option-clicked="tableOptionClicked"
            />
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
            playgroundMenuOptions : [
                {name : "Create table", method : this.$db.createTable}
            ],
            tableMenuOptions : [
                {name : "Add column", method : this.$db.addColumn},
                {name : "Delete table", method : this.$db.deleteTable},
            ]
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
        },
        playgroundOptionClicked(item){
            if(item.option.method){
                item.option.method();
            }
        },
        playgroundHandleRightClick(e){
            if(e.target != this.$refs.rcdbdBoardTables){
            // this.$refs.playgroundContextMenu.hideMenu();
                return;
            }
            this.$refs.playgroundContextMenu.showMenu(event)
        },
        tableHandleRightClick(e, item){
            // if(e.target != this.$refs.rcdbdBoardTables){
            // this.$refs.playgroundContextMenu.hideMenu();
                // return;
            // }
            this.$refs.tableContextMenu.showMenu(event, item)
        },
        tableOptionClicked(data){
            if(data.option.method){
                data.option.method(data.item);
            }
        }
    },
    components:{
        'vue-draggable-resizable' : VueDraggableResizable
    }
}
</script>
