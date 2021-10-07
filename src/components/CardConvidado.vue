<template>
    <div class="card">
        <h1>{{nome}}</h1>
        <img class="imagem" src="..\assets\avatar01.jpg">
        <p class="gosta">Gosta de: {{ nome_gosta }} </p>
        <p class="gosta">Não gosta de: {{nome_naogosta}} </p>

    </div>
</template>

<script>
import { storeMutations } from '../store'
export default {
    name: 'cardconvidado',
    props: ['nome','gosta','naogosta','grupo'],
    data(){
        return{
            n_gosta: "",
            n_naogosta: "",
        }
    },
    computed: {
        nome_naogosta(){
            return (storeMutations.retornaPratoid(this.naogosta))
        },
        nome_gosta(){
            return (storeMutations.retornaPratoid(this.gosta))
        },
  
     
    }

}
</script>

<style scoped>

.card {
    background-color: #9EBEE4;
    cursor: pointer;
    padding: 0 10px;
    max-width: min-content;
    margin: 3px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 10px;
}

.card .valor{
    justify-self: right;
    text-align: right;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.imagem{
    width: 40%;
}

</style>

