import { createRouter, createWebHistory } from 'vue-router'
import Cookie from 'js-cookie'
import layout from '../components/layout/layout1.vue'
import AccountVue from '../views/Account/Index.vue'
import Layout2 from "../components/layout/Layout2.vue";
import LoginView from "../views/Auth/Login.vue";
//@ts-ignore
import ChuongTrinhDaoTaoVue from "../views/CTDT/ChuongTrinhDaoTao.vue";
//@ts-ignore
import KhoaVue from '../views/Khoa.vue';
//@ts-ignore
import LopVue from '../views/Lop.vue';
//@ts-ignore
import NganhVue from '../views/Nganh.vue';
//@ts-ignore
import CTCTDT from "../views/CTDT/Deatail.vue";

import InforSV from '../views/Account/Infor.vue';
import * as jwt from "jsonwebtoken";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/Account",
          component: AccountVue,
        },
        {
          path: "ChuongTrinhDaoTao",
          component: ChuongTrinhDaoTaoVue,
          meta: { requiresAuth: true, roles: ["Admin", "superadmin"] },
        },
        {
          path: "Khoa",
          component: KhoaVue,
          meta: { requiresAuth: true, roles: ["Admin", "superadmin"] },
        },
        {
          path: "Lop",
          component: LopVue,
          meta: { requiresAuth: true, roles: ["Admin", "superadmin"] },
        },
        {
          path: "Nganh",
          component: NganhVue,
          meta: { requiresAuth: true, roles: ["Admin", "superadmin"] },
        },
        {
          path: "ChuongTrinhDaoTao/:Id",
          component: CTCTDT,
          meta: { requiresAuth: true, roles: ["Admin", "superadmin"] },
        },
        {
          path: "ThongTinSinhVien/:Id",
          component: InforSV,
          meta: { requiresAuth: true, roles: ["SinhVien"] },
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
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!Cookie.get("accessToken");

  const userRoles: string[] = getRolesFromToken(Cookie.get('accessToken')?.toString() || '') ??[];

  if (to.meta.requiresAuth && !isAuthenticated && to.path !== "/login") {
    next({ path: "/login" });
  } 
  else if(to.meta.roles && !hasPermission(userRoles, to.meta.roles as string[])){
    next({ path: "/403" });
  }
  else {
    next(); // Continue to the requested route
  }
});


function hasPermission(userRoles: string[], requiredRoles: string[]): boolean {
  for (const requiredRole of requiredRoles) {
    if (userRoles.includes(requiredRole)) {
      return true;
    }
  }
  return false;
}
function getRolesFromToken(token: string): string[] | null {
  try {
    var token = Cookie.get('accessToken')?.toString() ?? "";
    const decodedToken = jwt.decode(token ?? '') as TokenPayload;
    console.log(decodedToken);
    return decodedToken.Roles || [];
  } catch (error) {
    console.error(error);
    return null;
  }
}
interface TokenPayload {
  [x: string]: never[];
}
export default router
