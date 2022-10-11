import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/MyHome"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/MyLogin"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/MyRegister"),
  },
  {
    name: "NewBookmarkPage",
    path: "/new",
    component: () => import("@/views/NewBookmark"),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
