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
import type { IDepartmentStore, IEmployeeStore } from "@/utils";

export default {
  name: "ChildDepartment",
  components: { DepartmentOption },
  setup() {
    const isHovering = ref(false),
      departmentStore: IDepartmentStore = useDepartmentStore(),
      employeeStore: IEmployeeStore = useEmployeeStore(),
      department = computed(() => departmentStore.department),
      departments = computed(() => departmentStore.departments),
      fetchDepartment = (value: string): void => {
        departmentStore.fetchDepartment(value);
        departmentStore.fetchDepartments(value);
        employeeStore.fetchEmployees(value);
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
