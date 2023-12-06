<template>
  <div class="Content">
    <el-form
      ref="ruleFormRef"
      :model="state"
      status-icon
      label-width="px"
      class="demo-ruleForm"
    >
      <el-form-item label="" prop="username">
        <el-input v-model="state.userName" placeholder="User name" />
      </el-form-item>

      <el-form-item label="" prop="pass">
        <el-input
          v-model="state.password"
          type="password"
          placeholder="PassWord"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login()">Sign In</el-button>
      </el-form-item>
    </el-form>

    <el-dialog v-model="dialogVisible" title="Error">
      <p>Invalid login information</p>
      <el-button type="primary" @click="dialogVisible = false">OK</el-button>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { Calendar, Search, User, Key } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";

import { LoginViewModel } from '../../Models/LoginViewModel'
import { handleLogin } from "../../Service/LoginService"
//import { useToast } from "vue-toastification";

//const _toast = useToast();
const state = reactive<LoginViewModel>({
  userName: "",
  password: "",
  role: "",
  khoaId:undefined,
  tenKhoa: "",
  tenLop: "",
  lopId:undefined,
  id: undefined
});
import { ElMessageBox } from "element-plus";
import router from "@/router";

const dialogVisible = ref(false);

const login = async () => {
  const loginResult = await handleLogin(state);
  if (!loginResult.isSuccess) {
    dialogVisible.value = true;
  } else {
    router.push("/");
  }
};
</script>
<style>
/* .el-input{
        height:30px;
      } */
.el-form-item {
  width: 500px;
}

/* .el-form{
        margin: 145px;
      } */
.Content {
  width: 100%;
  height: 550px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://quanlykho.vn/wp-content/uploads/2020/09/1920x1080_ky-nang-quan-ly-thoi-gian-1310.jpg");
}

main.el-main {
  background-color: white;
}
body {
  margin: 0px;
}
.el-dialog__header {
  background-color: #f89898;
}
</style>
