<template>
  <div id="app" class="bg-light">
     <header>
        <h1>Simulador de Renda Fixa</h1>
     </header>
     <aside id="sidebar">
      <MenuComponent/>
     </aside>
     <div id="content" >
      <router-view></router-view>
     </div>
  </div>
  
</template>

<script>

//import FuturoComponent from './components/FuturoComponent.vue'
//import PassadoComponent from './components/PassadoComponent.vue'
import MenuComponent from './components/MenuComponent.vue'


export default {
  name: 'App',
  components: {
    //HomeComponent,
    //FuturoComponent,
    //PassadoComponent,
    MenuComponent,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c2c2c;
  margin-top: 0px;
}

header{
  color: white;
  background-color: #373e98;
}

#content{
  width: 80%;
	float: right;
		/*text-align: center;*/
}

#sidebar{
  width: 20%;
	float: left;
}

</style>
