import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "index",
		component: () => import("@/views/index.vue")
	},
	{
		path: "/404",
		name: "index",
		component: () => import("@/views/404.vue")
	},
	{
		path: "/:pathMatch(.*)",
		redirect: "/404"
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
