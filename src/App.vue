<template>

<!--
  
  
-->

  <div class="container-app">

    <div class="paineljogo">
      <transition clasname="pagina"><router-view></router-view></transition>  
    </div>
    
    <div>
        <vitrine></vitrine>
    </div>

  </div>

</template>

<script>

import Home from './components/Home'
import Resultado from './components/Resultado'
import Game from './components/Game'
import { routes }  from './routes'
import Vitrine from './components/Vitrine.vue'

export default {
  name: 'app',
  components: {
    Home,
    Resultado,
    Game,
    Vitrine,
  },
  data (){
    return{
      routes,
      nome: '',
      }
  }
}


</script>

<style>

.container-app{

  display: flex;
  flex-direction: column;
  justify-content: space-between;



  background-color: #74B4E0;

}

</style>
