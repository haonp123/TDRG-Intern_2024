import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Forum from "../views/Forum.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/forum",
        name: "Forum",
        component: Forum,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
