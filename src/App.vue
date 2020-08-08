<template>
  <div id="app">
    <Navbar></Navbar>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>

   
  </div>
</template>
<script>
import Nav from './components/Nav.vue'
export default {
  components:{
    Navbar:Nav
  },
  created(){
    this.$store.dispatch('initStocks')
    
  }
  
}
</script>

<style>

body {
  padding: 50px;
}
 .slide-enter-active {
        animation: slide-in 500ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 500ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }

</style>
