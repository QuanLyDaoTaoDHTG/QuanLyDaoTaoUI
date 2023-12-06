<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="30">
            <el-menu default-active="1" class="el-menu-vertical-demo">
              <router-link
                to="/Account"
                class="layout1-link"
                v-if="admin"
              >
                <el-menu-item index="1">
                  <el-icon>
                    <User />
                  </el-icon>
                  Account
                </el-menu-item>
              </router-link>
              <router-link to="/Khoa" class="layout1-link" v-if="admin == true">
                <el-menu-item index="2">
                  <el-icon>
                  <Reading />
                  </el-icon>
                  <span>Khoa</span>
                </el-menu-item>
              </router-link>
              <router-link to="/Lop" class="layout1-link" v-if="admin">
                <el-menu-item index="3">
                  <el-icon>
                  <House />
                  </el-icon>
                  <span>Lớp</span>
                </el-menu-item>
              </router-link>
              <router-link to="/Nganh" class="layout1-link" v-if="admin">
                <el-menu-item index="4">
                  <el-icon>
                  <List />
                  </el-icon>
                  <span>Ngành</span>
                </el-menu-item>
              </router-link>
              <router-link to="/ChuongTrinhDaoTao" class="layout1-link" v-if="admin">
                <el-menu-item index="5">
                  <el-icon>
                  <Edit />
                  </el-icon>
                  <span>Chương trình đào tạo</span>
                </el-menu-item>
              </router-link>
              <router-link
              v-if="SV"
                :to="`ThongTinSinhVien/${decodedToken.ApplicationUserId}`"
                class="layout1-link"
              >
                <el-menu-item index="6">
                  <el-icon>
                  <Avatar />
                  </el-icon>
                  <span>Thông tin sinh viên</span>
                </el-menu-item>
              </router-link>
              <el-menu-item index="7" @click="deleteCookie()">
                <el-icon>
                <SwitchButton />
                </el-icon>
                <span>{{ decodedToken.UserName }}</span>
              </el-menu-item>
              <el-menu-item index="7" @click="openDialog = true">
                <el-icon>
                <Setting />
                </el-icon>
                <span>Đổi mật khẩu</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
  <changePassword :openDialog="openDialog" @close="openDialog = false" :user-name="decodedToken.UserName"/>
</template>
<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { decode } from "jsonwebtoken";
import Cookie from "js-cookie";
import { ref } from "vue";
import router from "@/router";
import * as jwt from "jsonwebtoken";
import {
  Menu as IconMenu,
  User,
  SwitchButton,
  Setting,
  Edit,
  House,
  List,
  Avatar,
  Reading
 
} from '@element-plus/icons-vue'
//@ts-ignore
import changePassword from '../Account/ChangePassword.vue'
const decodedToken = ref();

function getCode() {
  var token = Cookie.get("accessToken")?.toString();
  decodedToken.value = decode(token ?? "");
  console.log(decodedToken.value);
}
getCode();

function deleteCookie() {
  // Lấy giá trị của tất cả các cookie
  const key = "accessToken";
  var cookies = document.cookie.split(";");

  // Duyệt qua từng cookie để tìm và xóa cookie với key tương ứng
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(key + "=") === 0) {
      // Tìm thấy cookie, xóa nó bằng cách đặt hết hạn của nó về quá khứ
      var expirationDate = new Date(0);
      document.cookie =
        key + "=; expires=" + expirationDate.toUTCString() + "; path=/";
      break;
    }
  }
  router.push("/login");
}
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
    var token = Cookie.get("accessToken")?.toString() ?? "";
    const decodedToken = jwt.decode(token ?? "") as TokenPayload;
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

const Roles = ref<string[]>([]);
function getRoles() {
  const isAuthenticated = !!Cookie.get("accessToken");

  Roles.value =getRolesFromToken(Cookie.get("accessToken")?.toString() || "") ?? [];

  admin.value = hasPermission(Roles.value, ['Admin', 'superadmin'])
  GV.value = hasPermission(Roles.value, ['GiangVien'])
  SV.value = hasPermission(Roles.value, ['SinhVien'])
}
const admin = ref<boolean>(false);
const GV = ref<boolean>(false);
const SV = ref<boolean>(false);

getRoles();
const openDialog = ref<boolean>(false);

</script>
<style scoped>
h4 {
  color: aliceblue;
  font-family: Segoe UI Black;
  font-size: 50px;
  font-weight: 50px;
}
.el-main {
  background-image: linear-gradient(to right, #0000FF, #FF00A0);
  background-repeat: no-repeat;
  background-size: cover;
}
.el-footer {
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: large;
  color: aliceblue;
}
.el-header {
  display: flex;
  font-size: large;
  justify-content: start;
  align-items: center;
}
.layout1-link span {
  font-size: 14px;
}
.layout1-link span:hover {
  transform: scale(1.08);
}
.layout1-link:hover {
  text-decoration: none;
  /* text-transform: capitalize; */
  /* width: 100%; */
  /* color: blue; */
  /* font-size: 18px; */
}
.layout1-li {
  padding: 0 !important;
  text-align: center;
}
.el-sub-menu__title {
  font-size: 25px !important;
}
.Home {
  text-decoration: none;
  width: 100%;
  color: black;
  font-size: 25px !important;
}
.el-row {
  display: block !important;
}
.side-bar {
  width: 230px;
}
.el-aside {
  width: 230px !important;
  width:200px;
  height:750px;
  background-color: #d9ecff;
}
.common-layout{
  background-color: #d9ecff;
}
.el-menu{
  background-color: #d9ecff;
}
</style>
