<template>
  <div>
    <div class="container-fluid">
      <div class="row-fluid">
        <left-side />
        <right-side :employees="employees.results" :department="department" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LeftSide from "@/views/LeftSide.vue";
import RightSide from "@/views/RightSide.vue";
// @ts-ignore
import { useEmployeeStore } from "@/stores/employee";
import { computed } from "vue";
import type {
  IEmployees,
  IEmployeeStore,
  IDepartment,
  IDepartmentStore,
  // @ts-ignore
} from "@/utils";
// @ts-ignore
import { useDepartmentStore } from "@/stores/department";

export default {
  name: "HomeView",
  components: {
    RightSide,
    LeftSide,
  },
  setup() {
    const employeeStore: IEmployeeStore = useEmployeeStore(),
      employees: IEmployees = computed(() => employeeStore.employees),
      departmentStore: IDepartmentStore = useDepartmentStore(),
      department: IDepartment = computed(() => departmentStore.department);
    return {
      employees,
      department,
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
