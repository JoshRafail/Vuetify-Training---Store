import App from './App'
import store from './store'
import router from './router'

Vue.use(Vuex)
Vue.component('app', App);

new Vue({ 
    el: '#app',
    vuetify: new Vuetify({iconfont: 'fa4'}),
    store: store,
    router: router
})
