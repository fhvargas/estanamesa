<template>
    <div :id="id" class="board">
        <h1>NOME DO BOARD</h1>
        <slot />

    </div>
</template>

<script>
export default {
    props: ['id'],

}
</script>

<style scoped>


/* .board {
 display: flex;
 flex-direction:column;
 width: 100%;
 max-width: 350px;
 min-width: 20px;
 background-color: #313131;
 padding: 15px;
} */


</style>



