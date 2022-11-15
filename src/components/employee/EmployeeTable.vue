<template>
  <div>
    <div class="row-fluid" v-if="employees">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ФИО</th>
            <th scope="col">Дата</th>
            <th scope="col">Зарплата</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employees" :key="employee.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ employee.name }}</td>
            <td>{{ employee.date_of_issue }}</td>
            <td>{{ employee.salary }} руб.</td>
          </tr>
        </tbody>
      </table>
      <div class="observer" ref="observer"></div>
    </div>
    <div v-else class="block-in-center">
      <h2>В выбранной категории нет работников</h2>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import type { IEmployees } from "@/utils";
import { computed, onMounted, onUnmounted, ref } from "vue";
import {useEmployeeStore} from "@/stores/employee";

export default {
  name: "EmployeeTable",
  // props: {
  //   employees: {
  //     type: Array as IEmployees,
  //     required: true,
  //   },
  // },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const observer = ref<IntersectionObserver | null>(null),
      employeeStore = useEmployeeStore(),
      employees = computed(() => employeeStore.employees);

    onMounted(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            employeeStore.fetchEmployees(props.id);
            console.log("fetch");
          }
        });
      }, options);

      if (observer.value && observer.value.observe) {
        observer.value.observe(document.querySelector(".observer") as Element);
      }
    });

    return {
      employees,
    };
  },
};
</script>

<style scoped>
.observer {
  margin-top: 1000px;
  height: 30px;
  background-color: #5bb75b;
}
</style>
