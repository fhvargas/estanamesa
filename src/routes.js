// alurapic/src/routes.js

import Home from './components/Home.vue';
import Game from './components/Game.vue';
import Convidados from './components/Convidados.vue';
import Resultado from './components/Resultado.vue';
import Cardapio from './components/Cardapio.vue';
import Jogos from './components/Jogos';
import Musicas from './components/Musicas';
import Opcoes from './components/Opcoes.vue';

export const routes = [

    { path: '', component: Home, titulo: 'Home' },
    { path: '/Game', component: Game, titulo: 'Game' },
    { path: '/Resultado', component: Resultado, titulo: 'Resultado' },
    { path: '/Convidados', component: Convidados, titulo: 'Convidados' },
    { path: '/Cardapio', component: Cardapio, titulo: 'Cardapio'},
    { path: '/Musicas', component: Musicas, titulo: 'Musicas'},
    { path: '/Jogos', component: Jogos, titulo: 'Jogos'},
    { path: '/Opcoes', component: Opcoes, titulo: 'Opcoes'},

];