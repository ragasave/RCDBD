import v from 'vue';
var vm = new v({
    created(){
        // load config
        var localConfig = localStorage.getItem('config');
        if(localConfig){
            this.appConfig = JSON.parse(localConfig);
        }else{
            this.appConfig = {"leftMenuEnabled":false};
            this.updateConfig();
        }
        localConfig = undefined;
    },
    data: {
      appConfig : null
    },
    methods:{
        updateConfig(){
            localStorage.setItem('config', JSON.stringify(this.appConfig))
        }
    }
})

export default {
    install : function(Vue, options){
        Vue.prototype.$getConfig = (key, defaultValue) => {
            let out =  typeof vm.appConfig[key] === "undefined" ? defaultValue : vm.appConfig[key]
            return out;
        }
        Vue.prototype.$setConfig = function(key, newValue){
            vm.appConfig[key] = newValue;
            vm.updateConfig();
            return newValue;
        }
        
    }
};
