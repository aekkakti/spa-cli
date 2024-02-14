<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      products: []
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    products() {
      return this.getProducts
    }
  },
  mounted() {
    this.$store
        .dispatch('PRODUCTS_REQUEST')
  },
}
</script>

<template>
  <h2>Все доступные продукты на данный момент: </h2><br>
  <div class="productsInfo">
    <div class="card" v-for="product in products" :key="product.id">
      <p><b>Name:</b> {{ product.name }}</p>
      <p><b>Description:</b> {{ product.description }}</p>
      <p><b>Price: </b>{{product.price}} ₽</p>
      <button class="addProduct" v-if="this.$store.getters.isAuthenticated">+</button>
    </div>
  </div>
</template>

<style scoped>

.productsInfo {
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(4, 1fr);
}

.card {
  border: 1px dashed black;
  padding: 30px;
}

.addProduct {
  background-color: #56b256;
  color: white;
  border: none;
  border-radius: 5%;
  height: 50px;
  width: 50px;
  transition: 1s;
}

.addProduct:hover {
  background-color: #0c4f0c;
  cursor: pointer;
}
</style>