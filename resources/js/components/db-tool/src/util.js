export default {
    install : function(Vue, options){
        Vue.prototype.$util = {};
        Vue.prototype.$util.uniqueId = () => {
            return "x"+Math.random().toString(31).substring(2);
        }
    }
}
