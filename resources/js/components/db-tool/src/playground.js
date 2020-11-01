export default {
    install : function(Vue, options){
        const getConfig = Vue.prototype.$getConfig,
        setConfig = Vue.prototype.$setConfig;
        Vue.prototype.pg = {

            /**
             * Playground leftAside 
             */
            leftAside : {
                hide(){setConfig('leftMenuEnabled', false);},
                show(){setConfig('leftMenuEnabled', false);},
                toggle(){setConfig('leftMenuEnabled', !getConfig('leftMenuEnabled', true));}
            },


            

        };
        
    }
};
