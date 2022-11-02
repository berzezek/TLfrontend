import { ref } from "vue";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", () => {
  const category = ref({}),
    categories = ref([]),
    fetchCategories = async (id: string) => {
      id = id || "1";
      const response = await fetch(
        `http://localhost:8000/api/v1/category-list/${id}/`
      );
      categories.value = await response.json();
    },
    fetchCategory = async (id: string) => {
      id = id || "1";
      const response = await fetch(
        `http://localhost:8000/api/v1/category/${id}/`
      );
      category.value = await response.json();
    };
  return {
    category,
    fetchCategory,
    categories,
    fetchCategories,
  };
});
