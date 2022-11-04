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

<script lang="ts">
interface IDepartment {
  id: number;
  name: string;
}
export default {
  name: "DepartmentOption",
  props: {
    department: {
      type: Object as () => IDepartment,
      required: true,
    },
  },
  data() {
    return {
      showOptions: false,
    };
  },
  methods: {
    fetchDetails(id: number) {
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
