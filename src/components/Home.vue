<template>
  <div class="home">
  
   <p> Your Funds: {{funds}}</p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
 computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
}
</script>
