<script>
import {mapGetters} from "vuex";
import {addOrderRequest, deleteProductRequest} from "@/utils/api";

export default {
  methods:
      {addOrderRequest, deleteProductRequest},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getCartUser']),
    userCart() {
      return this.getCartUser
    },
  },
  mounted() {
    this.$store
        .dispatch('SHOW_REQUEST')
  },
}
</script>

<template>
  <h2>Ваши товары в корзине:</h2>
  <div class="userProductsCart">
    <div class="card" v-for="product in userCart" :key="product.id">
      <p><b>Название:</b> {{ product.name }}</p>
      <p><b>Описание:</b> {{ product.description }}</p>
      <p><b>Цена: </b>{{ product.price }} ₽</p>
      <button class="deleteProduct" @click="deleteProductRequest(this.$store.token, product.id)" v-if="this.$store.getters.isAuthenticated">-</button>
    </div>
  </div><br>
  <button class="makeOrder" @click="addOrderRequest(this.$store.token)" v-if="this.$store.getters.isAuthenticated">Сделать заказ</button>
</template>

<style scoped>

.userProductsCart {
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(4, 1fr);
}

.card {
  border: 1px dashed black;
  padding: 30px;
}

.deleteProduct {
  background-color: #931a1a;
  color: white;
  border: none;
  border-radius: 5%;
  height: 50px;
  width: 50px;
  transition: 1s;
}

.deleteProduct:hover {
  background-color: red;
  cursor: pointer;
}

.makeOrder {
  background-color: #56b256;
  color: white;
  border: none;
  border-radius: 5%;
  height: 75px;
  width: 150px;
  transition: 1s;
}

.makeOrder:hover {
  background-color: #0c4f0c;
  cursor: pointer;
}

</style>