<script setup>
import { RouterLink } from "vue-router";
import { useUsers } from "../stores/api/users.js";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useUsers();
store.getUser(route.params.id);
</script>

<template>
  <div class="usuario-container">
    <div class="flex flex-row items-center justify-between mb-4">
      <div class="w-1/4">
        <img
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
          alt="User Image"
          class="shadow rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>
      <div class="w-1/4">
        <h2 class="text-2xl font-bold">Nombre</h2>
      </div>
      <div class="w-1/2 text-right">
        <RouterLink
          :to="{ name: 'listaUsuarios' }"
          class="text-blue-500 hover:underline"
        >
          Regresar
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-row">
      <h2 class="text-2xl font-bold mb-4">Datos Usuario</h2>
    </div>
  </div>
</template>

<style lang="scss">
.usuario-container {
  @apply container mx-auto;
}

/* Image Styles */
.usuario-container img {
  width: 100px; /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
}

/* Name Styles */
.usuario-container h2 {
  color: #333; /* Adjust the color as needed */
}

/* "Regresar" Link Styles */
.usuario-container a {
  color: #3182ce; /* Adjust the color as needed */
}

.usuario-container a:hover {
  text-decoration: underline;
}

/* Additional Styles for "Datos Usuario" */
.usuario-container .flex-row h2 {
  color: #333; /* Adjust the color as needed */
}
</style>
