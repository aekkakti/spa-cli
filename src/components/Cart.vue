<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      userCart: []
    }
  },
  ...mapGetters(['getCartUser']),
  userCart() {
    return this.getCartUser
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
    <div class="card" v-for="product in userCart">
      <p><b>Name:</b> {{ product.name }}</p>
      <p><b>Description:</b> {{ product.description }}</p>
      <p><b>Price: </b>{{product.price}} ₽</p>
    </div>
  </div>
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

</style>