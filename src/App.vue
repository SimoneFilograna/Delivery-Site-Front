<script>
  import NavbarComponent from "../src/components/Navbar.vue";

  export default {
    components: {
      NavbarComponent
    }
  }
</script>

<template>
  <div class="wrapper">
    <NavbarComponent></NavbarComponent>

    <Router-view class="d-flex flex-column overflow-auto"></Router-view>
  </div>
</template>

<style lang="scss">
  @use "./styles/partials/variables";

  body{
    background-color: variables.$bg_color;
    color: variables.$gold_text;
  }
</style>
