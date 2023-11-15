<script>
  import NavbarComponent from "../src/components/Navbar.vue";
  import TheFooter from "./components/TheFooter.vue"

  export default {
    components: {
      NavbarComponent,
      TheFooter
    }
  }
</script>

<template>
  <div class="wrapper">
    <NavbarComponent></NavbarComponent>
    
    <Router-view></Router-view>

    <TheFooter></TheFooter>
  </div>
</template>

<style lang="scss">
  @use "./styles/partials/variables";

  body{
    background-color: variables.$bg_color;
    color: variables.$gold_text;
  }
</style>
