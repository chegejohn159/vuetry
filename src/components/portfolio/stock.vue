<template>

    <div class="col-lg-4">
<div class="card border-success">
    <div class="card-header">
         <h3 class="card-title">
            {{stock.name}}
             <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
             </h3>

        </div>
    
  <div class="card-body ">
<div class="float-left">
<input type="number" class=" in form-control" placeholder="Quantity" v-model="quantity"
/>

</div>
<div class="float-md-right float-lg-right" >

<button class="bt btn btn-success"
@click="sell"
:disabled="quantity <=0 || Number.isInteger(quantity)"

>Sell</button>
</div>
  </div>
</div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    
    props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },

            methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sell() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
}
</script>

<style scoped>
.card{
    margin-bottom: 20px;
}
.bt{
   margin: 10px;
}
.in{
    margin-top: 10px;
}
</style>