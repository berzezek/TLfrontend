import { ref } from "vue";
import { defineStore } from "pinia";

interface IDepartment {
  id: number;
  name: string;
  head_office: number | null;
}

interface IUseDepartmentStore {
  department: Object;
  departments: Object[];
  fetchDepartment: (id: string) => Promise<void>;
  fetchDepartments: (id: string) => Promise<void>;
  // removeDepartment: (id: string) => Promise<void>;
}

export const useDepartmentStore = defineStore(
  "department",
  (): IUseDepartmentStore => {
    const department = ref({} as IDepartment),
      fetchDepartment = async (id: string) => {
        id = id || "1";
        const response = await fetch(
          `http://localhost:8000/api/v1/department/${id}/`
        );
        department.value = await response.json();
      },
      departments = ref([] as Array<IDepartment>),
      fetchDepartments = async (id: string | undefined) => {
        id = id || "1";
        const response = await fetch(
          `http://localhost:8000/api/v1/department-list/${id}/`
        );
        departments.value = await response.json();
      };
    return {
      department,
      fetchDepartment,
      // @ts-ignore
      departments,
      fetchDepartments,
    };
  }
);
