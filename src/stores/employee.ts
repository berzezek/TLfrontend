import { ref } from "vue";
import { defineStore } from "pinia";

export const useEmployeeStore = defineStore("employee", () => {
  const employee = ref([]),
    fetchEmployee = async (id: string) => {
      const response = await fetch(
        `http://localhost:8000/api/v1/category/${id}/employee/`
      );
      employee.value = await response.json();
    },
    removeEmployee = async (id: string) => {
      await fetch(`http://localhost:8000/api/v1/employee/${id}/`, {
        method: "DELETE",
      });
    };

  return { employee, fetchEmployee, removeEmployee };
});
