<template>
    <div class="flexbox">

      <h1>Resultado</h1>




    </div>
</template>

<script>

import Board from './Board'
import Card from './Card'
import TesteDrag from './TesteDrag'


export default {
  name: 'Resultado',
  components: {
    Board,
    Card,
    TesteDrag,
  }
}






</script>

<style>


.linha-cima {
    background-color: cornsilk;
    width: 100%
}
/* .linha-cima .board {
    width: 80%;
    padding: 30px;

} */

* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}

.flexbox {
 display: flex;
 justify-content: space-between;
 justify-items: baseline;

 width: 100%;
 /* max-width: 768px; */
 height: 100vh;

 overflow: hidden;

 margin: 0 auto;
 padding: 15px;
}
/* .flexbox .pre-board {
 display: flex;
 flex-direction: column;
 
 width: 100%;
 max-width: 350px;
 
 background-color: #313131;

 padding: 15px;
} */
.flexbox .board {
 display: flex;
 flex-direction:column;
 width: 100%;
 max-width: 300px;
 background-color: #313131;
 padding: 15px;
 margin: 20px;
 height: 80%;
}


</style>
