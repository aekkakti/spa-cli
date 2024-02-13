<script>
import AUTH_REQUEST from "@/store";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const User = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      this.$store
          .dispatch(AUTH_REQUEST, User)
          .then(() => this.$router.push("/login"));
    }
  }
}

</script>

<template>
  <form class="register" @submit.prevent="register">
    <h1>Регистрация</h1>
    <label>Имя пользователя</label>
    <input type="text" required placeholder="user123" v-model="username"/><br>
    <label>Адрес электронной почты</label>
    <input type="email" required placeholder="user123@gmail.com" v-model="email"/><br>
    <label>Пароль</label>
    <input type="password" required v-model="password"/><br>
    <button type="submit">Зарегистрироваться</button>
  </form>
</template>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
}
.register input,
button {
  border: 1px solid black;
  border-radius: 5px;
}

</style>