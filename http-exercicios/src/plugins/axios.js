import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL='https://curso-vue-4237c-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-4237c-default-rtdb.firebaseio.com/'
            
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data) {
            //     array.push({id: chave, ...res.data[chave]})
            // }
            return res
        }, error => Promise.reject(error))
    }
})