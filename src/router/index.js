import Vue from 'vue';
import Router from 'vue-router';

import Formulario from "@/components/Formulario";

import ServicioREST from "@/components/ServicioREST";

Vue.use(Router);

const routes = [
    {
        path:'/imagenes',
        name:'imagenes',
        component:Formulario
    },
    {
        path:'/servicio',
        name:'servicio',
        component:ServicioREST
    }

];

const router =  new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:routes
});

export default router;
