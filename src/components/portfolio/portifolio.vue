<template>
<div class="row container-fluid">
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
</div>
</template>

<script>
import stock from './stock.vue';
import {mapGetters} from 'vuex';
export default {

computed: mapGetters ({
stocks: 'stockPortfolio'
}
    
),
    components: {
            stock: stock
        }
    
}
</script>