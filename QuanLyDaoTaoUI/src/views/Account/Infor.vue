<template>
  <label>Họ tên</label>
  <el-input
    v-model="thongtinsv.hoTen"

    size="large"
    placeholder="Họ tên"
  />
  <div class="block">
      <span class="demonstration">Ngày sinh</span>
      <el-date-picker
        v-model="ngaysinhText"
        type="date"
        placeholder="Pick a day"
      />
    </div>
  <label>Email</label>
  <el-input
    v-model="thongtinsv.email"

    size="large"
    placeholder="Email"
  />
  <label>Số điện thoại</label>
  <el-input
    v-model="thongtinsv.dienThoai"

    size="large"
    placeholder="Số điện thoại"
  />
  <label>Nơi sinh</label>
  <el-input
    v-model="thongtinsv.noiSinh"

    size="large"
    placeholder="Nơi sinh"
  />
  <el-button type="primary" @click="handleSave()">Save</el-button>
</template>
<script setup lang="ts">
import ThongTinSinhVienDto from "@/Models/Dtos/ThongTinSinhVienDto";
import { axiosInstance } from "@/Service/axiosConfig";
import { ref } from "vue";
import{useRoute} from 'vue-router'

const thongtinsv = ref<ThongTinSinhVienDto>({
  hoTen: "",
  ngaySinh: undefined,
  noiSinh: "",
  email: "",
  dienThoai: "",
  maSinhVien: "",
  maLop: "",
  tenLop: "",
  id: undefined,
  applicationUserId: useRoute().params.Id.toString(),
});
const ngaysinhText = ref("")
const getData = async () => {
    await axiosInstance.get("Account/infor/" + useRoute().params.Id.toString()).then((response) => {
        if(response.data.isSuccess && response.data.data != null){
            thongtinsv.value = response.data.data;
            console.log(thongtinsv.value);
            ngaysinhText.value = response.data.data.ngaySinh.toString();
        }
    })
}
getData();

 async function handleSave ()  {
    thongtinsv.value.ngaySinh = new Date(ngaysinhText.value);
    console.log(thongtinsv.value);
    await axiosInstance.put("Account/changeInfor", thongtinsv.value).then((response) => {
        if(response.data.isSuccess && response.data.data != null){
            alert("Cập nhật thành công");
        }
        else{
            alert("Đã có lỗi xảy ra, thử lại sau");
        }
    })
}
</script>
