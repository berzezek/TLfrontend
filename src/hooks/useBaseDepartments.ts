import { computed, onMounted } from "vue";

import type {
  IEmployeeStore,
  IDepartmentStore,
  IEmployees,
  IDepartments,
  IDepartment,
  // @ts-ignore
} from "@/types";

export const useBaseDepartments = (
  useEmployeeStore: IEmployeeStore,
  useDepartmentStore: IDepartmentStore
) => {
  const employeeStore = useEmployeeStore(),
    employees: IEmployees = computed(() => employeeStore.employees),
    departmentStore = useDepartmentStore(),
    department: IDepartment = computed(() => departmentStore.department),
    departments: IDepartments = computed(() => departmentStore.departments),
    count = computed(() => employeeStore.count),
    fetchParentDepartment = (value: string | null): void => {
      departmentStore.fetchDepartment(value);
      departmentStore.fetchDepartments(value);
      employeeStore.fetchEmployees(value);
    },
    levelUp = (): void => {
      employeeStore.resetEmployees();
      fetchParentDepartment(department.value.head_office);
    };
  onMounted(() => {
    departmentStore.fetchDepartments();
  });
  return {
    employees,
    department,
    departments,
    levelUp,
    count,
  };
};
