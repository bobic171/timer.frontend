<template>
  <div class="content-center flex flex-grow items-center justify-center pt-50px">
    <section class="bg-white w-1/4 rounded-xl p-5">
      <h1 class="text-blue-900 text-2xl text-left mb-4">Add Client</h1>
      <div class="flex flex-col justify-start mb-4">
        <label for="name" class="text-left mb-2">Name</label>
        <input id="name" placeholder="Name" v-model="name" required
          class="py-2 px-3 rounded-md border-2 border-solid border-gray-500" />
      </div>
      <button
        class="py-2 px-4 text-lg bg-blue-900 text-white rounded-md"
        @click="addClient"
      >Add</button>
    </section>
  </div>
</template>

<script lang="ts">
import { Client } from '@/models/Client';
import Actions from '@/store/actions';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddClient',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    addClient() {
      this.$store.dispatch(Actions.ADD_CLIENT, { name: this.name })
        .then((c: Client) => this.$store.dispatch(Actions.SET_ACTIVE_CLIENT, c.Id))
        .then(() => {
          this.$router.push({
            name: 'ClientDashboard',
            params: {
              clientId: this.$store.state.activeClient.Id.toString(),
            },
          });
        });
    },
  },
});
</script>
