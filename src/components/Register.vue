<script>
import REGISTER_REQUEST from "@/store/index.js";

export default {
  data() {
    return {
      fio: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const User = {
        fio: this.fio,
        email: this.email,
        password: this.password
      };

      this.$store
          .dispatch('REGISTER_REQUEST', User)
          .then(() => this.$router.push("/"));
    }
  }
}

</script>

<template>
  <form class="register" @submit.prevent="register">
    <h1>Регистрация</h1>
    <label>Фамилия Имя Отчество</label>
    <input type="text" required placeholder="Иванов Иван Иванович" v-model="fio"/><br>
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