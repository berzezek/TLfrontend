<template>
  <div class="well sidebar-nav">
    <ul class="nav nav-list">
      <li class="nav-header">Головной отдел</li>
      <li>
        <department-option
          :department="department"
          @fetchDetails="fetchDepartments"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useDepartmentStore } from "@/stores/department";
import { useEmployeeStore } from "@/stores/employee";
import DepartmentOption from "@/components/department/DepartmentOption.vue";
import { computed, onMounted } from "vue";
import type { IDepartmentStore, IEmployeeStore } from "@/utils";

export default {
  name: "ParentDepartment",
  components: { DepartmentOption },
  setup: function () {
    const departmentStore: IDepartmentStore = useDepartmentStore(),
      employeeStore: IEmployeeStore = useEmployeeStore(),
      department = computed(() => departmentStore.department),
      fetchDepartments = (value: string | null): void => {
        departmentStore.fetchDepartments(value);
        employeeStore.fetchEmployees(value);
      };
    onMounted(() => {
      departmentStore.fetchDepartment();
    });
    return {
      department,
      fetchDepartments,
    };
  },
};
</script>

<style scoped></style>
