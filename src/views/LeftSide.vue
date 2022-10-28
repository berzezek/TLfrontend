<template>
  <div class="span3">
    <div class="well sidebar-nav">
      <ul class="nav nav-list">
        <li class="nav-header">Отделы</li>
        <!--        <li class="active"><a href="#">Link</a></li>-->
        <li v-for="category in categories" :key="category.id" @click="changeSubCategories(category.id)">
          {{ category.name }}
        </li>
      </ul>
    </div>
    <div class="well sidebar-nav">
      <ul class="nav nav-list">
        <li class="nav-header">Подразделения</li>
        <!--        <li class="active"><a href="#">Link</a></li>-->
        <li v-for="subcategory in subcategories" :key="subcategory.id" @click="changeEmployees(subcategory.id)">
          {{ subcategory.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSide",
  props: {
    categories: {
      type: Array,
      required: true,
    },
    subcategories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeSubCategories(value) {
      this.$emit("changeSubCategories", value);
    },
    changeEmployees(value) {
      this.$emit("changeEmployees", value);
    },
  },
};
</script>

<style scoped></style>
