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
    <h2>Регистрация</h2>
    <label>Фамилия Имя Отчество</label><br>
    <input type="text" required placeholder="Иванов Иван Иванович" v-model="fio"/><br>
    <label>Адрес электронной почты</label><br>
    <input type="email" required placeholder="user123@gmail.com" v-model="email"/><br>
    <label>Пароль</label><br>
    <input type="password" required v-model="password"/><br><br>
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

.register input{
  border: 1px solid black;
  border-radius: 5px;
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