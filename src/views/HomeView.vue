<template>
  <div>
    <div class="container-fluid">
      <div class="row-fluid">
        <left-side
        />
        <right-side :employees="employees.results" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LeftSide from "@/views/LeftSide.vue";
import RightSide from "@/views/RightSide.vue";
import { useEmployeeStore } from "@/stores/employee";
import { computed } from "vue";
import type { IEmployees, IEmployeeStore } from "@/utils";

export default {
  name: "HomeView",
  components: {
    RightSide,
    LeftSide,
  },
  setup: function () {
    const employeeStore: IEmployeeStore = useEmployeeStore();
    const employees: IEmployees = computed(() => employeeStore.employees);

    return {
      employees,
    };
  },
};
</script>

<style>

.block-in-center {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
