<template>
  <div class="well sidebar-nav">
    <ul class="nav nav-list">
      <li class="nav-header">{{ deparmentTitle }}</li>
      <!--        <li class="active"><a href="#">Link</a></li>-->
      <li v-for="deparment in departments" :key="deparment.id" @click="changeDepartment(deparment.id)" class="department">
        <span>{{ deparment.name }}</span> <span class="badge badge-info" @click="removeDepartment(deparment.id)">Удалить</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DepartmentDetail",
  props: {
    deparmentTitle: {
      type: String,
      required: true,
    },
    departments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeDepartment(value) {
      this.$emit("changeDepartment", value);
    },
    removeDepartment(value) {
      this.$emit("removeDepartment", value);
    },
  },
}
</script>

<style scoped>
.department {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
</style>