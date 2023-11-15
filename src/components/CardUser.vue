<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["user"]);
const fullName = `${props.user.title} ${props.user.firstName} ${props.user.lastName}`;
</script>

<template>
  <div class="flex flex-wrap flex-col md:flex-row">
    <div class="user-card rounded-md shadow-md m-2">
      <div class="flex w-full m-4">
        <div class="flex items-center">
          <img
            class="user-avatar h-20 w-24 object-cover rounded-full"
            v-bind:src="props.user.picture"
            alt="User"
          />
          <div class="user-details flex flex-col ml-4">
            <h3 class="user-name font-bold text-lg text-tial-400">
              {{ fullName }}
            </h3>
          </div>
        </div>
        <div class="flex flex-1 flex-grow w-full items-center justify-end">
          <div class="user-link flex items-center mr-2">
            <RouterLink
              :to="{ name: 'usuario', params: { id: props.user.id } }"
              class="text-blue-tial-500 hover:underline"
            >
              <img class="image" src="../assets/play.png" alt="" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  background-color: #fff;
  width: fit-content;
}

.user-avatar {
  height: 5rem;
  width: 6rem;
}

.image {
  width: 20x;
  height: 20px;
}

.user-details {
  margin-left: 1rem;
}

.user-name {
  font-weight: bold;
  font-size: 1.25rem;
  color: #1a202c;
}

.user-link {
  margin-right: 0.5rem;
}

.user-link a {
  color: #3182ce;
  text-decoration: none;
}

.user-link a:hover {
  text-decoration: underline;
}
</style>
