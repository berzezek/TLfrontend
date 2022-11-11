import type { PropType } from "vue";

export interface IDepartment {
  id: string;
  name: string;
  head_office: string | null;
}
export interface IEmployee {
  id: number;
  name: string;
  date_of_issue: string;
  salary: number;
  department: string;
}
export interface IDepartmentStore {
  fetchDepartments: (value: string) => Promise<void>;
  fetchDepartment: (value: string) => Promise<void>;
  department: IDepartment;
  departments: Array<IDepartment>;
}
export interface IEmployeeStore {
  fetchEmployees: (value: string) => Promise<void>;
  employees: Array<IEmployee>;
}

export default {
  props: {
    department: {
      type: Object as PropType<IDepartment>,
      required: true,
    },
    departments: {
      type: Array as PropType<Array<IDepartment>>,
      required: true,
    },
    employee: {
      type: Object as PropType<IEmployee>,
      required: true,
    },
    employees: {
      type: Array as PropType<Array<IEmployee>>,
      required: true,
    },
    departmentStore: {
      type: Object as PropType<IDepartmentStore>,
      required: true,
    },
    employeeStore: {
      type: Object as PropType<IEmployeeStore>,
      required: true,
    },
  },
};
