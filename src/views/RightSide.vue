<template>
  <div>
    <div class="span9">
      <parent-department :department="department" />
      <employee-table :employees="employees" />
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
  },
};
</script>

<style scoped>
.observer {
  height: 30px;
  background-color: #5bb75b;
}
</style>
