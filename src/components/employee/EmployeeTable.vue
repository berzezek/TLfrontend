<template>
  <div>
    <div v-if="employees.count > 0">
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
            <tr
              v-for="(employee, index) in employees.results"
              :key="employee.id"
            >
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ employee.name }}</td>
              <td>{{ employee.date_of_issue }}</td>
              <td>{{ employee.salary }} руб.</td>
              <td @click="removeEmployee(employee.id)">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else-if="employees.count === 0">
      <div class="hero-unit">
        <p>В данном отделе нет служащих.</p>
      </div>
    </div>
    <div v-else class="block-in-center">
      <div>
        <h2>Выберите пожалуйста категорию!</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeTable",
  props: {
    employees: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.block-in-center {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
