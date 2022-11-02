<template>
  <div class="well sidebar-nav">
    <ul class="nav nav-list">
      <li class="nav-header">Головной отдел</li>
      <li>
        <div class="category-options">
          <div>
            <span>{{ category.name }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useCategoryStore } from "@/stores/category";
import { computed } from "vue";

export default {
  name: "ParentDepartment",
  setup: function () {
    const categoryStore = useCategoryStore();
    const category = computed(() => categoryStore.category);

    return {
      category,
    };
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
