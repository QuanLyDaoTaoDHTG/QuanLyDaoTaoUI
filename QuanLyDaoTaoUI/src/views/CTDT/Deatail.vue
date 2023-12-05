<template>
    <Suspense>
        <BasicAdminFormVue :tableColumns="tableColumns" :apiName="'HocPhan'" :allowAdd="true" :allowDelete="true"
        :createUrl="useRoute().params.Id.toString()"
            title="Học Phần" :CustomActions="CustomActions" :allowEdit="false" :CustomFilters="CustomFilters"></BasicAdminFormVue>
    </Suspense>
</template>

<script setup lang="ts">

import Filter from '@/components/maynghien/BaseModels/Filter';
import BasicAdminFormVue from '@/components/maynghien/adminTable/BasicAdminForm.vue';
import { ApiActionType, CustomAction, CustomActionDataType, CustomActionResponse } from '@/components/maynghien/adminTable/Models/CustomAction';
// @ts-ignore
import { TableColumn } from '@/components/maynghien/adminTable/Models/TableColumn.ts';
import { useRoute } from 'vue-router';

import { ref } from 'vue';
import type { AppResponse } from '@/Models/AppResponse';

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
        key: "maHocPhan",
        label: "MaHocPhan",   
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
        key: "tenHocPhan",
        label: "TenHocPhan",   
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
        key: "soTinChi",
        label: "SoTinChi",   
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
        key: "soTietLiThuyet",
        label: "SoTietLiThuyet",   
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
        key: "soTietThucHanh",
        label: "SoTietThucHanh",   
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
        label: "MaChuongTrinhDaoTao",
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
        key: "dacDiem",
        label: "DacDiem",   
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
const CustomFilters: Filter[] = ([
    {
        FieldName: "maChuongTrinhDaoTao",
        Value: useRoute().params.Id.toString(),
        DisplayName: undefined,
        Operation:undefined,
        Type:undefined,
        dropdownData:undefined
    }
])


</script>
<style>
.el-col{
    color:antiquewhite;
    font-weight: bold;
    font-size: 16px;
}
</style>