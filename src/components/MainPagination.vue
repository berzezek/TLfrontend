<template>
  <div>
    <div v-for="page in pages" :key="page" class="my-pagination">
      <button @click="changePage(page)">{{ page }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPagination",
  props: {
    pages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(value) {
      this.$emit("changePage", value);
    },
  },
};
</script>

<style scoped></style>
