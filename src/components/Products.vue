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
      <p>Name: {{ product.name }}</p>
      <p>Description: {{ product.description }}</p>
    </div>
  </div>
</template>

<style scoped>

.productsInfo {
  display: grid;
  gap: 100px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.card {
  border: 1px dashed black;
  padding: 10px;
}
</style>