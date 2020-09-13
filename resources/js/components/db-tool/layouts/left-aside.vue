<template>
    <div class="rc-aside rc-left-aside playground-components">
        <div class="rc-aside-wrapper">
            <div class="rc-aside-databases-list-container">
                <ul class="rc-aside-databases-list">
                    <li>
                        <div class="rcdbd-lmi-dbname">
                            <v-icon>mdi-database</v-icon>
                            <span v-text="db.name"></span>
                        </div>
                        <ul class="rc-aside-databases-table-list">
                            <li @click="db.selectedTableIndex=index" v-for="(table, index) in db.tables" v-bind:key="index">
                                <div class="rcdbd-lmi-tablename">
                                    <v-icon>mdi-table</v-icon>
                                    <span v-text="table.name"></span>
                                </div>
                                <ul>
                                    <li v-for="(column, index) in table.columns" v-bind:key="index">
                                        <div class="rcdbd-lmi-tablename">
                                            <v-icon>mdi-table-column</v-icon>
                                            <span v-text="column.name"></span>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="rc-aside-toggler">
                <div class="rc-aside-toggler-wrapper">
                    <div class="rc-aside-toggle-btn-wrapper">
                        <div class="rc-aside-toggle-btn">
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    props : {
        db : Object
    },
    methods:{
        
    }
}
</script>