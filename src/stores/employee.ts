import { ref } from "vue";
import { defineStore } from "pinia";
interface IEmployee {
  id: number;
  name: string;
  salary: number;
  date_of_issue: string;
  department: number;
}

export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref([] as Array<IEmployee>),
    fetchEmployees = async (id: string) => {
      const response = await fetch(
        `http://localhost:8000/api/v1/department/${id}/employee/`
      );
      employees.value = await response.json();
    },
    removeEmployee = async (id: string) => {
      await fetch(`http://localhost:8000/api/v1/employee/${id}/`, {
        method: "DELETE",
      });
    };

  return { employees, fetchEmployees, removeEmployee };
});
