<template>
  <div class="padd">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<style>
.padd {
  margin-top: 57px;
}
</style>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>