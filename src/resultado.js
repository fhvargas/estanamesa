
import Vue from 'vue';
import store, { storeMutations } from './store'


export const resultado = Vue.observable ({
    name : 'seila',
    solucao_cardapio : [],
    base_convidados : [],
    base_cardapio : [],
    
    lsn_convidado_musica : [],
    lsn_convidado_cardapio : [],
    lsn_convidado_jogo : [],

    gostadeum_cardapio : [],
    gostadeum_musica : [],
    gostadeum_jogo : [],


})

export const resultadoMutations = {
    
    get_lsn_convidado_cardapio(){
        return (this.lsn_convidado_cardapio);
    },
    get_lsn_convidado_musica(){
        return (this.lsn_convidado_musica);
    },
    get_lsn_convidado_jogo(){
        return (this.lsn_convidado_jogo);
    },

    get_gostadeum_cardapio(){
        return (this.gostadeum_cardapio);
    },
    get_gostadeum_musica(){
        return (this.gostadeum_musica);
    },
    get_gostadeum_jogo(){
        return (this.gostadeum_jogo);
    },




    refresh(){
        this.validaMusicas()
        this.validaCardapio()
        this.validaJogos()

        this.peloMenosUm_cardapio()
        this.peloMenosUm_musica()
        this.peloMenosUm_jogo()
    
    
    
    
    },


    validaJogos(){
        let list_convidado = storeMutations.getsolucao_convidado()
        let list_jogos = storeMutations.getsolucao_jogos()

        let lista_resultado = [];
        for(let convidado of list_convidado){
          //console.log(convidado.nome);
          for(let jogo of list_jogos){
              //console.log(pratoo.prato+pratoo.id);
              if(convidado.jnaogosta == jogo.id){
                 //console.log(pratoo.prato+pratoo.id+convidado.nome+convidado.naogosta);
                 lista_resultado.push(convidado.nome+" Nao gosta de "+jogo.jogo);
              }
          }
        }
        this.lsn_convidado_jogo = lista_resultado.slice()

    },


    validaMusicas(){
        let list_convidado = storeMutations.getsolucao_convidado()
        let list_musicas = storeMutations.getsolucao_musicas()

        let lista_resultado = [];
        for(let convidado of list_convidado){
          //console.log(convidado.nome);
          for(let musica of list_musicas){
              //console.log(pratoo.prato+pratoo.id);
              if(convidado.mnaogosta == musica.id){
                 //console.log(pratoo.prato+pratoo.id+convidado.nome+convidado.naogosta);
                 lista_resultado.push(convidado.nome+" Nao gosta de "+musica.estilo);
              }
          }
        }
        this.lsn_convidado_musica = lista_resultado.slice()

    },

    validaCardapio(){
        let list_convidado = storeMutations.getsolucao_convidado()
        let list_cardapio = storeMutations.getsolucao_cardapio()

        let lista_resultado = [];
        for(let convidado of list_convidado){
          //console.log(convidado.nome);
          for(let pratoo of list_cardapio){
              //console.log(pratoo.prato+pratoo.id);
              if(convidado.cnaogosta == pratoo.id){
                 //console.log(pratoo.prato+pratoo.id+convidado.nome+convidado.naogosta);
                 lista_resultado.push(convidado.nome+" Nao gosta de "+pratoo.prato);
              }
          }
        }
        this.lsn_convidado_cardapio = lista_resultado.slice()
      },

    peloMenosUm_cardapio(){
        let list_convidado = storeMutations.getsolucao_convidado()
        let list_cardapio = storeMutations.getsolucao_cardapio()

        let lista_resultado = [];
        
        let estado_gosta = false;

        for(let convidado of list_convidado){
          //console.log(convidado.nome);
          console.log("entrou no convidado")
          estado_gosta = false;
          for(let pratoo of list_cardapio){
              //console.log(pratoo.prato+pratoo.id);
              if(convidado.cgosta == pratoo.id){
                 estado_gosta = true;
                 
              }
          }
          if(!estado_gosta){
            lista_resultado.push(convidado.nome+" Não tem nenhum prato que ele goste!");
            }
        }
        this.gostadeum_cardapio = lista_resultado.slice()
    },

    peloMenosUm_musica(){
        let list_convidado = storeMutations.getsolucao_convidado()
        let list_musica = storeMutations.getsolucao_musicas()

        let lista_resultado = [];
        
        let estado_gosta = false;

        for(let convidado of list_convidado){
          //console.log(convidado.nome);
          console.log("entrou no convidado")
          estado_gosta = false;
          for(let music of list_musica){
              //console.log(pratoo.prato+pratoo.id);
              if(convidado.mgosta == music.id){
                 estado_gosta = true;
                 
              }
          }
          if(!estado_gosta){
            lista_resultado.push(convidado.nome+" Não tem nenhuma música que ele goste!");
            }
        }
        this.gostadeum_musica = lista_resultado.slice()
    },

    peloMenosUm_jogo(){
        let list_convidado = storeMutations.getsolucao_convidado()
        let list_jogos = storeMutations.getsolucao_jogos()

        let lista_resultado = [];
        
        let estado_gosta = false;

        for(let convidado of list_convidado){
          //console.log(convidado.nome);
          console.log("entrou no convidado")
          estado_gosta = false;
          for(let jogo of list_jogos){
              //console.log(pratoo.prato+pratoo.id);
              if(convidado.jgosta == jogo.id){
                 estado_gosta = true;
                 
              }
          }
          if(!estado_gosta){
            lista_resultado.push(convidado.nome+" Não tem nenhum jogo que ele goste!");
            }
        }
        this.gostadeum_jogo = lista_resultado.slice()
    },



    

}