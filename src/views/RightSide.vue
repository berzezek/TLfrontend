<template>
  <div>
    <div v-if="department.id">
      <div class="hero-unit">
        <parent-department
          :department="department"
          :employeesCount="employeesCount"
        />
        <employee-table :employees="employees" :id="department.id"/>
      </div>
    </div>
    <div v-else class="block-in-center">
      <h3>Выберите отдел</h3>
    </div>
  </div>
</template>

<script lang="ts">
import EmployeeTable from "@/components/employee/EmployeeTable.vue";
import ParentDepartment from "@/components/department/ParentDepartment.vue";
// @ts-ignore
import type { IEmployee, IDepartment } from "@/utils";

export default {
  name: "RightSide",
  components: { ParentDepartment, EmployeeTable },
  props: {
    employees: {
      type: [] as IEmployee[],
      required: true,
    },
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

<style scoped>
.observer {
  height: 30px;
  background-color: #5bb75b;
}
</style>
