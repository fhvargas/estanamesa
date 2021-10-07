<template>
<div calss="comp">
    <div class="row">

      <div class="board">
          <h3 class="titulo-board">Lista</h3>
          <h3 class="saldo">{{ valorteste }}</h3>
              <draggable class="list-group" :list="list1" group="people" @change="log">
                <div class="list-group-item" v-for="carta of list1">
              <Card :titulo="carta.titulo" :id="carta.id"></Card>
              </div>
          </draggable>
      </div>
      
      
      <div class="board">
          <h3 class="titulo-board">Convidados</h3>
          <h3 class="saldo">Total: {{ totalConvidados }} convidados</h3>
              <draggable class="list-group" :list="list2" group="people" @change="log">
                <div class="list-group-item" v-for="carta of list2">
                  <Card :titulo="carta.titulo" :id="carta.id"></Card>
                </div>
          </draggable>
      </div>

    

   </div>
<div>
        <H1>Botão</H1>
    </div>

</div>    
</template>
<script>
import draggable from 'vuedraggable'
import Card from './Card'
import rawDisplayer from './Raw-displayer'

export default {
  name: "Teste",
  display: "Mais um teste cansativo",
  order: 1,
  components: {
      draggable,
      Card,
      rawDisplayer
    },
  data() {
    return {
      list1: [
        { titulo: "Coxinha", id: 5, valor: 16  },
        { titulo: "Brigadeiro", id: 6, valor: 32  },
        { titulo: "Olho de Sogra", id: 7, valor: 64  },
        { titulo: "Sopa", id: 1, valor: 1 },
        { titulo: "Carne", id: 2, valor: 2 },
      ],
      list2: [],
      somatorio: 0,
      convidados_total: 0,

    }
  },

computed: {
    valorteste(){
      // this.somatorio=this.list1[0].valor;
      // this.somatorio=this.list1[1].valor+this.somatorio;
      // return this.somatorio;

    // this.list1.forEach(function(umdeles){
    //   this.somatorio=this.somatorio+umdeles.valor;
    // });
    this.somajantar();
    return this.somatorio;
    },
    totalConvidados(){
      return this.list2.length;
    },
    valorTotal(){
      for (cada in this.list1){
        // return cada.valor;
      };

      return "ok!";
    }
  },






  methods: {
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
    somajantar: function(){
      this.somatorio=0;
      for (let index = 0; index < this.list1.length; index++) {
        this.somatorio=this.somatorio+this.list1[index].valor;
        
      }
      // this.somatorio=44;
    }
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
</style>