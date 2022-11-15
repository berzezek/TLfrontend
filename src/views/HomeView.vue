<template>
  <div>
    <div class="container-fluid">
      <div class="row-fluid">
        <left-side :departments="departments" @levelUp="levelUp" class="span3"/>
        <right-side
          :employees="employees"
          :department="department"
          :employeesCount="count"
          class="span9"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LeftSide from "@/views/LeftSide.vue";
import RightSide from "@/views/RightSide.vue";
// @ts-ignore
import { useEmployeeStore } from "@/stores/employee";
import { computed, onMounted } from "vue";
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
      department: IDepartment = computed(() => departmentStore.department),
      departments = computed(() => departmentStore.departments),
      count = computed(() => employeeStore.count),
      fetchParentDepartment = (value: string | null): void => {
        departmentStore.fetchDepartment(value);
        departmentStore.fetchDepartments(value);
        employeeStore.fetchEmployees(value);
      },
      levelUp = (): void => {
        employeeStore.resetEmployees();
        fetchParentDepartment(department.value.head_office);
      };
    console.log(count);
    onMounted(() => {
      departmentStore.fetchDepartments();
    });
    return {
      employees,
      department,
      departments,
      levelUp,
      count,
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
