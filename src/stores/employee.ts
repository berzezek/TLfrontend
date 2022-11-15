import { ref } from "vue";
import { defineStore } from "pinia";
// @ts-ignore
import type { IEmployees } from "@/utils";

export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref([] as IEmployees),
    employeesList = ref([] as IEmployees),
    count = ref(0 as number),
    limit = ref(2 as number),
    offset = ref(2 as number),
    page = ref(1 as number),
    fetchEmployees = async (id: string) => {
      if (id) {
        const response = await fetch(
          `http://localhost:8000/api/v1/department/${id}/employee/?limit=${limit.value}&offset=${offset.value}&page=${page.value}`
          // `http://localhost:8000/api/v1/department/${id}/employee/`
        );
        employeesList.value = await response.json();
        count.value = employeesList.value.count;
        employees.value = [...employees.value, ...employeesList.value.results];
        page.value++;
        offset.value += limit.value;
        // offset.value += 30;
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
      limit.value = 2;
      offset.value = 0;
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
