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
    </div>
    <div v-else class="block-in-center">
      <h2>Выберите категорию</h2>
    </div>
  </div>
</template>

<script lang="ts">
import type { IEmployees } from "@/utils";

export default {
  name: "EmployeeTable",
  props: {
    employees: {
      type: Array as IEmployees,
      required: true,
    },
  },
};
</script>

<style scoped></style>
