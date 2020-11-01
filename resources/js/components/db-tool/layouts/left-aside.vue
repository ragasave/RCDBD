<template>
    <div class="rc-aside rc-left-aside playground-components" v-if="$getConfig('leftMenuEnabled', false)" >
        <div class="rc-aside-wrapper">
            <div class="rc-aside-databases-list-container">
                <ul class="rc-aside-databases-list">
                    <li>
                        <div class="rcdbd-lmi-dbname">
                            <v-icon>mdi-database</v-icon>
                            <span v-text="$db.getDbName()"></span>
                        </div>
                        <ul class="rc-aside-databases-table-list">
                            <li :class="[$db.isTableSelected() ? 'active' : '']" @click="$db.selectTable(index)" v-for="(table, index) in $db.getTables()" v-bind:key="index">
                                <div class="rcdbd-lmi-tablename">
                                    <v-icon>mdi-table</v-icon>
                                    <span v-text="table.name"></span>
                                </div>
                                <ul>
                                    <li v-for="(column, index) in $db.getSelectedTableColumns()" v-bind:key="index">
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
    name : "leftPanel",
    props : {
        db : Object
    },
    created(){
    },
    methods:{

    }
}
</script>
