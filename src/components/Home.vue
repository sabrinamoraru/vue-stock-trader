<template>
  <div class="homepage">
    <h1 class="trade">Trade or View your Portfolio</h1>
    <h6 class="save-data">You may Save & Load your Data</h6>
    <h6 class="end-day">Click on 'End Day' to begin a New Day</h6>
    <hr class="line">
    <p class="funds">Your Funds: {{ funds | currency }}</p>
    <img src="../assets/d.jpg" class="responsive" width="100%" height="auto">
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
body {
  padding: 35px;
  background: #1f2a33;
  color: #fff;
  font-family: "Roboto", sans-serif;
}

.trade {
  color: #fff;
}

.save-data {
  font-size: 20px;
  color: #777e83;
}

.end-day {
  font-size: 20px;
  color: #777e83;
}

.funds {
  font-size: 18px;
  color: #2769b0;
}

hr.line {
  border: 0.5px solid hsl(194, 26%, 42%);
}
</style>