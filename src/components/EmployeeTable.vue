<template>
  <div class="hero-unit">
    <p>В данном подразделении {{ employees.count }} служащих.</p>
  </div>
  <div class="row-fluid">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ФИО</th>
          <th scope="col">Дата</th>
          <th scope="col">Зарплата</th>
          <th scope="col">Уволить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees.results" :key="employee.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ employee.name }}</td>
          <td>{{ employee.date_of_issue }}</td>
          <td>{{ employee.salary }} руб.</td>
          <td @click="removeEmployee(employee.id)">-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "EmployeeTable",
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
