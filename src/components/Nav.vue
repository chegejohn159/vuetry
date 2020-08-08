<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <router-link to="/portifolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
        <router-link to="/stocks" tag="li"><a class="nav-link">Stocks</a></router-link>
        
    </ul>
    <ul class="nav navbar-nav justify-content-end">
        <li class="nav-item">
        <a class="nav-link">Funds: {{funds}}</a>
      </li>
</ul>
  </div>
</nav>
</template>
<script>
export default {
    computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
}
</script>