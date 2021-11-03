import { createRouter, createWebHashHistory } from "vue-router";
import Tables from "../views/Tables";
import index from "../views/index";

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
      requiresAuth: true,
    },
    path: "/tables",
    name: "home",
    component: Tables,
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "C_Home",
      fullScreen: true,
      guest: true,
    },
    path: "/c",
    name: "C_Home",
    component: index,
  },
  {
    meta: {
      title: "Destination",
      requiresAuth: true,
    },
    path: "/destination",
    name: "Detination",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ "../views/Tables"),
  },
  {
    meta: {
      title: "Tour",
      requiresAuth: true,
    },
    path: "/tour",
    name: "Tour",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ "../views/Tour"),
  },
  {
    meta: {
      title: "ComInfo",
      requiresAuth: true,
    },
    path: "/comInfo",
    name: "ComInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tables" */ "../views/comInfo"),
  },
  {
    meta: {
      title: "Service",
      requiresAuth: true,
    },
    path: "/service",
    name: "Service",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tables" */ "../views/Services"),
  },
  {
    meta: {
      title: "Package",
      requiresAuth: true,
    },
    path: "/package",
    name: "Package",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tables" */ "../views/Packages"),
  },
  {
    meta: {
      title: "Tour",
      requiresAuth: true,
    },
    path: "/tour",
    name: "Tour",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ "../views/Tour"),
  },
  {
    meta: {
      title: "Book",
      requiresAuth: true,
    },
    path: "/book",
    name: "Book",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ "../views/Books"),
  },
  {
    meta: {
      title: "Tables",
      requiresAuth: true,
    },
    path: "/tables",
    name: "tables",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ "../views/Tables"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import(/* webpackChunkName: "forms" */ "../views/Forms"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import(/* webpackChunkName: "ui" */ "../views/Ui"),
  },
  {
    meta: {
      title: "Responsive layout",
    },
    path: "/responsive",
    name: "responsive",
    component: () =>
      import(/* webpackChunkName: "responsive" */ "../views/Responsive"),
  },
  {
    meta: {
      title: "Login",
      fullScreen: true,
      guest: true,
    },
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    meta: {
      title: "Error",
      fullScreen: true,
    },
    path: "/error",
    name: "error",
    component: () => import(/* webpackChunkName: "error" */ "../views/Error"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
