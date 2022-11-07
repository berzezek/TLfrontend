<template>
  <div>
    <div class="container-fluid">
      <div class="row-fluid">
        <left-side
        />
        <right-side :employees="employeeList" />
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
    const employeeList = computed(() => employeeStore.employeeList);

    return {
      employeeList,
    };
  },
};
</script>

<style scoped></style>
