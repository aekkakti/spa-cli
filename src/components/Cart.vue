<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      userCart: []
    }
  },
  ...mapGetters(['getUserProducts']),
  userCart() {
    return this.getUserProducts
  },
  mounted() {
    this.$store
        .dispatch('ADD_REQUEST')
  },
}
</script>

<template>
  <h2>Ваши товары в корзине:</h2>
  <div class="userProductsCart">
    <div v-for="product in userCart" >
      <p><b>Name:</b> {{ product.name }}</p>
      <p><b>Description:</b> {{ product.description }}</p>
      <p><b>Price: </b>{{product.price}} ₽</p>
    </div>
  </div>
</template>

<style scoped>

</style>