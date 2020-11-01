import v from 'vue';
import { SVG } from "@svgdotjs/svg.js";
// import database from "./data/database";

var vm = new v({
    created(){
        // load database
        var localDB = localStorage.getItem('db');
        if(localDB){
            this.db = JSON.parse(localDB);
        }else{
            // this.db = database;
            this.db = {
                name : "database",
                selectedTableIndex : null,
                tables : []
            };
        }
        localDB = undefined;


        this.db.tables.map(item => {
            if(!item.columns){
                item.columns = [];
                item.selectedColumnIndex = null;
            }
            return item;
        })
    },
    data: {
      db : null
    },
    methods:{
            getDbName(){
                return this.db.name;
            },
            getTableByIndex(index){
                return this.db.tables[index];
            },
            isThisTableIsSelected(index){
                return this.db.selectedTableIndex == index;
            },
            isThisColumnIsSelected(index){
                return this.db.selectedTableIndex == index;
            },
            getSelectedTable(){
                return this.db.tables[this.db.selectedTableIndex];
            },
            getTables(){
                return this.db.tables;
            },
            getSelectedTableColumns(){
                return this.getTableByIndex(this.db.selectedTableIndex).columns
            },
            getSelectedTableName(){
                return this.getTableByIndex(this.db.selectedTableIndex).name
            },
            isTableSelected() {return this.db.selectedTableIndex != null},
            isColumnSelected() {
                return this.db.selectedTableIndex == null ? false : this.getSelectedTable().selectedColumnIndex != null && this.getSelectedTable().columns[this.getSelectedTable().selectedColumnIndex];
            },
            selectTable(index) {return this.db.selectedTableIndex = index},
            getSelectedColumn(){
                // return this.getTableByIndex(this.db.selectedTableIndex).selectedColumnIndex
                let t = this.getSelectedTable();
                return t.columns[t.selectedColumnIndex]
            },
            getSelectedForeignTableColumns(){
                return this.getTableByIndex(this.getSelectedColumn().fkTableIndex).columns
            },
            selectForeignTable(index){
                this.getSelectedColumn().fkTableIndex = index;
            },
            getTableUiStyle(i){
                var t = this.getTableByIndex(i);
                return {
                    top : t.top,
                    left : t.left,
                };
            },
            columnSchema(){
                return {
                    name : null,
                    type : null,
                    ai : false,
                    pk : false,
                    fk : false,
                };
            },
            update(){
                localStorage.setItem('db', JSON.stringify(this.db))
            },
            getDb(){return this.db},

            /**
             * Crud
             */
            updateTableName(e){
                if(!this.getSelectedTableName() || this.getSelectedTableName().trim().length == 0){
                    this.getSelectedTable().name = `Table_${this.db.tables.length}`
                }
                // var duplicates = [],
                // selectedTableName = this.getSelectedTableName();
                // this.db.tables.forEach((table, index) => {
                //     if(index != this.db.selectedTableIndex && table.name.toLowerCase().trim() == selectedTableName){
                //         console.log(table);
                //     }
                // });
                // this.db.tables[this.db.selectedTableIndex].name = e.value;
            },

            updateColumnName(e){
                if(!this.getSelectedColumn().name || this.getSelectedColumn().name.trim().length == 0){
                    this.getSelectedColumn().name = `Table_${this.db.tables.length}`
                }
            },
            updateTablePosition(left,top){
                var elem = document.querySelector('.active.draggable.vdr [rcdbTableIndex]');
                if(!elem){return}
                var index = Number(elem.getAttribute('rcdbTableIndex'));
                var t =this.getTableByIndex(index);
                t.top = top;
                t.left = left;
                elem.dataset.top = top;
                elem.dataset.left = left;
                this.update();

                this.updateAllConnector();
                // t.columns.forEach((item, columnIndex) => {
                //     this.updateConnector(t, index, item, columnIndex)
                // })
            },
            createTable(){

                this.db.tables.push({
                    name : ("Table_"+this.db.tables.length),
                    selectedColumnIndex: 1,
                    comment : "",
                    columns : [
                        {
                            name : "col_1",
                            type : null,
                            ai : false,
                            pk : false,
                            fk : false,
                        },
                        {
                            name : "col_2",
                            type : null,
                            ai : false,
                            pk : false,
                            fk : false,
                        },
                    ],
                    left : 0,
                    right : 0,
                    width : 0,
                    height : 0
                });
                this.update();
            },
            addColumn(item){
                item.columns.push({
                    name : "col_" + item.columns.length,
                    type : null,
                    ai : false,
                    pk : false,
                    fk : false,
                });
                this.update();
            },
            deleteTable(item){
                var index = this.db.tables.indexOf(item);
                if(index > -1){
                    this.db.tables.splice(index, 1);
                    this.update();
                }
            },

            foreignKeyUpdated(e, column){
                var elem = document.querySelector('.draggable.vdr [rcdbTableSelected] tr[rcdbColumnSelected]');
                if(!elem){return}
                var index = Number(elem.getAttribute('rcdbColumnIndex'));


                // column =
                this.updateAllConnector()
            },


            /**
             * Connector
             */
            updateConnector(table, tableIndex, column, columnIndex){

                if(column.fk && column.fkColumnIndex != null && column.fkTableIndex != null){
                    // console.group(`${table.name} -> ${column.name}`);
                    // console.log(`col => ${column.fkColumnIndex} and tab => ${column.fkTableIndex}`);

                    // To Table
                    let t1 = this.$db.getTableElementByTableIndex(column.fkTableIndex);
                    let c1 = this.$db.getColumnElementByTableIndex(column.fkTableIndex, column.fkColumnIndex)

                    // From table
                    let t2 = this.$db.getTableElementByTableIndex(tableIndex);
                    let c2 = this.$db.getColumnElementByTableIndex(tableIndex, columnIndex)

                    let connector = this.$db.getConnectorElementByTableIndex(tableIndex, columnIndex, column.fkTableIndex, column.fkColumnIndex)
                    console.log(t1, column.fkTableIndex, column.fkColumnIndex);
                    if(t1&&c1&&t2&&c2){
                        window.adjustLine(t1, c1, t2, c2, connector);
                    }
                    // console.groupEnd();
                }
            },
            updateAllConnector(){
                this.getTables().forEach((table, tableIndex) => {
                    table.columns.forEach((column, columnIndex) => {
                        if(column.fk && column.fkColumnIndex != null && column.fkTableIndex != null){
                            // console.group(`${table.name} -> ${column.name}`);
                            // console.log(`col => ${column.fkColumnIndex} and tab => ${column.fkTableIndex}`);

                            // To Table
                            let t1 = this.getTableElementByTableIndex(column.fkTableIndex);
                            let c1 = this.getColumnElementByTableIndex(column.fkTableIndex, column.fkColumnIndex)

                            // From table
                            let t2 = this.getTableElementByTableIndex(tableIndex);
                            let c2 = this.getColumnElementByTableIndex(tableIndex, columnIndex)

                            if(t1&&c1&&t2&&c2){
                                let connector = this.getConnectorElementByTableIndex(tableIndex, columnIndex, column.fkTableIndex, column.fkColumnIndex)
                                // console.log(t1, c1, t2, c2, connector);
                                window.adjustLine(t2, c2, t1, c1, connector);
                            }
                            // console.groupEnd();
                        }
                    })
                })
            },

            /**
             * Html Node
             */
            getTableElementByTableIndex(index){
                return document.querySelector(`.draggable.vdr [rcdbTableIndex="${index}"]`);
            },
            getColumnElementByTableIndex(tIndex, cIndex){
                return document.querySelector(`.draggable.vdr [rcdbTableIndex="${tIndex}"] [rcdbColumnIndex="${cIndex}"]`);
            },
            getConnectorElementByTableIndex(fromTableIndex, formColumnIndex, toTableIndex, toColumnIndex){
                let rel = `${fromTableIndex}:${formColumnIndex}|${toTableIndex}:${toColumnIndex}`;
                var elem = document.querySelector(`[rcdbTableConnector="${rel}"]`);
                if(!elem){
                    elem = document.createElement("div");
                    elem.innerHTML = `
                        <div class="table-connector-pointer from-table-connector-pointer"></div>
                        <div class="table-connector-pointer to-table-connector-pointer"></div>
                    `;
                    elem.className="table-connector";
                    elem.setAttribute('rcdbTableConnector', rel);
                    document.querySelector('.playground-board-tables').appendChild(elem);
                }
                return elem;

            }

        }

})


export default {
    install : function(Vue, options){
        Vue.prototype.$db = vm
    }
};
