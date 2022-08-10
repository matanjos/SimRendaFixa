import {createRouter, createWebHistory} from 'vue-router'
import SobreComponent from '../src/components/SobreComponent.vue'
import HomeComponent from '../src/components/HomeComponent.vue'
import FuturoComponent from '../src/components/FuturoComponent.vue'
import PassadoComponent from '../src/components/PassadoComponent.vue'
//const path = require('path');

/*const routes = [
    { path: path.join(__dirname,'/'),  name: "Home" ,component: HomeComponent, children:[] },
    { path: path.join(__dirname,'/simulpassado'),name: "Simular Passado" , component: PassadoComponent},
    { path: path.join(__dirname,'/simulfuturo'),name: "Simular Futuro" , component: FuturoComponent },
    { path: path.join(__dirname,'/sobre'), name: "Sobre" , component: SobreComponent }
];*/

const routes = [
    { path: '/',  name: "Home" ,component: HomeComponent, children:[] },
    { path: '/simulpassado',name: "Simular Passado" , component: PassadoComponent},
    { path: '/simulfuturo',name: "Simular Futuro" , component: FuturoComponent },
    { path: '/sobre', name: "Sobre" , component: SobreComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;