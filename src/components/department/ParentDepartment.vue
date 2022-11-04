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
import { computed } from "vue";

interface IDepartmentStore {
  fetchDepartments: (value: string) => void;
  fetchDepartment: (value: string) => void;
  department: Object;
  departments: Array<Object>;
}
interface IEmployeeStore {
  fetchEmployees: (value: string) => void;
  employees: Array<Object>;
}

export default {
  name: "ParentDepartment",
  components: { DepartmentOption },
  setup: function () {
    const departmentStore: IDepartmentStore = useDepartmentStore();
    const employeeStore: IEmployeeStore = useEmployeeStore();
    const department = computed(() => departmentStore.department);
    const fetchDepartments = (value: string): void => {
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
