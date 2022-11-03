<template>
  <div>
    <div class="text-center">
      <button class="btn btn-primary" @click="fetchDepartment(department.head_office)">
        На уровень выше
      </button>
    </div>
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
    </div>
  </div>
</template>

<script>
import { useDepartmentStore } from "@/stores/department";
import { useEmployeeStore } from "@/stores/employee";
import DepartmentOption from "@/components/department/DepartmentOption.vue";
import { computed, ref } from "vue";

export default {
  name: "ChildDepartment",
  components: { DepartmentOption },
  setup: function () {
    const isHovering = ref(false);
    const departmentStore = useDepartmentStore();
    const departments = computed(() => departmentStore.departments);
    const department = computed(() => departmentStore.department);
    const employeeStore = useEmployeeStore();
    const fetchDepartment = async (value) => {
      await departmentStore.fetchDepartment(value);
      await departmentStore.fetchDepartments(value);
      await employeeStore.fetchEmployees(value);
    };
    return {
      departments,
      department,
      fetchDepartment,
      isHovering,
    };
  },
};
</script>

<style scoped>
.text-center {
  padding: 20px;
  text-align: center;
}
</style>
