<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/login">Авторизация</router-link> |
    <router-link to="/signup">Регистрация</router-link> |
    <router-link to="/products">Список товаров</router-link> |
    <router-link to="/cart">Корзина</router-link> |
    <router-link to="/order">Оформленные заказы</router-link> |
    <router-link to="/logout">Выход</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>