import { ref } from "vue";
import { defineStore } from "pinia";

type TypeDepartment = {
  id: number;
  name: string;
  department: number;
};

export const useDepartmentStore = defineStore("department", () => {
  const department = ref({} as TypeDepartment),
    fetchDepartment = async (id: string) => {
      id = id || "1";
      const response = await fetch(
        `http://localhost:8000/api/v1/department/${id}/`
      );
      department.value = await response.json();
    },
    departments = ref([] as Array<TypeDepartment>),
    fetchDepartments = async (id: string) => {
      id = id || "1";
      const response = await fetch(
        `http://localhost:8000/api/v1/department-list/${id}/`
      );
      departments.value = await response.json();
    };
  return {
    department,
    fetchDepartment,
    departments,
    fetchDepartments,
  };
});
