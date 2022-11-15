import { ref } from "vue";
import { defineStore } from "pinia";
// @ts-ignore
import type { IEmployees } from "@/types";

export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref([] as IEmployees),
    employeesList = ref([] as IEmployees),
    count = ref(0 as number),
    page = ref(1 as number),
    fetchEmployees = async (id: string) => {
      if (id) {
        const response = await fetch(
          `http://localhost:8000/api/v1/department/${id}/employee/?page=${page.value}`
        );
        employeesList.value = await response.json();
        count.value = employeesList.value.count;
        employees.value = [...employees.value, ...employeesList.value.results];
        page.value++;
      } else {
        employees.value = [];
      }
    },
    removeEmployee = async (id: string) => {
      await fetch(`http://localhost:8000/api/v1/employee/${id}/`, {
        method: "DELETE",
      });
    },
    resetEmployees = () => {
      employees.value = [];
      employeesList.value = [];
      page.value = 1;
    };

  return {
    employees,
    employeesList,
    fetchEmployees,
    removeEmployee,
    count,
    resetEmployees,
  };
});
