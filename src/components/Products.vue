<script>
export default {
  data() {
    return {
      products: []
    }
  },
    methods: {
      showProducts() {
        const Product = {
          products: this.products,
        }

        this.$store
            .dispatch()
      }
    }
}
</script>

<template>
  <h2>Все доступные продукты на данный момент: </h2>

</template>

<style scoped>

</style>