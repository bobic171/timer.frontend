<template>
  <div class="content-center flex flex-grow items-center justify-center">
    <div class="p-6 max-w-sm rounded-xl shadow-xl bg-white
                flex flex-shrink flex-col text-xl">
      <div class="items-center">
        <font-awesome-icon :icon="['fas', 'lemon']" size="3x" class="fill-current text-blue-900" />
      </div>
      <div class="flex mb-5 mt-5">
        <label for="username" class="sr-only">Username</label>
        <input id="username" placeholder="Username" class="p-2" type="text" />
      </div>
      <div class="flex mb-5">
        <label for="password" class="sr-only">Password</label>
        <input id="password" placeholder="Password" class="p-2" type="password" />
      </div>
      <button class="p-3 bg-blue-900 text-white rounded-xl" @click="login">Login!</button>
    </div>
  </div>
</template>

<script lang="ts">
import Actions from '@/store/actions';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  methods: {
    login() {
      this.$store.dispatch(Actions.LOGIN);
      console.log('logging in');
      this.$router.push({ path: 'dashboard' });
    },
  },
});
</script>
