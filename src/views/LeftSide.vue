<template>
  <div>
    <base-departments :departments="departments" @levelUp="levelUp" />
  </div>
</template>

<script>
import BaseDepartments from "@/components/department/BaseDepartaments.vue";
export default {
  name: "LeftSide",
  components: { BaseDepartments },
  props: {
    departments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    levelUp() {
      this.$emit("levelUp");
    },
  },
};
</script>

<style scoped></style>
