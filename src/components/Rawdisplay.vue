<template>
  <div>
    <h3>RAW DISPLAY :)</h3>
    <h3>{{ title }}</h3>
    <pre>{{ valueString }}</pre>
    <pre>{{ store_local.name }}</pre>
  </div>
</template>

<script>


import store, { storeMutations } from '../store'


const props = {
    name: "Rawdisplay",

};
export default {
  data(){
    store_local : []
  },
  computed: {
    valueString() {
      return JSON.stringify(this.value, null, 2);
    },
    getStore(){
      this.store_local = storeMutations.getAllStore();
    },
    valorTotal(){
           
      if(this.value){
        return "CHEIA";
      }else{
          return "VAZIA";
      }

    }
  }
};
</script>


<style scoped>
pre {
  text-align: start;
}
</style>