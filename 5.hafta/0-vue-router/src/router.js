import { createRouter, createWebHashHistory } from "vue-router";
// import HomeCmp from "@/views/Home";

const routes = [
  {
    name: "HomePage",
    path: "/",
    // component: HomeCmp,
    component: () => import("@/views/MyHome"),
  },
  {
    name: "AboutPage",
    path: "/hakkimda",
    component: () => import("@/views/MyAbout"),
  },
  {
    name: "DetailsPage",
    path: "/detay/:userID",
    component: () => import("@/views/MyDetails"),
  },
];
const router = createRouter({
  routes,
  //mode: "hash|history",
  //history: createWebHistory(),
  history: createWebHashHistory(),
});

export default router;
