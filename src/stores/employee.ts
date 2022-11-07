import { ref } from "vue";
import { defineStore } from "pinia";
// @ts-ignore
import type { IEmployees } from "@/utils";

export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref([] as IEmployees),
    employeeList = ref([] as IEmployees),
    limit = ref(30),
    offset = ref(0),
    page = ref(1),
    fetchEmployees = async (id: string) => {
      const response = await fetch(
        `http://localhost:8000/api/v1/department/${id}/employee/?limit=${limit.value}&offset=${offset.value}&page=${page.value}`
      );
      employees.value = await response.json();
      employeeList.value = [...employeeList.value, ...employees.value.results];
      page.value++;
      offset.value += 30;
    },
    removeEmployee = async (id: string) => {
      await fetch(`http://localhost:8000/api/v1/employee/${id}/`, {
        method: "DELETE",
      });
    };

  return { employees, employeeList, fetchEmployees, removeEmployee };
});
