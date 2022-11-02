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
import { useCategoryStore } from "@/stores/category";
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
    const categoryStore = useCategoryStore();
    const employeeStore = useEmployeeStore();
    const categories = computed(() => categoryStore.categories);
    const employees = computed(() => employeeStore.employee);

    const changeCategories = (value) => {
      categoryStore.fetchCategories(value);
      employeeStore.fetchEmployee(value);
    };
    const changeEmployees = (value) => {
      employeeStore.fetchEmployee(value);
    };
    const removeEmployee = (value) => {
      employeeStore.removeEmployee(value);
    };
    const backCategories = (value) => {
      console.log(value)
    };
    onMounted(() => {
      categoryStore.fetchCategories(1);
      categoryStore.fetchCategory(1);
      employeeStore.fetchEmployee(1);
    });

    return {
      categories,
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
