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

<script>
import { useDepartmentStore } from "@/stores/department";
import { useEmployeeStore } from "@/stores/employee";
import { computed } from "vue";
import DepartmentOption from "@/components/department/DepartmentOption.vue";

export default {
  name: "ParentDepartment",
  components: { DepartmentOption },
  setup: function () {
    const departmentStore = useDepartmentStore();
    const employeeStore = useEmployeeStore();
    const department = computed(() => departmentStore.department);
    const fetchDepartments = (value) => {
      departmentStore.fetchDepartments(value);
      employeeStore.fetchEmployees(value);
    };
    return {
      department,
      fetchDepartments,
    };
  },
};
</script>

<style scoped></style>
