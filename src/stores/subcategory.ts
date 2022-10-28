import { onMounted, ref } from "vue";
import { defineStore } from "pinia";

export const useSubCategoryStore = defineStore("subcategory", () => {
  const subcategory = ref([]),
    fetchSubCategory = async (id: string) => {
      const response = await fetch(
        `http://localhost:8000/api/v1/category/${id}/`
      );
      subcategory.value = await response.json();
    };

  return { subcategory, fetchSubCategory };
});
