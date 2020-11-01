import v from 'vue';




// interface TableInterface  {
//     name:String,
//     comment:String,
//     selectedColumnIndex:Number,
//     columns: []
// };

interface DbInterface {
    name:String,
    selectedTableIndex:Number,
    Options:TableInterface[]
};

export default  {
    install : function(Vue, Options){
        console.log(Vue);

    }
}
