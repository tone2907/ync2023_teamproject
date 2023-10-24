import { createRouter, createWebHistory } from 'vue-router';
import Article from '../views/Article.vue';


const routes = [
	{
		path: '/',
		name: 'article',
		component: Article,
	},
	{
		path: '/article',
		name: 'article',
		component: () => import('../views/Article.vue'),
	},
	{
		path: '/article/create',
		name: 'create',
		component: () => import('../views/Article/create.vue'),
	},
	{
		path: '/article/detail',
		name: 'detail',
		component: () => import('../views/Article/detail.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
