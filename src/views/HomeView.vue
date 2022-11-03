<template>
  <div>
    <div class="container-fluid">
      <br />
      <br />
      <br />
      <div class="row-fluid">
        <left-side
          :categories="categories"
          @changeCategories="changeCategories"
          @changeEmployees="changeEmployees"
          @backCategories="backCategories"
        />
        <right-side :employees="employees" @removeEmployee="removeEmployee" />
      </div>
      <main-footer />
    </div>
  </div>
</template>

<script>
import LeftSide from "@/views/LeftSide.vue";
import RightSide from "@/views/RightSide.vue";
import MainFooter from "@/views/MainFooter.vue";
import { useDepartmentStore } from "@/stores/department";
import { useEmployeeStore } from "@/stores/employee";
import { computed, onMounted } from "vue";

export default {
  name: "HomeView",
  components: {
    RightSide,
    LeftSide,
    MainFooter,
  },
  setup: function () {
    const departmentStore = useDepartmentStore();
    const employeeStore = useEmployeeStore();
    const departments = computed(() => departmentStore.departments);
    const employees = computed(() => employeeStore.employees);

    const changeCategories = (value) => {
      departmentStore.fetchDepartments(value);
      employeeStore.fetchEmployees(value);
    };
    const changeEmployees = (value) => {
      employeeStore.fetchEmployees(value);
    };
    const removeEmployee = (value) => {
      employeeStore.removeEmployee(value);
    };
    const backCategories = (value) => {
      console.log(value);
    };
    onMounted(() => {
      departmentStore.fetchDepartment(1);
    });

    return {
      departments,
      employees,
      changeEmployees,
      removeEmployee,
      changeCategories,
      backCategories,
    };
  },
};
</script>

<style scoped></style>
