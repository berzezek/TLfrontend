<template>
  <div class="span9">
    <employee-table :employees="employees" />
    <div class="observer" ref="observer"></div>
  </div>
</template>

<script lang="ts">
import EmployeeTable from "@/components/employee/EmployeeTable.vue";
import type { IEmployees } from "@/utils";
import {useEmployeeStore} from "@/stores/employee";

export default {
  name: "RightSide",
  components: { EmployeeTable },
  props: {
    employees: {
      type: Array as IEmployees,
      required: true,
    },
  },
  mounted() {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const emplolyeeStore = useEmployeeStore();
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        emplolyeeStore.fetchEmployees(2);
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
};
</script>

<style scoped>
.observer {
  height: 30px;
  background-color: #5bb75b;
}
</style>