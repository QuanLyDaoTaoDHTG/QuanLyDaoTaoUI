<template>
    <Suspense>
        <BasicAdminFormVue :tableColumns="tableColumns" :apiName="'Account'" :allowAdd="true" :allowDelete="true" title="User"
           :CustomActions="CustomActions" :allowEdit="false"></BasicAdminFormVue>
    </Suspense>
</template>

<script setup lang="ts">

import BasicAdminFormVue from '@/components/maynghien/adminTable/BasicAdminForm.vue';
import { ApiActionType, CustomAction, CustomActionDataType } from '@/components/maynghien/adminTable/Models/CustomAction';
// @ts-ignore
import { TableColumn } from '@/components/maynghien/adminTable/Models/TableColumn.ts';
const tableColumns: TableColumn[] = [
    {
        key: "userName",
        label: "User Name",
        enableEdit: false,
        enableCreate: true,
        hidden: false,
        width: 500,
        required: true,
        sortable: true,
        showSearch: true,
        inputType: "text",
        dropdownData: null,

    },
    {
        key: "role",
        label: "Role",
        enableEdit: true,
        enableCreate: true,
        hidden: false,
        width: 300,
        required: true,
        sortable: true,
        showSearch: true,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "roleName",
            keyMember: "role",
            data: [
                {
                    role: "Admin",
                    roleName: "Admin"
                },
                {

                    role: "GiangVien",
                    roleName: "GiangVien"
                },
                {
                    role: "SinhVien",
                    roleName: "SinhVien"
                }
            ]

        },

    },
    {
        key: "password",
        label: "Password",
        enableEdit: false,
        enableCreate: true,
        hidden: true,
        width: 500,
        required: true,
        sortable: true,
        showSearch: false,
        inputType: "text",
        dropdownData: null,

    },
    {
        key: "khoaId",
        label: "Khoa",
        width: 1000,
        sortable: true,
        enableEdit:  true,

        enableCreate:  true,
        required:true,
        hidden: true,
        showSearch: false,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "tenKhoa",
            keyMember: "id",
            apiUrl: "Khoa",
        },

    },
    {
        key: "tenKhoa",
        label: "Khoa",
        width: 1000,
        sortable: true,
        enableEdit:  false,

        enableCreate:  false,
        required:true,
        hidden: false,
        showSearch: false,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "tenKhoa",
            keyMember: "id",
            apiUrl: "Khoa",
        },

    },
    {
        key: "lopId",
        label: "Lớp",
        width: 1000,
        sortable: true,
        enableEdit:  true,

        enableCreate:  true,
        required:true,
        hidden: true,
        showSearch: false,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "tenLop",
            keyMember: "id",
            apiUrl: "lop",
        },

    },
    {
        key: "tenLop",
        label: "Tên lớp",
        width: 1000,
        sortable: true,
        enableEdit:  false,

        enableCreate:  false,
        required:true,
        hidden: false,
        showSearch: false,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "tenLop",
            keyMember: "id",
            apiUrl: "lop",
        },

    },

]
const CustomActions: CustomAction[] = ([
]);
</script>