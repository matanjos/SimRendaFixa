<template>
  <div id="app" class="bg-light" >
     <header>
        <h1>Simulador de Renda Fixa</h1>
     </header>
     <aside id="sidebar">
      <MenuComponent/>
     </aside>
     <div id="content">
      <router-view ></router-view>
     </div>
<footer class="text-center text-lg-start bg-light text-muted">
  <div class="text-center p-4">
    Matheus dos Anjos Martins - 2022
  </div>
</footer>
  </div>
  
</template>

<script>

import MenuComponent from './components/MenuComponent.vue'


export default {
  name: 'App',
  components: {
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

h1{
    margin-bottom: 0px;
}

header{
  color: white;
  background-color: #373e98;
}

#content{
  width: 80%;
  height: 100%;
	float: right;
		/*text-align: center;*/
}

#sidebar{
  width: 20%;
  height: 100%;
	float: left;
}

</style>
