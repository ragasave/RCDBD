<template>
    <div class="rc-aside rc-right-aside playground-components">
        <div class="rc-aside-wrapper">
            <div class="rcdbd-panel" v-if="db.selectedTableIndex != null">
                <div class="rcdbd-panel-title">
                    <span>{{db.tables[db.selectedTableIndex].name}}</span>
                </div>
                <div class="rcdbd-panel-body">
                    <div class="rcdbd-panel-body">
                        <div>
                            <div class="rcdbd-lp-ig">
                                <div class="rcdbd-lp-igl">
                                    <span>Table Name</span>
                                </div>
                                <div class="rcdbd-lp-in">
                                    <input autocomplete="off" spellcheck="false" type="text" v-model="db.tables[db.selectedTableIndex].name">
                                </div>
                            </div>
                            <div class="rcdbd-lp-ig">
                                <div class="rcdbd-lp-igl">
                                    <span>Table Comment</span>
                                </div>
                                <div class="rcdbd-lp-in">
                                    <textarea  autocomplete="off" spellcheck="false" v-model="db.tables[db.selectedTableIndex].comment"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="rcdbd-lp-tablelist">
                            <div class="rcdbd-lp-ig">
                                <div class="rcdbd-lp-igl">
                                        <span>Select Column</span>
                                </div>
                                <div class="rcdbd-lp-in rcdbd-lp-is">
                                    <select v-model="db.tables[db.selectedTableIndex].selectedColumnIndex">
                                        <option v-for="(column, index) in db.tables[db.selectedTableIndex].columns" v-bind:key="index" v-text="column.name" :value="index"></option>
                                    </select>
                                    <v-icon>mdi-menu-down</v-icon>
                                </div>
                            </div>
                        </div>
                        <div class="rcdbd-lp-coledit" v-if="db.tables[db.selectedTableIndex].selectedColumnIndex != null">
                            <div class="rcdbd-lp-ig">
                                <div class="mt-2">
                                    <div class="rcdbd-lp-igl">
                                        <span>Columns Name</span>
                                    </div>
                                    <div class="rcdbd-lp-in">
                                        <input type="text" v-model="selectedColumn.name">
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <div class="rcdbd-lp-igl">
                                        <span>Data Type/Size</span>
                                    </div>
                                    <div class="rcdbd-lp-in">
                                        <input type="text" v-model="selectedColumn.type">
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <div class="rcdbd-lp-igl">
                                        <span>Default</span>
                                    </div>
                                    <div class="rcdbd-lp-in">
                                        <input type="text" v-model="selectedColumn.default">
                                    </div>
                                </div>
                            </div>
                            <div class="rcdbd-lp-ig mt-2">
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="selectedColumn.ai"
                                    label="Auto Increment"
                                    color="grey"
                                    @change="updateDB"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="selectedColumn.pk"
                                    label="Primary Key"
                                    color="grey"
                                    @change="updateDB"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="selectedColumn.uk"
                                    label="Unique Key"
                                    color="grey"
                                    @change="updateDB"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="selectedColumn.us"
                                    label="Unsigned"
                                    color="grey"
                                    @change="updateDB"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="selectedColumn.null"
                                    label="Nullable"
                                    color="grey"
                                    @change="updateDB"
                                    ></v-checkbox>
                                </div>
                                <div class="rcdbd-lp-icb">
                                    <v-checkbox
                                    :ripple="false"
                                    v-model="selectedColumn.fk"
                                    label="Foreign Key"
                                    color="grey"
                                    @change="updateDB"
                                    ></v-checkbox>
                                </div>
                                <div v-if="selectedColumn.fk">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="rcdbd-lp-in rcdbd-lp-is">
                                                <select v-model="selectedColumn.fkTableIndex">
                                                    <option v-for="(table, index) in db.tables" v-bind:key="index" v-text="table.name" :value="index"></option>
                                                </select>
                                                <v-icon>mdi-menu-down</v-icon>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="rcdbd-lp-in rcdbd-lp-is">
                                                <select v-model="selectedColumn.fkColumnIndex" :disabled="selectedColumn.fkTableIndex < 0">
                                                    <option v-for="(column, index) in (selectedColumn.fkTableIndex != null ? db.tables[selectedColumn.fkTableIndex].columns : []) " v-bind:key="index" v-text="column.name" :value="index"></option>
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
                                    <textarea spellcheck="false" v-model="selectedColumn.comment"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rcdbd-panel" v-if="db.selectedTableIndex == null">
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
        }
    }
}
</script>