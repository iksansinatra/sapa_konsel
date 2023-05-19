import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp({})
// import SideBar from './components/SideBar.vue'
// app.component('SideBar', SideBar)


import headerType1 from './components/headerType1.vue'
import headerType2 from './components/headerType2.vue'
import headerType3 from './components/headerType3.vue'
import bottomBar from './components/bottomBar.vue'
// app.component('headerType1', headerType1)





createApp(App)
.use(Quasar, quasarUserOptions)
.use(store)
.component('headerType1', headerType1)
.component('headerType2', headerType2)
.component('headerType3', headerType3)
.component('bottomBar', bottomBar)
.use(router).mount('#app')


