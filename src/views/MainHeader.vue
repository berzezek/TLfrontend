<template>
  <div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
      <div class="container-fluid">
        <a
          class="btn btn-navbar"
          data-toggle="collapse"
          data-target=".nav-collapse"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
        <a class="brand" href="#">TL GROUP</a>
        <div>
          <ul class="nav">
            <li v-for="item in menu" :key="item.id">
              <router-link :to="item.path">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainHeader",
  setup() {
    const menu = [
      {
        id: "1",
        title: "Приложение",
        path: "/",
      },
      {
        id: "2",
        title: "Open API",
        path: "/open-api",
      },
      {
        id: "3",
        title: "О приложении",
        path: "/about",
      },
      {
        id: "4",
        title: "Контакты",
        path: "/contacts",
      },
    ];
    return {
      menu,
    };
  },
});
</script>

<style scoped>
.navbar {
  top: 0;
  width: 100%;
  background-color: #f5f5f5;
  position: relative;
  margin-bottom: 50px;
}
</style>
