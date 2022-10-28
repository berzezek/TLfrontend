<template>
  <div>
    <div class="container-fluid">
      <br />
      <br />
      <br />
      <div class="row-fluid">
        <left-side
          :categories="categories"
          :subcategories="subcategories"
          @changeSubCategories="changeSubCategories"
          @changeEmployees="changeEmployees"
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
import { computed } from "vue";
import { useSubCategoryStore } from "@/stores/subcategory";

export default {
  name: "HomeView",
  components: {
    RightSide,
    LeftSide,
    MainFooter,
  },
  setup: function () {
    const categoryStore = useCategoryStore();
    const subCategoryStore = useSubCategoryStore();
    const employeeStore = useEmployeeStore();
    const categories = computed(() => categoryStore.category);
    const subcategories = computed(() => subCategoryStore.subcategory);
    const employees = computed(() => employeeStore.employee);
    const changeSubCategories = (value) => {
      subCategoryStore.fetchSubCategory(value);
    };
    const changeEmployees = (value) => {
      employeeStore.fetchEmployee(value);
    };
    const removeEmployee = (value) => {
      employeeStore.removeEmployee(value);
    };
    return {
      categories,
      subcategories,
      employees,
      changeSubCategories,
      changeEmployees,
      removeEmployee,
    };
  },
};
</script>

<style scoped></style>
