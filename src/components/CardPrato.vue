<template>
    <div class="card">
        <h1>{{prato}}</h1>
    </div>
</template>

<script>
import { storeMutations } from '../store'
export default {
    name: 'cardprato',
    props: ['id','prato','tipo','preco'],
    data(){
        return{
            n_gosta: "",
            n_naogosta: "",
        }
    }
}
</script>

<style scoped>

.card {
    box-sizing: content-box;
    background-color: #9EBEE4;
    cursor: pointer;
    width: 200px;
    height: fit-content;
    padding: 0 10px;
    margin: 3px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 10px;
}

.card .valor{
    justify-self: right;
    text-align: right;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>

