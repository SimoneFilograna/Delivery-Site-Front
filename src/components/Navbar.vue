<script>
  export default {

  }
</script>

<template>
    <nav class="container-fluid d-flex align-items-center justify-content-between">
        <RouterLink :to="{name: 'home'}" class="text-decoration-none logo_text">DeliveBoo</RouterLink>

        <div class="d-flex gap-4">
        <a href="http://127.0.0.1:8000/login" class="text-decoration-none nav_link">Login</a>
        <a href="http://127.0.0.1:8000/register" class="text-decoration-none nav_link">Register</a>
        </div>
        
    </nav>
</template>

<style lang="scss" scoped>

  .searchContainer {
    display: flex;
    background-color: #f5f5f5;
    border: 1px solid #e8ebeb;
    border-radius: 4px;
    gap: 8px;
    padding: 8px 12px;
    width: 40vw;
    margin: 13px 0px;
  }

  .searchCustom{
    background-color: transparent;
    border: 0;
  
  }

  .searchIcon {
    color: #abadad;
  }

  input:focus-visible {
    outline: none;
    color: black;
  }

  .nav_link {
    color: black;
  }

  .logo_text {
    color: #00ccbc;
    font-weight: bold;
    font-size: 38px;
  }

  nav {
    padding: 0 64px;
    border-bottom: 1px solid #ebebeb;
  }
</style>