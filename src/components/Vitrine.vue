<template>
    <div class="vitrine">
      <h1>vitrine here</h1>

      <button class='botao' @click='validaCardapio()'>Valida Cardapio</button>

      <!-- <pre>{{ printa_lc_disp_convidados_easy }}</pre>
      <pre>{{ printa_lc_disp_cardapio_easy }}</pre>
      <pre>{{ printa_lc_solucao_convidado }}</pre>
      <pre>{{ printa_lc_solucao_cardapio }}</pre> -->

      <h1>Validacao se gosta ou não</h1>
      <pre>{{ resultadojson }}</pre>
      <pre>{{ resultadomusicajson }}</pre>
      <pre>{{ resultadojogojson }}</pre>
      <pre>{{ lc_gostadeum_cardapio }}</pre>
      <pre>{{ lc_gostadeum_musicas }}</pre>
      <pre>{{ lc_gostadeum_jogos }}</pre>
      
      
      
          <!-- <li v-for="item in resultado">
            <p>{{ item }}</p>
          </li> -->



    </div>
</template>




<script>

import store, { storeMutations } from '../store'
import resultado, { resultadoMutations } from '../resultado'

export default {
  name: 'Vitrine',


  computed: {
      printa_lc_disp_convidados_easy() {
        return JSON.stringify(this.lc_disp_convidados_easy, null, 2);
      },
      printa_lc_disp_cardapio_easy() {
        return JSON.stringify(this.lc_disp_cardapio_easy, null, 2);
      },
      printa_lc_solucao_cardapio() {
        return JSON.stringify(this.lc_solucao_cardapio, null, 2);
      },
      printa_lc_solucao_convidado() {
        return JSON.stringify(this.lc_solucao_convidado, null, 2);
      },

      resultadojson(){
        return JSON.stringify(this.resultado, null, 2);
      },
      resultadomusicajson(){
        return JSON.stringify(this.resultado_musica, null, 2);
      },
      resultadojogojson(){
        return JSON.stringify(this.resultado_jogo, null, 2);
      },
      resultadogostadeum(){
        return JSON.stringify(this.lc_gostadeum_cardapio, null, 2);
      },
      
      
      
      
      //teste, ainda não funcionou
      resultado_nao_gosta(){
        return JSON.stringify(resultadoMutations.get_lsn_convidado_cardapio(), null, 2);
      }
      


  },

  
  data (){
    
    
    return{
      nome: "texto qualquer",
      valor: "20",
      lc_solucao_cardapio: [],
      lc_solucao_convidado: [],
      lc_disp_convidados_easy: [],
      lc_disp_cardapio_easy: [],
      lc_opcoes: [],

      lc_gostadeum_cardapio: [],
      lc_gostadeum_musicas: [],
      lc_gostadeum_jogos: [],
      
      
      
      resultado: [],
      resultado_musica: [],
      resultado_jogo: [],
    }
   
  },

  methods: {
    pegadado(){
      this.lc_solucao_convidado = storeMutations.getsolucao_convidado();
      this.lc_solucao_cardapio = storeMutations.getsolucao_cardapio();
      this.lc_disp_convidados_easy = storeMutations.getdisp_convidados_easy();
      this.lc_disp_cardapio_easy = storeMutations.getdisp_cardapio_easy();
      this.lc_opcoes = storeMutations.getopcoes();
      this.lc_gostadeum_cardapio = storeMutations.get_gostadeum_cardapio();

    },
    validaCardapio(){

      
      this.resultado = resultadoMutations.get_lsn_convidado_cardapio()
      this.resultado_musica = resultadoMutations.get_lsn_convidado_musica()
      this.resultado_jogo = resultadoMutations.get_lsn_convidado_jogo()

      this.lc_gostadeum_cardapio = resultadoMutations.get_gostadeum_cardapio()
      this.lc_gostadeum_musicas = resultadoMutations.get_gostadeum_musica()
      this.lc_gostadeum_jogos = resultadoMutations.get_gostadeum_jogo()
      //this.resultado = lista_resultado.slice()
    }
    
  }
};




</script>