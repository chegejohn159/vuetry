<template>
    <div class="col-lg-4">
<div class="card border-success">
    <div class="card-header">
         <h3 class="card-title">
            {{stock.name}}
             <small> (Price: {{stock.price}})</small>
             </h3>

        </div>
    
  <div class="card-body ">
<div class="float-left">
<input type="number" class=" in form-control" placeholder="Quantity" v-model="quantity"
/>

</div>
<div class="float-md-right float-lg-right" >

<button class="bt btn btn-success"
@click="buy"
:disabled="quantity <=0 || Number.isInteger(quantity)"

>Buy</button>
</div>
  </div>
</div>
    </div>
</template>
<script>
export default {
    props: ["stock"],
    data(){
        return{
            quantity:0
        }
    },
    computed:{
console:() => console
    },
    methods: {
        buy(){
            const check={
                stockid: this.stock.id,
                stockprice:this.stock.price,
                quantity:this.quantity
            }
            //eslint-disable-next-line no-console
            // console.log(check);
            // this.quantity=0;
            this.$store.dispatch('buyStock', check);
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