<template>
  <div>
    <div class="well sidebar-nav">
      <ul class="nav nav-list" v-if="departments.length">
        <li class="nav-header">Подразделения</li>
        <li v-for="department in departments" :key="department.id">
          <department-option
            :department="department"
            @fetchDetails="fetchDepartment"
          />
        </li>
      </ul>
      <ul class="nav nav-list" v-else>
        <li class="nav-header">Подразделений нет</li>
      </ul>
      <div class="text-center" v-if="department.head_office !== null" v-cloak>
        <button
          class="btn btn-primary"
          @click="fetchDepartment(department.head_office)"
        >
          На уровень выше
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useDepartmentStore } from "@/stores/department";
import { useEmployeeStore } from "@/stores/employee";
import DepartmentOption from "@/components/department/DepartmentOption.vue";
import { computed, ref } from "vue";

interface IDepartment {
  id: string;
  name: string;
  head_office: string;
}
interface IDepartmentStore {
  fetchDepartments: (value: string) => void;
  fetchDepartment: (value: string) => void;
  department: IDepartment;
  departments: Array<IDepartment>;
}
interface IEmployeeStore {
  fetchEmployees: (value: string) => void;
  employees: Array<Object>;
}
export default {
  name: "ChildDepartment",
  components: { DepartmentOption },
  setup: function () {
    const isHovering = ref(false);
    const departmentStore: IDepartmentStore = useDepartmentStore();
    const departments = computed(() => departmentStore.departments);
    const department = computed(() => departmentStore.department);
    const employeeStore: IEmployeeStore = useEmployeeStore();
    const fetchDepartment = async (value: string) => {
      await departmentStore.fetchDepartment(value);
      await departmentStore.fetchDepartments(value);
      await employeeStore.fetchEmployees(value);
    };
    return {
      departments,
      department,
      isHovering,
      fetchDepartment,
    };
  },
};
</script>

<style scoped>
.text-center {
  padding: 20px;
  text-align: center;
}
[v-cloak] {
  display: none;
}
</style>
