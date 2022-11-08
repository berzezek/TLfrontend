<template>
  <div class="well sidebar-nav" v-if="department.name">
    <ul class="nav nav-list">
      <li class="nav-header">Головной отдел</li>
      <li>
        <department-option
          :department="department"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useDepartmentStore } from "@/stores/department";
import DepartmentOption from "@/components/department/DepartmentOption.vue";
import { computed } from "vue";
import type { IDepartmentStore } from "@/utils";

export default {
  name: "ParentDepartment",
  components: { DepartmentOption },
  setup: function () {
    const departmentStore: IDepartmentStore = useDepartmentStore(),
      department = computed(() => departmentStore.department);
    return {
      department,
    };
  },
};
</script>

<style scoped></style>
