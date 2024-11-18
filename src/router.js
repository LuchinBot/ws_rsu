import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardComponent from './components/includes/DashboardComponent.vue';
import NotFound from './components/pages/NotFound.vue';

Vue.use(VueRouter);


const routes = [
	{
		path: '/',
		name: '/',
		component: DashboardComponent
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