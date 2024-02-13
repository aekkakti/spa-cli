<script>
export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.$store
        .dispatch('PRODUCTS_REQUEST')
  this.products = this.$store.getters.GET_PRODUCTS
  },
}
</script>

<template>
  <h2>Все доступные продукты на данный момент: </h2>
    <div v-for="product in products" :key="product.id">
      <p>Name: {{ product.name }}</p>
      <p>Description: {{ product.description }}</p>
    </div>
</template>

<style scoped>

</style>