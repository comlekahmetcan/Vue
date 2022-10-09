import { createRouter } from "vue-router";
// import HomeCmp from "@/views/Home";

const routes = [
  {
    path: "/",
    // component: HomeCmp,
    component: () => import("@/views/Home"),
  },
  {
    path: "/hakkimda",
    // component: About,
    component: () => import("@/views/About"),
  },
];
const router = createRouter({
  routes,
});

export default router;
