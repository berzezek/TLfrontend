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
            <li class="active"><router-link to="/">Приложение</router-link></li>
            <li><router-link to="/about">О приложении</router-link></li>
            <li><router-link to="/contacts">Контакты</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped></style>
