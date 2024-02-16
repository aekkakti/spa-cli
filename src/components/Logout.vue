<script>
import store from "@/store";
import LOGOUT_REQUEST from "@/store/index.js"
export default {
  methods: {
    logout() {
      this.$store
          .dispatch('LOGOUT_REQUEST')
          .then(() => this.$router.push("/"));
    },
  },
};
</script>

<template>
  <h2>Вы действительно хотите выйти из аккаунта?</h2>
  <button @click="logout">Выйти</button>
</template>

<style scoped>

button {
  background-color: #f54b4b;
  border: 1px solid black;
  border-radius: 5px;
  transition: .9s;
  color: white;
  width: 300px;
  font-size: 20px;
}

button:hover {
  background-color: #ab2424;
  color: white;
  cursor: pointer;
}

</style>