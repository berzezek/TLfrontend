<template>
  <div>
    <div class="text-center" @click="backToLevelUp">
      <button class="btn btn-primary">Перейти на уровень выше</button>
    </div>
    <div class="well sidebar-nav">
      <ul class="nav nav-list">
        <li class="nav-header">Подразделения</li>
        <li v-for="category in categories" :key="category.id">
          <category-options :category="category" />
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { useCategoryStore } from "@/stores/category";
import { computed, ref } from "vue";
import CategoryOptions from "@/components/CategoryOptions.vue";

export default {
  name: "ChildDepartment",
  components: {CategoryOptions},
  setup: function () {
    const isHovering = ref(false);
    const categoryStore = useCategoryStore();
    const categories = computed(() => categoryStore.categories);
    const backToLevelUp = () => {
      console.log("backToLevelUp");
    };
    return {
      categories,
      backToLevelUp,
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
