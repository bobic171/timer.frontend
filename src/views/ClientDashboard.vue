<template>
  <div class="flex flex-col flex-grow overflow-hidden pt-50px">
      <h1 class="my-3 text-blue-900 font-bold text-4xl">{{ Client.Name }}</h1>
      <section class="grid grid-cols-8 gap-4 grid-rows-6 flex-1 p-4">
        <div class="row-span-2 rounded-xl bg-blue-900 col-span-1 col-start-3 text-white
          flex flex-col py-4 px-2">
          <h2 class="text-2xl">Total Hours</h2>
          <p class="text-6xl flex flex-grow items-center justify-center">
            {{ Client.Data.TotalHours }}
          </p>
        </div>
        <div class="row-span-2 rounded-xl bg-blue-900 col-span-2 col-start-4 text-white
          flex flex-col p-4 justify-between">
          <h2 class="text-2xl">Recent Entries</h2>
          <div class="flex flex-col px-4 bg-white text-blue-900 rounded-xl">
            <div class="flex flex-grow underline">
              <p class="text-lg flex-1">Name</p>
              <p class="text-lg flex-1">Entry Type</p>
              <p class="text-lg flex-1">Time</p>
            </div>
            <div v-for="e, i in Client.Data.RecentEntries" :key="i"
              class="flex flex-grow ">
              <p class="text-lg flex-1">{{ e.Name }}</p>
              <p class="text-lg flex-1">{{ e.EntryType }}</p>
              <p class="text-lg flex-1">{{ e.Time }}</p>
            </div>
          </div>
        </div>
        <div class="row-span-1 rounded-xl bg-blue-900 col-span-1 col-start-6 text-white
          flex flex-col py-4 px-2">
          <h2 class="text-2xl">Remaining Approvals</h2>
          <p class="text-6xl flex flex-grow items-center justify-center">
            {{ Client.Data.ApprovalsRemaining }}
          </p>
        </div>
        <div class="row-span-1 rounded-xl col-span-1 col-start-6 row-start-2
          text-white flex flex-col py-4 px-2 bg-blue-900">
          <h2 class="text-2xl">Completed Approvals</h2>
          <p class="text-6xl flex flex-grow items-center justify-center">
            {{ Client.Data.ApprovalsComplete }}
          </p>
        </div>
      </section>
  </div>
</template>

<script lang="ts">
import { Client } from '@/models/Client';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClientDashboard',
  methods: {},
  computed: {
    Client(): Client {
      return this.$store.state.activeClient;
    },
  },
});
</script>
