<template>
  <div class="span3">
    <div class="well sidebar-nav">
      <ul class="nav nav-list">
        <li class="nav-header">Отделы</li>
        <!--        <li class="active"><a href="#">Link</a></li>-->
        <li v-for="category in categories" :key="category.id">
          <div class="category-options">
            <div>
              <span
                @click="
                  changeCategories(category.id, category.subcategories.length)
                "
                >{{ category.name }}</span
              >
            </div>
            <div>
              <span
                class="badge badge-info ml-2"
                v-if="category.subcategories.length"
              >
                {{ category.subcategories.length }}
              </span>
              <span
                class="badge badge-success ml-2"
                @click="backCategories(category.category)"
              >
                back
              </span>
            </div>
          </div>
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
  },
  methods: {
    changeCategories(value, count = 0) {
      this.$emit("changeCategories", value);
    },
    changeEmployees(value) {
      this.$emit("changeEmployees", value);
    },
    backCategories(value) {
      this.$emit("backCategories", value);
    },
  },
};
</script>

<style scoped>
.category-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
