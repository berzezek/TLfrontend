<template>
  <div class="">
    <ul class="nav nav-list">
      <li class="nav-header">Головной отдел</li>

      <li>
        <department-option
          :department="department"
          :className="'department-options'"
        />
      </li>
      <li v-if="employeesCount">
        <span class="muted">Кол-во работников: {{ employeesCount }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import DepartmentOption from "@/components/department/DepartmentOption.vue";
// @ts-ignore
import type { IDepartment } from "@/utils";

export default {
  name: "ParentDepartment",
  components: { DepartmentOption },
  props: {
    department: {
      type: Object as () => IDepartment,
      required: true,
    },
    employeesCount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
