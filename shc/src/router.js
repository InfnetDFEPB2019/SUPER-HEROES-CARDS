import Vue from 'vue';
import VueRouter from 'vue-router';


import Cadastro from './Cadastro/Cadastro.vue'
import Home from './Home/Home.vue'
import Login from './Login/Login.vue'
import Cartas from './Cartas/Cartas.vue'
import Jogar from './Jogar/Jogar.vue'




Vue.use(VueRouter);

export default new VueRouter ({
    mode:"history",
    routes: [
        {
            path: '/cadastro',
            name:'cadastro',
            component:Cadastro
        },
        {
            path: '/',
            name:'home',
            component:Home
        },
        {
            path: '/login',
            name:'login',
            component:Login
        },
        {
            path: '/cartas',
            name:'cartas',
            component:Cartas
        },
        {
            path: '/jogar',
            name:'jogar',
            component:Jogar
        },
        
    ]
})