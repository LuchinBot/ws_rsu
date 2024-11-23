import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardComponent from './components/includes/DashboardComponent.vue';
import GaleriaComponent from './components/pages/GaleriaComponent.vue';
import ContactoComponent from './components/pages/ContactoComponent.vue';
import AreaComponent from './components/pages/AreaComponent.vue';
import EventoComponent from './components/pages/EventoComponent.vue';
import NotFound from './components/pages/NotFound.vue';

Vue.use(VueRouter);


const routes = [
	{
		path: '/',
		name: '/',
		component: DashboardComponent
	},
	{
		path: '/galeria',
		name: 'GaleriaComponent',
		component: GaleriaComponent
	},
	{
		path: '/contacto',
		name: 'ContactoComponent',
		component: ContactoComponent
	},
	{
		path: '/area',
		name: 'AreaComponent',
		component: AreaComponent
	},
	{
		path: '/evento/:id?',
		name: 'EventoComponent',
		component: EventoComponent
	},
	{
		path: '*',
		name: 'NotFound',
		property: {},
		children: [],
		component: NotFound
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router