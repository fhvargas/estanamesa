<template>
    <div class="flexbox">
    <Board>
    <draggable class="draggable" v-model="myArray" group="people" @start="drag=true" @end="drag=false">
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <div class="card"> <img :id="id" src="../assets/pizza01.png" alt="carta 10"> </div>
        <!-- <div class="card"> <img :id="id" src="../assets/card03.jpg" alt="carta 10"> </div> -->
    </draggable>
    </Board>
    <Board>
    <draggable class="draggable" v-model="myArray" group="people" @start="drag=true" @end="drag=false">
    </draggable>
    </Board>
    <Board>
    <draggable class="draggable" v-model="myArray" group="people" @start="drag=true" @end="drag=false">
    </draggable>
    </Board>
    <Board>
    <draggable class="draggable" v-model="myArray" group="people" @start="drag=true" @end="drag=false">
    </draggable>
    </Board>
    <Board>
    <draggable class="draggable" v-model="myArray" group="people" @start="drag=true" @end="drag=false">
    </draggable>
    </Board>

    </div>
</template>

<script>
import draggable from 'vuedraggable'
import Board from './board'
export default {
    components: {
        draggable,
        Board,
    },
    props: ['id','draggable','myArray'],

    return: {
        myArray: [
            {
                id: 'carta01',
                name: 'CARTA 1'
            },
            {
                id: 'carta02',
                name: 'CARTA 2'
            },
            {
                id: 'carta03',
                name: 'CARTA 3'
            },
        ]
    }
}
</script>

<style scoped>

.card {

  /* height: 70px; */
  /* width: 2000px; */
  /* padding: 15px 20px; */
  /* background-color: cornflowerblue;  */
    box-sizing: content-box;
    cursor: pointer;
    /* margin: 15px; */
    width: fit-content;
    /* height: fit-content; */
    
}

.card img{
    width: 200px;
    height: auto;
}

.draggable {
    background: green;
    height: 100%;

}

    .test-board{
         display: flex;
 flex-direction:column;
  width: fit-content;
  height: fit-content;
 width: 100%;
 /* max-width: 300px; */
 background-color: #313131;
 padding: 15px;
 margin: 20px;
    
    }


/* .card {
        padding: 0 auto;
        border: solid 2px grey;
        background: lightblue;
        display: inline-block;
        margin: 5px;
        box-shadow: 5px 5px 10px grey;
        width: 200px;
        height: 100%;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
    }  */

    /* .card .card-titulo {
        text-align: center;
        background: lightblue;
        margin: 0 0 15px 0;
        padding: 10px;
        text-transform: uppercase;
    } */
/* 
    .painel-fade-enter, .painel-fade-leave-active {
        opacity: 0
    }

    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .4s
    }

    * {
        box-shadow: 5px 5px 5px;
    } */



</style>

