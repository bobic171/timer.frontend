<template>
     <div class="flex justify-center w-full items-center h-screen">
        <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 text-left font-sans bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-3 ">
                  <h2 class="block w-full subpixel-antialiased font-bold text-grey-800 text-lg">
                    Add Prospect</h2>
                </div>
                <div class="col-span-6 ">
                  <label for="client" class="block text-sm font-medium text-gray-700">
                    Client</label>
                  <select name="client" id="client"
                  autocomplete="client"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                   v-model="selectedClient">
                  <option value = "-1" >Select client</option>
                  <option v-for="c, i in clients" :key="i" :value="c.Id">{{c.Name}}</option>
                  </select>
                </div>
                 <div class="col-span-6 ">
                    <label class="block text-sm font-medium text-gray-700">
                    Existing Prospects:</label>
                    <p v-for="p, i in Prospects" :key="i">{{p.Name}}</p>
                 </div>
                <div class="col-span-6 ">
                  <label for="prospect" class="block text-sm font-medium text-gray-700">
                    New Prospect</label>
                  <input type="text" name="newProspect" id="newProspect" autocomplete="prospect"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                   placeholder="New prospect"/>
                </div>
              </div>
            </div>
             <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border
               border-transparent shadow-sm text-sm font-medium rounded-md text-white
                bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2
                focus:ring-offset-2 focus:ring-blue-500"
                @click="save">
                Add
              </button>
            </div>
          </div>
        </form>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Client } from '@/models/Client';
import { Prospect } from '@/models/Prospect';

export default defineComponent({
  name: 'AddProspect',
  methods: {
    save() {
      console.log('saved');
      this.$router.push({ path: 'dashboard' });
    },
  },
  computed: {
    clients(): Array<Client> {
      return this.$store.state.clients;
    },
    Prospects(): Array<Prospect> {
      return this.$store.state.prospects
        .filter((f) => f.ClientId === this.selectedClient);
    },
  },
  data() {
    return {
      selectedClient: -1,
    };
  },
});
</script>
