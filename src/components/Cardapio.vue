<template>
<div calss="comp">

    <h1>Elaboração Cardapio</h1>
    <div class='btn'>
      <router-link to="/Convidados"><botao rotulo="Voltar" tipo="button"/></router-link>
      <router-link to="/Musicas"><botao rotulo="Avançar" tipo="button"/></router-link>
    </div>

    
    <div class="row">

      <div class="board">
          <h3 class="titulo-board">Lista</h3>
              <draggable class="list-group" :list="cartas_cardapio" group="people" @change="log" @end="refresh()" >
                <div class="list-group-item" v-for="carta of cartas_cardapio">
              <CardPrato :prato="carta.prato" :id="carta.id"></CardPrato>
              </div>
          </draggable>
      </div>


      <div class="board">
          <h3 class="titulo-board">Convidados</h3>
              <draggable class="list-group" :list="cartas_cardapio_sol" group="people" @change="log" @end="refresh()">
                <div class="list-group-item" v-for="carta of cartas_cardapio_sol">
                  <CardPrato :prato="carta.prato" :id="carta.id"></CardPrato>
                </div>
          </draggable>
      </div>



   </div>
<div>

    </div>

</div>    
</template>
<script>
import draggable from 'vuedraggable'
import CardPrato from './CardPrato'
import Botao from './Botao.vue'
import Resultado from './Resultado'
import store, { storeMutations } from '../store'
import resultado, { resultadoMutations } from '../resultado'

export default {
  name: "Teste",
  display: "Mais um teste cansativo",
  order: 1,
  components: {
      draggable,
      CardPrato,
      Botao,
      Resultado
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
    
    cartas_cardapio(){
      return storeMutations.getdisp_cardapio_easy()
    },
    cartas_cardapio_sol(){
      return storeMutations.getsolucao_cardapio()
    },


    valorTotal(){
      for (cada in this.list1){
        // return cada.valor;
      };

      return "ok!";
    }
  },

  methods: {
    save(){
      storeMutations.setSolCardapio(this.list2);
      //console.log('method save');
      
      //storeMutations.clearSolConvidados();
      
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.saldo{
  font-size: 120%
}
.btn{
  width: 200px;
}
</style>