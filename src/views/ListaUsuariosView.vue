<script setup>
import CardUser from "@/components/CardUser.vue";
import { useUsers } from "../stores/api/users.js";
const store = useUsers();
let filteredUsers = [];
const handleChange = (event) => {
  console.log(event);
  filteredUsers = store.filteredUsers(event.data);
  console.log(filteredUsers);
};
store.getUsers();
</script>
<template>
  <div class="listaUsuario-container">
    <div class="flex flex-row">
      <div class="basis-1/2">
        <div class="mb-3">
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              @input="handleChange"
              v-model="searchText"
              type="search"
              class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />

            <!--Search button-->
            <button
              class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-items-center"
    >
      <CardUser
        v-for="user in filteredUsers.length ? filteredUsers : store.users"
        :key="user.id"
        :user="user"
      ></CardUser>
    </div>
    <div class="flex flex-row"></div>
  </div>
</template>

<style lang="scss">
.listaUsuario-container {
  @apply container mx-auto;
}
</style>
