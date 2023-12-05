<template>
    <Suspense>
        <BasicAdminFormVue :tableColumns="tableColumns" :apiName="'Lop'" :allowAdd="true" :allowDelete="true" title="Lớp học"
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
    // {
    //     key: "maChuongTrinhDaoTao",
    //     label: "Mã Chương Trình Đào Tạo",   
    //     enableEdit: true,
    //     enableCreate: true,
    //     hidden: true,
    //     width: 500,
    //     required: true,
    //     sortable: true,
    //     showSearch: false,
    //     inputType: "text",
    //     dropdownData: null,
    // },
    {
        key: "maLop",
        label: "Mã Lớp",   
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
        key: "tenLop",
        label: "Tên Lớp",   
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
        key: "maChuongTrinhDaoTao",
        label: "Mã Chương Trình Đào Tạo",
        width: 1000,
        sortable: true,
        enableEdit:  true,

        enableCreate:  true,
        required:true,
        hidden: true,
        showSearch: false,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "tenChuongTrinhDaoTao",
            keyMember: "id",
            apiUrl: "ChuongTrinhDaoTao",
        },
    },
    {
        key: "tenChuongTrinhDaoTao",
        label: "Tên Chương Trình Đào Tạo",
        width: 1000,
        sortable: true,
        enableEdit:  false,

        enableCreate:  false,
        required:false,
        hidden: false,
        showSearch: false,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "tenChuongTrinhDaoTao",
            keyMember: "maChuongTrinhDaoTao",
            apiUrl: "ChuongTrinhDaoTao",
        },
    },
]
const CustomActions: CustomAction[] = ([
]);
</script>