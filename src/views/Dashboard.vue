<template>
  <div class="content-center flex flex-grow flex-col items-center justify-start overflow-hidden">
    <div class="grid grid-cols-3 gap-4 w-full pt-20">
        <div class="col-start-2 col-end-2">
          <label for="search" class="sr-only">Search</label>
          <input type="text" v-model="searchCriteria"
            class="p-6 rounded-xl text-blue-900 w-full text-4xl"
            placeholder="Search" @keyup="search" />
        </div>
    </div>
    <div class="grid grid-cols-5 grid-rows-5 gap-5 w-full flex-grow py-10 overflow-hidden">
      <ul class="col-start-2 col-span-3 row-start-2 row-span-3
        flex flex-wrap
        overflow-x-none overflow-y-auto">
        <li v-for="c, i in clients" :key="i"
          @click="navClient(c.Id)"
          class="flex-1 min-w-1/4 max-w-1/4 group cursor-pointer">
          <div class="bg-white border-white border-2 rounded-xl
            m-2 p-4 group-hover:border-blue-900">
            <h2 class="text-xl col-span-2">{{ c.Name }}</h2>
            <div v-for="p, i in clientProjects(c.Id)" :key="i"
              class="rounded-md bg-blue-900 my-1
              w-full text-white py-2 px-3 flex items-center">
              <font-awesome-icon :icon="['fas', 'building']" class="flex-shrink-0" />
              <h3 class="flex-grow text-center">{{ p.Name }}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Client } from '@/models/Client';
import { Project } from '@/models/Project';
import Actions from '@/store/actions';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
  methods: {
    clientProjects(id: number): Array<Project> {
      return this.$store.state.projects.filter((f) => f.ClientId === id);
    },
    navClient(id: number) {
      this.$store.dispatch(Actions.SET_ACTIVE_CLIENT, id);
      this.$router.push({
        name: 'ClientDashboard',
        params: {
          clientId: id.toString(),
        },
      });
    },
  },
  computed: {
    clients(): Array<Client> {
      if (this.searchCriteria.length > 2) {
        return this.$store.state.clients.filter((m) => {
          if (m.Name.toLowerCase().indexOf(this.searchCriteria.toLowerCase()) > -1) {
            return true;
          }
          return false;
        });
      }
      return this.$store.state.clients;
    },
  },
  data() {
    return {
      searchCriteria: '',
    };
  },
});
</script>
