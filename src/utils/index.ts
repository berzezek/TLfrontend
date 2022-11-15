export interface IDepartment {
  id: string;
  name: string;
  head_office: string | null;
}
export interface IDepartments {
  departments: IDepartment[];
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
  results: IEmployee[];
}
export interface IDepartmentStore {
  fetchDepartments: (value: string) => Promise<void>;
  fetchDepartment: (value: string) => Promise<void>;
  department: IDepartment;
  departments: Array<IDepartment>;
}
export interface IEmployeeStore {
  fetchEmployees: (value: string) => Promise<void>;
  resetEmployees: () => void;
  employees: Array<IEmployee>;
}
