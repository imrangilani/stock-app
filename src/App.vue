<template>
  <div class="container">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <app-header></app-header>
    <div class="col-xs-12">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue';
export default {
    components: {
      appHeader: Header
    }
}
</script>

<style>

</style>
