<template>
  <nav>
    <router-link to="/">Главная | </router-link>
    <router-link to="/login" v-if="!this.$store.getters.isAuthenticated">Авторизация | </router-link>
    <router-link to="/signup" v-if="!this.$store.getters.isAuthenticated">Регистрация | </router-link>
    <router-link to="/cart" v-if="this.$store.getters.isAuthenticated">Корзина | </router-link>
    <router-link to="/order" v-if="this.$store.getters.isAuthenticated">Оформленные заказы | </router-link>
    <router-link to="/logout" v-if="this.$store.getters.isAuthenticated">Выход</router-link>
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
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
import store from "@/store";
</script>