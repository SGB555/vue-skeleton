import Vue from 'vue'
import App from './App.vue'

setTimeout(() => {
    new Vue({
        el: '#app',
        render: h => h(App)
    })
}, 2000)
