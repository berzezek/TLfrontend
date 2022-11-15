export interface IDepartment {
  id: string;
  name: string;
  head_office: string | null;
}
export interface IDepartments {
  departments: Array<IDepartment>;
}
export interface IEmployee {
  id: number;
  name: string;
  date_of_issue: string;
  salary: number;
  department: string;
}
export interface IEmployees {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<IEmployee>;
}
export interface IDepartmentStore {
  fetchDepartments: (value: string | null) => Promise<void>;
  fetchDepartment: (value: string | null) => Promise<void>;
  department: IDepartment;
  departments: Array<IDepartment>;
}
export interface IEmployeeStore {
  fetchEmployees: (value: string | null) => Promise<void>;
  resetEmployees: () => void;
  employees: Array<IEmployee>;
}
