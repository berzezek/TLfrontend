<template>
  <div
    @click="fetchDetails(department.id)"
    @mouseover="showOptions = true"
    @mouseout="showOptions = false"
    :class="{ 'department-options-hover': showOptions }"
  >
    <span>{{ department.name }}</span>
  </div>
  <hr />
</template>

<script>
export default {
  name: "DepartmentOption",
  props: {
    department: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showOptions: false,
    };
  },
  methods: {
    fetchDetails(id) {
      this.$emit("fetchDetails", id);
    },
  },
};
</script>

<style scoped>
.department-options-hover {
  cursor: pointer;
  transform: matrix(1.05, 0, 0, 1, 2, 2);
  transition: all 0.5s ease-in-out;
}
</style>
