<template>
<div>
    <div  class="row container-fluid" >
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" ></Stock>
    </div>
    
</div>
</template>
<script>
import stock from './stock.vue'
export default {
    computed:{
stocks(){
return this.$store.getters.stocks;
}
    },
    components:{
        Stock :stock
    }
    
}
</script>
<style scoped>

</style>