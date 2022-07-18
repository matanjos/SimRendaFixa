import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import SobreComponent from './components/SobreComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import FuturoComponent from './components/FuturoComponent.vue'
import PassadoComponent from './components/PassadoComponent.vue'
import SimuladoComponent from './components/PassadoComponent.vue'


const routes = [
    { path: '/', component: HomeComponent, children:[] },
    { path: '/simulpassado', component: PassadoComponent },
    { path: '/simulfuturo', component: FuturoComponent },
    { path: '/sobre', component: SobreComponent },
    { path: '/simulado', component: SimuladoComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })



createApp(App).use(router).mount('#app')
