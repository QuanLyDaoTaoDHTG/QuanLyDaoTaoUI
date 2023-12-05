<template>
    <Suspense>
        <BasicAdminFormVue :tableColumns="tableColumns" :apiName="'ChuongTrinhDaoTao'" :allowAdd="true" :allowDelete="true" title="Ngành học"
           :CustomActions="CustomActions" :allowEdit="true"></BasicAdminFormVue>
    </Suspense>
</template>

<script setup lang="ts">

import BasicAdminFormVue from '@/components/maynghien/adminTable/BasicAdminForm.vue';
import { ApiActionType, CustomAction, CustomActionDataType } from '@/components/maynghien/adminTable/Models/CustomAction';
// @ts-ignore
import { TableColumn } from '@/components/maynghien/adminTable/Models/TableColumn.ts';
const tableColumns: TableColumn[] = [
    {
        key: "id",
        label: "id",
        enableEdit: false,
        enableCreate: false,
        hidden: true,
        width: 500,
        required: true,
        sortable: true,
        showSearch: false,
        inputType: "text",
        dropdownData: null,
    },
    {
        key: "maChuongTrinhDaoTao",
        label: "Mã Chương Trình Đào Tạo",   
        enableEdit: true,
        enableCreate: true,
        hidden: false,
        width: 500,
        required: true,
        sortable: true,
        showSearch: false,
        inputType: "text",
        dropdownData: null,
    },
    {
        key: "tenChuongTrinhDaoTao",
        label: "Tên Chương Trình Đào Tạo",   
        enableEdit: true,
        enableCreate: true,
        hidden: false,
        width: 500,
        required: true,
        sortable: true,
        showSearch: false,
        inputType: "text",
        dropdownData: null,
    },
    {
        key: "maNganhHoc",
        label: "Mã ngành",
        width: 1000,
        sortable: true,
        enableEdit:  true,

        enableCreate:  true,
        required:true,
        hidden: true,
        showSearch: false,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "tenNganhHoc",
            keyMember: "id",
            apiUrl: "Nganh",
        },
    },
    {
        key: "tenNganhHoc",
        label: "Mã ngành",
        width: 1000,
        sortable: true,
        enableEdit:  false,

        enableCreate:  false,
        required:true,
        hidden: false,
        showSearch: false,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "tenNganhHoc",
            keyMember: "maNganhHoc",
            apiUrl: "Nganh",
        },
    },

]
const CustomActions: CustomAction[] = ([
]);
</script>