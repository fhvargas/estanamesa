<template>
<div calss="comp">


    <h1>Seleção de Playlist</h1>
    <div class='btn'>
       <router-link to="/Cardapio"><botao rotulo="Voltar" tipo="button"/></router-link>
       <router-link to="/Jogos"><botao rotulo="Avançar" tipo="button"/></router-link>
       
    </div>

    <div class="row">

      <div class="board">
          <h3 class="titulo-board"></h3>
              <draggable class="list-group" :list="cartas_musicas" group="people" @change="log"  @end="refresh()">
                <div class="list-group-item" v-for="carta of cartas_musicas">
              <CardMusica :estilo="carta.estilo" :id="carta.id"></CardMusica>
              </div>
          </draggable>
      </div>

      <div class="board">
          <h3 class="titulo-board">Lista de convidados</h3>
          
          <draggable class="list-group" :list="cartas_musicas_sol" group="people" @change="log" @end="refresh()">
            <div class="list-group-item" v-for="carta of cartas_musicas_sol">
              <CardMusica :estilo="carta.estilo" :id="carta.id"></CardMusica>
            </div>
          </draggable>

          <h3 class="saldo">Total: {{ totalConvidados }} convidados</h3>

      </div>

    

   </div>
<div>
        
    </div>

</div>    
</template>
<script>

import draggable from 'vuedraggable'
import CardConvidado from './CardConvidado'
import CardMusica from './CardMusica'
import Botao from './Botao.vue'
import store, { storeMutations } from '../store'
import { resultadoMutations } from '../resultado'

export default {
  name: "Convidados",
  display: "",
  order: 1,
  components: {
      draggable,
      CardMusica,
      Botao,
    },
  data() {
    return {
      list1: [],
      list2: [],
      somatorio: 0,
      convidados_total: 0,

    }
  },

  computed: {
    
    cartas_musicas(){
      return storeMutations.getdisp_musicas_easy()
    },
    cartas_musicas_sol(){
      return storeMutations.getsolucao_musicas()
    },


    totalConvidados(){
      return this.list2.length;
    },

    valorTotal(){
      for (cada in this.list1){
        // return cada.valor;
      };
    },
  
    counter() {
      return store.counter;
    },

  },


  methods: {
    save(){
      storeMutations.setSolConvidados(this.list2);
      //storeMutations.disp_convidados_easy(this.lsit1);
    },

    refresh(){
      resultadoMutations.refresh()
    },

    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
  }
};
</script>

<style scoped>
.row{
    display: flex;
    justify-content: space-between;
    justify-items: baseline;
}
.board{
  display: flex;
  border-radius: 10px;
  flex-direction:column;
  width: 100%;
  max-width: 300px;
  min-width: 300px;
  background-color: #0A94D5;
  padding: 15px;
  margin: 20px;
  height: 80%;
  border: solid 2px;
  border-color: white;
  min-height: 300px;
}
.list-group{
  width: 100%;
  min-height: inherit;
}
h3{
  background-color: aliceblue;
  margin: 1px;
  border-radius: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.saldo{
  font-size: 120%
}
.btn{
  width: 200px;
}
.botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

</style>