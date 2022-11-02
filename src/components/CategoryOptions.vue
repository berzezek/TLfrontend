<template>
  <div
    @mouseover="showOptions = true"
    @mouseout="showOptions = false"
    :class="{ 'category-options-hover': showOptions }"
  >
    <div>
      <span>{{ category.name }}</span>
    </div>
  </div>
  <hr />
</template>

<script>
export default {
  name: "CategoryOptions",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showOptions: false,
    };
  },
};
</script>

<style scoped>
.category-options-hover {
  cursor: pointer;
  transform: matrix(1.05, 0, 0, 1, 2, 2);
  transition: all 0.5s ease-in-out;
}
</style>
