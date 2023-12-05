<template>
    <Suspense>
        <BasicAdminFormVue :tableColumns="tableColumns" :apiName="'Khoa'" :allowAdd="true" :allowDelete="true" title="Khoa"
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
        key: "maKhoa",
        label: "Mã khoa",
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
        key: "tenKhoa",
        label: "Tên khoa",
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

]
const CustomActions: CustomAction[] = ([
]);
</script>