<script setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useUsers } from "../stores/api/users.js";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useUsers();
store.getUser(route.params.id);
console.log(store.selectedUser);
const { fullName } = storeToRefs(store);
console.log(fullName);
</script>

<template>
  <div class="usuario-container">
    <div class="flex flex-row items-center justify-between mb-4">
      <div class="w-1/4">
        <img
          v-bind:src="store.selectedUser?.picture"
          alt="User Image"
          class="shadow rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>
      <div class="w-1/4">
        <h2 class="text-2xl font-bold">Full name: {{ fullName }}</h2>
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
      <h2 class="text-2xl font-bold mb-4">
        ID Usuario:
        {{ store.selectedUser?.id }}
      </h2>
    </div>
    <div>
      <div class="bg-white overflow-hidden shadow rounded-lg border">
        <div class="px-4 py-5 sm:px-6"></div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ fullName }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Gender</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ store.selectedUser?.gender }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ store.selectedUser?.email }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Phone number</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ store.selectedUser?.phone }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ store.selectedUser?.location }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
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
