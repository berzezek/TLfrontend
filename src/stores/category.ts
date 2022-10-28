import { onMounted, ref } from "vue";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", () => {
  const category = ref([]),
    fetchCategory = async () => {
      const response = await fetch("http://localhost:8000/api/v1/category/");
      category.value = await response.json();
    };
  onMounted(fetchCategory);

  return { category };
});
