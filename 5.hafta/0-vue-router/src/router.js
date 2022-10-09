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
    component: () => import("@/views/MyAbout"),
  },
  {
    path: "/detay/:userID",
    component: () => import("@/views/MyDetails"),
  },
];
const router = createRouter({
  routes,
  //mode: "hash|history",
  history: createWebHashHistory(),
});

export default router;
