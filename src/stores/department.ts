import { ref } from "vue";
import { defineStore } from "pinia";
// @ts-ignore
import type { IDepartment, IDepartmentStore } from "@/utils";

export const useDepartmentStore = defineStore(
  "department",
  (): IDepartmentStore => {
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
      departments,
      fetchDepartments,
    };
  }
);
