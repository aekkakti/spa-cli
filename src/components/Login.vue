<script>
import store from "@/store";
import AUTH_REQUEST from "@/store/index.js"
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const userData = {
        email: this.email,
        password: this.password,
      };

      this.$store
          .dispatch('AUTH_REQUEST', userData)
          .then(() => this.$router.push("/"));
    },
  },
};
</script>

<template>
  <form class="login" @submit.prevent="login">
    <h2>Авторизация</h2>
    <label>Почта пользователя</label><br>
    <input type="email" required v-model="email" /><br>
    <label>Пароль</label><br>
    <input type="password" required v-model="password" /> <br><br>
    <button type="submit">Войти</button>
  </form>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100px;
  padding: 10px;
  margin: 0 auto;
}
.login input {
  border: 1px solid black;
  border-radius: 5px;
  height: 60px;
  padding-left: 5px;
  font-size: 16px
}

button {
  background-color: #42b983;
  border: 1px solid black;
  border-radius: 5px;
  transition: .9s;
  color: white;
  font-size: 20px;
}

button:hover {
  background-color: #56b256;
  color: white;
  cursor: pointer;
}

label {
  font-size: 20px;
}

</style>