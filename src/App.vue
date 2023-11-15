<script setup>
import { RouterView } from "vue-router";
import LogoSVG from "./assets/logo.svg?component";
</script>

<template>
  <div class="container">
    <div class="flex flex-row header">
      <LogoSVG alt="Vite logo" class="logo" />
    </div>
    <div class="flex flex-row">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.header {
  line-height: 1.5;
  max-height: 10vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
