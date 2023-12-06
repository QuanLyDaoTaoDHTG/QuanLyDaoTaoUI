<template>
    <el-dialog
    :model-value="openDialog"
    class="form-dialog"
    width="30%"
    @close="emit('onCloseClicked')"
  >
  <p>Tài khoản : {{ props.userName }}</p>
  <el-input placeholder="Mật khẩu mới" v-model="thongtinsv.password" />
  <el-button type="primary" @click="handleSave()">Save</el-button>
  </el-dialog>
</template>
<script setup lang="ts">
import { defineProps, ref, onMounted, onUnmounted, watch } from "vue";
import UserModel from '../../Models/Dtos/UserModel'
import { axiosInstance } from "../../Service/axiosConfig";
const props = defineProps<{
  userName: string;
  openDialog: boolean;
}>();
const thongtinsv = ref<UserModel>({
  id: undefined,
  userName: props.userName,
  password: "",
  role: "",
  khoaId:undefined,
  tenKhoa: "",
  lopId: undefined,
  tenLop: "",
});

const emit = defineEmits<{
  (e: "onCloseClicked"): void;
}>();

async function handleSave() {
  console.log(thongtinsv.value);
  await axiosInstance
    .put("Account/changePassword", thongtinsv.value)
    .then((response) => {
      if (response.data.isSuccess && response.data.data != null) {
        alert("Cập nhật thành công");
      } else {
        alert("Đã có lỗi xảy ra, thử lại sau");
      }
    });
}
</script>