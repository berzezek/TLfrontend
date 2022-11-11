<template>
  <div class="well sidebar-nav" v-if="department.name">
    <ul class="nav nav-list">
      <li class="nav-header">Головной отдел</li>
      <li>
        <department-option :department="department" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import DepartmentOption from "@/components/department/DepartmentOption.vue";
import type { IDepartment } from "@/utils";

export default {
  name: "ParentDepartment",
  components: { DepartmentOption },
  props: {
    department: {
      type: Object as () => IDepartment,
      required: true,
    },
  },
};
</script>

<style scoped></style>
