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
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  transition: .9s;
}

button:hover {
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

</style>