<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getOrderUser']),
    userOrder() {
      return this.getOrderUser
    },
  },
  mounted() {
    this.$store
        .dispatch('SHOW_ORDER_REQUEST')
  },
}
</script>

<template>
  <h2>Ваши заказы:</h2>
  <div class="userOrders">
    <div class="card" v-for="product in userOrder" :key="product.id">
      <p><b>ID заказа:</b> {{ product.id }}</p>
      <p><b>ID товаров:</b> {{ product.products }}</p>
      <p><b>Цена: </b>{{ product.order_price }} ₽</p>
    </div>
  </div><br>
</template>

<style scoped>

.userOrders {
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(4, 1fr);
}

.card {
  border: 1px dashed black;
  padding: 30px;
}

</style>