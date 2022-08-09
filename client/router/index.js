import {createRouter, createWebHistory} from 'vue-router'
import SobreComponent from '../src/components/SobreComponent.vue'
import HomeComponent from '../src/components/HomeComponent.vue'
import FuturoComponent from '../src/components/FuturoComponent.vue'
import PassadoComponent from '../src/components/PassadoComponent.vue'
import SimuladoComponent from '../src/components/PassadoComponent.vue'

const routes = [
    { path: '/',  name: "Home" ,component: HomeComponent, children:[] },
    { path: '/simulpassado',name: "Simular Passado" , component: PassadoComponent},
    { path: '/simulfuturo',name: "Simular Futuro" , component: FuturoComponent },
    { path: '/sobre', name: "Sobre" , component: SobreComponent },
    { path: '/simulado', name: "Simulado" , component: SimuladoComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;