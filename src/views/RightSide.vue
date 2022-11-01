<template>
  <div class="span9">
    <div class="hero-unit">
      <p>
        В данном подразделении {{ employees.count }} служащих. Можно изменить
        данные, нанять нового сотрудника и даже уволить.
      </p>
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
            <td>{{ employee.date_of_receipt }}</td>
            <td>{{ employee.salary }} руб.</td>
            <td @click="removeEmployee(employee.id)">-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--    <main-pagination-->
    <!--      :pages="employees.count / 100"-->
    <!--      :currentPage="1"-->
    <!--      @changePage="changePage"-->
    <!--    />-->
  </div>
</template>

<script>
// import MainPagination from "@/components/MainPagination.vue";
export default {
  name: "RightSide",
  // components: { MainPagination },
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeEmployee(value) {
      this.$emit("removeEmployee", value);
    },
    changePage(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped></style>
