<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["user"]);
const fullName = `${props.user.title} ${props.user.firstName} ${props.user.lastName}`;
console.log(props.user);
</script>

<template>
  <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card-user"
  >
    <div class="flex flex-col items-center pb-10">
      <img
        class="w-24 h-24 mb-3 rounded-full shadow-lg"
        v-bind:src="props.user.picture"
        alt="Bonnie image"
      />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {{ fullName }}
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">
        <p>{{ props.user?.id }}</p></span
      >
      <div class="flex mt-4 md:mt-6">
        <RouterLink
          :to="{ name: 'usuario', params: { id: props.user.id } }"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  background-color: #fff;
  width: fit-content;
}

.card-user {
  padding: 4%;
  margin: 5px;
}
</style>
