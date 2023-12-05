<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import {Search} from '@element-plus/icons-vue'
import { decode } from "jsonwebtoken";
import Cookie from 'js-cookie'
import { ref } from "vue";
// import router from "@/router";

// const decodedToken = ref();

// function getCode(){
//     var token = Cookies.get('accessToken')?.toString();
//     decodedToken.value = decode(token ?? '');
//     console.log(decodedToken.value);
// }
// getCode();

// function deleteCookie() {
//     // Lấy giá trị của tất cả các cookie
//     const key = 'accessToken';
//     var cookies = document.cookie.split(';');

//     // Duyệt qua từng cookie để tìm và xóa cookie với key tương ứng
//     for (var i = 0; i < cookies.length; i++) {
//         var cookie = cookies[i];
//         while (cookie.charAt(0) === ' ') {
//             cookie = cookie.substring(1);
//         }
//         if (cookie.indexOf(key + '=') === 0) {
//             // Tìm thấy cookie, xóa nó bằng cách đặt hết hạn của nó về quá khứ
//             var expirationDate = new Date(0);
//             document.cookie = key + '=; expires=' + expirationDate.toUTCString() + '; path=/';
//             break;
//         }
//     }
//     router.push("/login");
// }
</script>
