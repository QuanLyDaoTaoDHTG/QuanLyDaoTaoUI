import { createRouter, createWebHistory } from 'vue-router'
import Cookie from 'js-cookie'
import layout from '../components/layout/layout1.vue'
import AccountVue from '../views/Account/Index.vue'
import Layout2 from "../components/layout/Layout2.vue";
import LoginView from "../views/Auth/Login.vue";
//@ts-ignore
import ChuongTrinhDaoTaoVue from '../views/CuongTrinhDaoTao.vue';
//@ts-ignore
import KhoaVue from '../views/Khoa.vue';
//@ts-ignore
import LopVue from '../views/Lop.vue';
//@ts-ignore
import NganhVue from '../views/Nganh.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          component: AccountVue,
        },
        {
          path: "ChuongTrinhDaoTao",
          component: ChuongTrinhDaoTaoVue,
        },
        {
          path: "Khoa",
          component: KhoaVue,
        },
        {
          path: "Lop",
          component: LopVue,
        },
        {
          path: "Nganh",
          component: NganhVue,
        },
        // Other routes using default layout...
      ],
    },
    {
      path: "/Login",
      component: Layout2,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          component: LoginView,
        },
        // Other routes using default layout...
      ],
    },
  ]
})

export default router
