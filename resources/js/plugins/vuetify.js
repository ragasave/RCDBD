import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    global: {
        // ripples: false
    },    
}

export default new Vuetify(opts)