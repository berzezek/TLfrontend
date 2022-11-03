<template>
  <div class="span3">
    <parent-department />
    <child-department />
  </div>
</template>

<script>
import ParentDepartment from "@/components/department/ParentDepartment.vue";
import ChildDepartment from "@/components/department/ChildDepartment.vue";
export default {
  name: "LeftSide",
  components: { ParentDepartment, ChildDepartment },
};
</script>

<style scoped></style>
