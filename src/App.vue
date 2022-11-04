<script setup lang="ts">
import MainHeader from "@/views/MainHeader.vue";
import MainFooter from "@/views/MainFooter.vue";

</script>

<template>
  <div>
    <main-header />
    <RouterView />
    <main-footer />
  </div>
</template>
