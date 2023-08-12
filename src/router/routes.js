const routes = [
  {
    path: "/",
    redirect: "/index/welcome",
  },
  {
    path: "/index",
    component: () => import("layouts/welcomePage.vue"),
    children: [
      {
        path: "welcome",
        name: "index_page",
        component: () => import("pages/welcomePage/indexPage.vue"),
      },
      {
        path: "about",
        name: "about_page",
        component: () => import("pages/welcomePage/aboutPage.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
