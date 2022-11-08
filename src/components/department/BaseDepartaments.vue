<template>
  <div>
    <div class="well sidebar-nav">
      <ul class="nav nav-list">
        <li class="nav-header">Подразделения</li>
        <li v-for="department in departments" :key="department.id">
          <department-option
            :department="department"
            @fetchDetails="fetchParentDepartment"
          />
        </li>
      </ul>
    </div>
    <div class="block-in-center">
      <button class="btn btn-primary" @click="levelUp">На уровень выше</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useDepartmentStore } from "@/stores/department";
import { useEmployeeStore } from "@/stores/employee";
import DepartmentOption from "@/components/department/DepartmentOption.vue";
import { computed, onMounted } from "vue";
import type { IDepartmentStore, IEmployeeStore } from "@/utils";

export default {
  name: "BaseDepartments",
  components: { DepartmentOption },
  setup: function () {
    let headOffice: string;
    const departmentStore: IDepartmentStore = useDepartmentStore(),
      employeeStore: IEmployeeStore = useEmployeeStore(),
      departments = computed(() => departmentStore.departments),
      fetchParentDepartment = (value: string | null): void => {
        departmentStore.fetchDepartment(value);
        departmentStore.fetchDepartments(value);
        employeeStore.fetchEmployees(value);
      },
      levelUp = (): void => {
        headOffice = departmentStore.department.head_office;
        fetchParentDepartment(headOffice);
        if (headOffice !== null) {
          employeeStore.fetchEmployees(headOffice);
        } else {
          employeeStore.employees = [];
        }
      };
    onMounted(() => {
      departmentStore.fetchDepartments();
    });
    return {
      departments,
      fetchParentDepartment,
      levelUp,
    };
  },
};
</script>

<style scoped></style>
