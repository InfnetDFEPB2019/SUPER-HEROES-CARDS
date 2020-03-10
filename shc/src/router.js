import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);




import Cadastro from './Cadastro/Cadastro.vue'
import Home from './Home/Home.vue'
import Login from './Login/Login.vue'
import Cartas from './Cartas/Cartas.vue'
import Jogar from './Jogar/Jogar.vue'


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