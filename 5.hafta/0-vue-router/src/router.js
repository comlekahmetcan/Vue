import { createRouter, createWebHashHistory } from "vue-router";
// import HomeCmp from "@/views/Home";

const routes = [
  {
    path: "/",
    // component: HomeCmp,
    component: () => import("@/views/MyHome"),
  },
  {
    path: "/hakkimda",
    // component: About,
    component: () => import("@/views/MyAbout"),
  },
];
const router = createRouter({
  routes,
  //mode: "hash|history",
  history: createWebHashHistory(),
});

export default router;
