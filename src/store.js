
import Vue from 'vue';


export const store = Vue.observable ({
    name : 'felipe',
    solucao_cardapio : [],
    solucao_convidado : [],
    solucao_musicas : [],
    solucao_jogos : [],
    opcoes: [],

    disp_convidados_easy : [],
    disp_cardapio_easy : [],
    disp_musicas_easy : [],
    disp_jogos_easy: [],

    base_convidados : [
        { nome: "Tiago", cgosta: 1, cnaogosta: 9, mgosta: 1, mnaogosta: 5, jgosta: 1, jnaogosta: 5, grupo: "familia" },
        { nome: "Pedro", cgosta: 2, cnaogosta: 1, mgosta: 2, mnaogosta: 6, jgosta: 2, jnaogosta: 6, grupo: "familia" },
        { nome: "Simão", cgosta: 3, cnaogosta: 2, mgosta: 3, mnaogosta: 1, jgosta: 3, jnaogosta: 1, grupo: "familia" },
        { nome: "João", cgosta: 4, cnaogosta: 10, mgosta: 4, mnaogosta: 2, jgosta: 4, jnaogosta: 2, grupo: "amigos" },
        { nome: "Mateus", cgosta: 5, cnaogosta: 4, mgosta: 5, mnaogosta: 3, jgosta: 5, jnaogosta: 3, grupo: "amigos" },
        { nome: "André", cgosta: 6, cnaogosta: 3, mgosta: 6, mnaogosta: 4, jgosta: 6, jnaogosta: 4, grupo: "escola" },
        { nome: "Filipe", cgosta: 7, cnaogosta: 12, mgosta: 1, mnaogosta: 5, jgosta: 1, jnaogosta: 5, grupo: "escola" },
        { nome: "Tomé", cgosta: 8, cnaogosta: 11, mgosta: 2, mnaogosta: 6, jgosta: 2, jnaogosta: 6, grupo: "escola" },
    ],
    base_cardapio : [
        { id:1, prato: "Pastel de carne", tipo: "salgado", preco: 1 },
        { id:2, prato: "Bolo de chocolate", tipo: "doce", preco: 1 },
        { id:3, prato: "Coca", tipo: "bebida", preco: 1 },
        { id:4, prato: "Fruki", tipo: "bebida", preco: 1 },
        { id:5, prato: "Suco de laranja", tipo: "bebida", preco: 1 },
        { id:6, prato: "Bolo de cenoura", tipo: "doce", preco: 1 },
        { id:7, prato: "Água com Gás", tipo: "bebida", preco: 2 },
        { id:8, prato: "Suco de uva", tipo: "bebida", preco: 3 },
        { id:9, prato: "Pastel de queijo", tipo: "salgado", preco: 1 },
        { id:10, prato: "Coxinha", tipo: "salgado", preco: 1 },
        { id:11, prato: "Cachorrinho", tipo: "salgado", preco: 1 },
        { id:12, prato: "Brigadeira", tipo: "salgado", preco: 1 },
    ],
    base_musicas : [
        { estilo: "Rock", id: 1 },
        { estilo: "Pop", id: 2 },
        { estilo: "Metal", id: 3 },
        { estilo: "Punk", id: 4 },
        { estilo: "Gospel", id: 5 },
        { estilo: "HardRock", id: 6 },
    ],

    base_jogos : [
        { jogo: "Pega Vareta", id: 1 },
        { jogo: "Video Game", id: 2 },
        { jogo: "Xadrez", id: 3 },
        { jogo: "Dança das Cadeiras", id: 4 },
        { jogo: "Damas", id: 5 },
        { jogo: "Stop", id: 6 },

    ]

})

export const storeMutations = {
    
    setSolConvidados(solconvidados){
        //store.solucao_convidados = [{ titulo: "Joao", id: 5, valor: 16  }]
        //console.log(JSON.stringify(solconvidados))
        
        store.solucao_convidado = solconvidados
        //console.log(JSON.stringify(store.solucao_convidado))
        //console.log(JSON.stringify(store.solucao_convidados))

    },

    //setSolCardapio(solcardapio){
        //console.log(JSON.stringify(solcardapio))
       // store.solucao_cardapio = solcardapio
        //console.log(JSON.stringify(store.solucao_convidados))
       //console.log(JSON.stringify(store.solucao_cardapio))
  //  },


    //      GET LISTAS DE SOLUCAO DE CADA PARTIDA  

    getsolucao_cardapio(){
        return (store.solucao_cardapio);
    },
    getsolucao_convidado(){
        return (store.solucao_convidado);
    },
    getsolucao_musicas(){
        return (store.solucao_musicas);
    },
    getsolucao_jogos(){
        return (store.solucao_jogos);
    },
    
    //      GET LISTAS DE DISPONIVEIS DA PARTIDA

    getdisp_convidados_easy(){
        return (store.disp_convidados_easy);
    },
    getdisp_cardapio_easy(){
        return (store.disp_cardapio_easy);
    },
    getdisp_musicas_easy(){
        return (store.disp_musicas_easy);
    },
    getdisp_jogos_easy(){
        return (store.disp_jogos_easy);
    },
    
    

    getopcoes(){
        return (store.opcoes);
    },
    getAll(){
        return (store);
    },

    retornaPratoid(id){
        for(let rango of store.base_cardapio){
            if(rango.id == id){
                return (rango.prato)
            }
        }
    },

    retornaMusicaid(id){
        for(let music of store.base_musicas){
            if(music.id == id){
                return (music.estilo)
            }
        }
    },

    retornaJogoid(id){
        for(let joguinho of store.base_jogos){
            if(joguinho.id == id){
                return (joguinho.jogo)
            }
        }
    },

    inicializa(){
        store.disp_convidados_easy = [];
        store.disp_cardapio_easy = [];
        store.disp_jogos_easy = [];
        store.disp_musicas_easy =[];

        store.solucao_cardapio = [];
        store.solucao_convidado = [];
        store.solucao_jogos = [];
        store.solucao_msuica = [];
        
        store.disp_convidados_easy = store.base_convidados.slice();
        store.disp_cardapio_easy = store.base_cardapio.slice();
        store.disp_jogos_easy = store.base_jogos.slice();
        store.disp_musicas_easy = store.base_musicas.slice();
    }


    

}