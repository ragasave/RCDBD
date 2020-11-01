<template>
    <div class="rc-aside rc-right-aside playground-components">
        <div class="rc-aside-wrapper">
            <div class="rcdbd-panel" v-if="$db.isTableSelected()">
                <div class="rcdbd-panel-title">
                    <span v-text="$db.getSelectedTableName()"></span>
                </div>
                <div class="rcdbd-panel-body">
                    <div class="rcdbd-panel-body">
                        <div>
                            <div class="rcdbd-lp-ig">
                                <div class="rcdbd-lp-igl">
                                    <span>Table Name</span>
                                </div>
                                <div class="rcdbd-lp-in">
                                    <input @change="$db.updateTableName" placeholder="Enter table name" autocomplete="off" spellcheck="false" v-model="$db.getSelectedTable().name" type="text">
                                </div>
                            </div>
                            <div class="rcdbd-lp-ig">
                                <div class="rcdbd-lp-igl">
                                    <span>Table Comment</span>
                                </div>
                                <div class="rcdbd-lp-in">
                                    <textarea  autocomplete="off" spellcheck="false" v-model="$db.getSelectedTable().comment"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="rcdbd-lp-tablelist">
                            <div class="rcdbd-lp-ig">
                                <div class="rcdbd-lp-igl">
                                        <span>Select Column</span>
                                </div>
                                <div class="rcdbd-lp-in rcdbd-lp-is">
                                    <select v-model="$db.getSelectedTable().selectedColumnIndex">
                                        <!-- <option v-for="(column, index) in db.tables[db.selectedTableIndex].columns" v-bind:key="index" v-text="column.name" :value="index"></option> -->
                                        <option v-for="(column, index) in $db.getSelectedTableColumns()" v-bind:key="index" v-text="column.name" :value="index"></option>
                                    </select>
                                    <v-icon>mdi-menu-down</v-icon>
                                </div>
                            </div>
                        </div>
                        <div class="rcdbd-lp-coledit" v-if="$db.isColumnSelected()">
                            <div class="rcdbd-lp-ig">
                                <div class="mt-2">
                                    <div class="rcdbd-lp-igl">
                                        <span>Columns Name</span>
                                    </div>
                                    <div class="rcdbd-lp-in">
                                        <input type="text" v-model="$db.getSelectedColumn().name" @change="$db.updateColumnName">
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <div class="rcdbd-lp-igl">
                                        <span>Data Type/Size</span>
                                    </div>
                                    <div class="rcdbd-lp-in">
                                        <input type="text" v-model="$db.getSelectedColumn().type">
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <div class="rcdbd-lp-igl">
                                        <span>Default</span>
                                    </div>
                                    <div class="rcdbd-lp-in">
                                        <input type="text" v-model="$db.getSelectedColumn().default">
                                    </div>
                                </div>
                            </div>
                            <div class="rcdbd-lp-ig mt-2">
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="$db.getSelectedColumn().ai"
                                    label="Auto Increment"
                                    color="grey"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="$db.getSelectedColumn().pk"
                                    label="Primary Key"
                                    color="grey"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="$db.getSelectedColumn().uk"
                                    label="Unique Key"
                                    color="grey"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="$db.getSelectedColumn().us"
                                    label="Unsigned"
                                    color="grey"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="$db.getSelectedColumn().null"
                                    label="Nullable"
                                    color="grey"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="$db.getSelectedColumn().fk"
                                    label="Foreign Key"
                                    color="grey"
                                    ></v-checkbox>
                                </div>
                                <div v-if="$db.getSelectedColumn().fk">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="rcdbd-lp-in rcdbd-lp-is">
                                                <select v-model="$db.getSelectedColumn().fkTableIndex" @change="$db.foreignKeyUpdated($event, $db.getSelectedColumn())">
                                                    <option v-for="(table, index) in $db.getTables()" v-bind:key="index" v-text="table.name" :value="index"></option>
                                                </select>
                                                <v-icon>mdi-menu-down</v-icon>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="rcdbd-lp-in rcdbd-lp-is">
                                                <select v-model="$db.getSelectedColumn().fkColumnIndex" :disabled="$db.getSelectedColumn().fkTableIndex < 0" @change="$db.foreignKeyUpdated($event, $db.getSelectedColumn())">
                                                    <option v-for="(column, index) in ($db.getSelectedColumn().fkTableIndex != null ? $db.getSelectedForeignTableColumns() : []) " v-bind:key="index" v-text="column.name" :value="index"></option>
                                                </select>
                                                <v-icon>mdi-menu-down</v-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rcdbd-lp-ig">
                                <div class="rcdbd-lp-igl">
                                    <span>Description</span>
                                </div>
                                <div class="rcdbd-lp-in">
                                    <textarea spellcheck="false" v-model="$db.getSelectedColumn().comment"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rcdbd-panel" v-if="!$db.isTableSelected()">
                <div class="rcdbd-empty-panel">
                    <div class="rcdbd-empty-panel-wrapper">
                        <v-icon class="rcdbd-empty-panel-icon">mdi-table-eye-off</v-icon>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props : {
        db : Object,
        dataTypes : Array
    },
    data(){
        return {

        }
    },
    created(){
    },
    computed : {
        selectedColumn(){
            return this.db.tables[this.db.selectedTableIndex].columns[this.db.tables[this.db.selectedTableIndex].selectedColumnIndex];
        }
    },
    methods : {
        setDataTypeObject(){
            console.log(this.selectedColumn);
        },
        updateDB () {
            this.$parent.updateDB();
        },
        tableNameChanged(e){
            if(!this.db.tables[this.db.selectedTableIndex].name || this.db.tables[this.db.selectedTableIndex].name.trim().length == 0){
                this.db.tables[this.db.selectedTableIndex].name = `Table_${this.db.tables.length}`
            }
            var duplicates = [],
            selectedTableName = this.db.tables[this.db.selectedTableIndex].name;
            this.db.tables.forEach((table, index) => {
                if(index != this.db.selectedTableIndex && table.name.toLowerCase().trim() == selectedTableName){
                    console.log(table);
                }
            });
        }
    }
}
</script>
