<template>
    <div class="corpo-home">
      <H1 class="bemvindo">Preparando o Jantar!</H1>
      

      <div class="botoes">
        
        <router-link to="/Convidados"><button class="botao" v-on:click=inicializa>Iniciar jogo</button></router-link>
        <router-link to="/Opcoes"><button class="botao">Opções</button></router-link>
        
      </div>


    </div>
</template>

<script>

import Board from './Board'
import Card from './Card'
import Convidados from './Convidados'
import Opcoes from './Opcoes'
import Botao from './Botao'
import store, { storeMutations } from '../store'

// import { routes }  from '../routes';


export default {
  name: 'Home',
  components: {
    Board,
    Card,
    Convidados,
    Botao,
    Opcoes,
  },

  methods: {
    inicializa(){
      storeMutations.inicializa();
    }
  }

}
</script>

<style>


* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}

/* .flexbox { */
 /* display: flex; */
 /* justify-content: space-between; */
 /* justify-items: baseline; */
 /* width: 100%; */
 /* max-width: 768px; */
 /* height: 100vh; */
 /* overflow: hidden; */
 /* margin: 0 auto; */
 /* padding: 15px; */
/* } */

.corpo-home{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

}

.bemvindo{
  margin-top: 100px;
  font-family: Helvetica, sans-serif;
}

.botoes{
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-items: center;
  margin: 5%;

  
}

.botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
}
/*.botao{
  cursor: pointer;
  width: -webkit-fill-available;
  background-color: darkgray;
  margin: 5%;
  
}*/




</style>
