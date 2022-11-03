<template>
  <div class="span9">
    <employee-table :employees="employees" />
  </div>
</template>

<script>
import EmployeeTable from "@/components/employee/EmployeeTable.vue";
export default {
  name: "RightSide",
  components: { EmployeeTable },
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
