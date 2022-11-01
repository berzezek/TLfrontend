import { ref } from "vue";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", () => {
  const category = ref([]),
    fetchCategory = async (id: string) => {
      id = id || "1";
      const response = await fetch(
        `http://localhost:8000/api/v1/category-list/${id}/`
      );
      category.value = await response.json();
    };
  return { category, fetchCategory };
});
