export interface IDepartment {
  id: number;
  name: string;
  head_office: number | null;
}

export interface IUseDepartmentStore {
  department: Object;
  departments: Object[];
  fetchDepartment: (id: string) => Promise<void>;
  fetchDepartments: (id: string) => Promise<void>;
  // removeDepartment: (id: string) => Promise<void>;
}