<template>
<div class="comp">

    <div class="menu">
      <h1>Seleção de Convidados</h1>
      <div class='btn'>
        <router-link to="/"><botao rotulo="Voltar" tipo="button"/></router-link>
        <router-link to="/Cardapio"><botao rotulo="Avançar" tipo="button"/></router-link>
      </div>
    </div>

    <div class="row">

      <div class="board">
          <div class="titulo-board">
            <h3>Pessoas disponíveis</h3>
          </div>
          
          <draggable class="list-group" :list="cartas_convidados" group="people" @change="log"  @end="refresh()">
                <div class="list-group-item" v-for="carta of cartas_convidados">
              <CardConvidado :nome="carta.nome" :gosta="carta.gosta" :naogosta="carta.naogosta" :grupo="carta.grupo"></CardConvidado>
              </div>
          </draggable>
      
      
      </div>

      <div class="board">
          <h3 class="titulo-board">Lista de convidados</h3>
          
          <draggable class="list-group" :list="cartas_convidados_sol" group="people" @change="log" @end="refresh()">
            <div class="list-group-item" v-for="carta of cartas_convidados_sol">
              <CardConvidado :nome="carta.nome" :gosta="carta.gosta" :naogosta="carta.naogosta" :grupo="carta.grupo"></CardConvidado>
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
import Botao from './Botao.vue'
import store, { storeMutations } from '../store'
import { resultadoMutations } from '../resultado'

export default {
  name: "Convidados",
  display: "",
  order: 1,
  components: {
      draggable,
      CardConvidado,
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
    
    cartas_convidados(){
      return storeMutations.getdisp_convidados_easy()
    },
    cartas_convidados_sol(){
      return storeMutations.getsolucao_convidado()
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
    flex-direction: row;
    justify-content: space-around;
}
.board{
  display: flex;
  flex-direction: column;
  border-radius: 10px;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: inherit;

}

.titulo-board{
  background-color: aliceblue;
  border-radius: 5px;
  height: fit-content;
}

h3{
  
  margin-left: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.saldo{
  font-size: 120%
}
.btn{
  
  display: flex;
  justify-content: flex-start;
  
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