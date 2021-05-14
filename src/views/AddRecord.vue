<template>
     <div class="flex justify-center w-full items-center h-screen">
        <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 text-left font-sans bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">

                <div class="col-span-6 ">
                  <h2 class="block w-full subpixel-antialiased font-bold text-grey-800 text-lg">
                    Add Record</h2>
                </div>

                <div class="col-span-4 ">
                  <label for="landman" class="block text-sm font-medium text-gray-700">
                    Landman</label>
                  <select name="landman" id="landman"
                  autocomplete="landman"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm">
                    <option>Dan</option>
                    <option>Adam</option>
                    <option>Ben</option>
                  </select>
                </div>

                <div class="col-span-2 ">
                  <label for="dateWorked" class="block text-sm font-medium text-gray-700">
                   Date worked</label>
                  <input type="text" name="dateWorked" placeholder=" "
                    onclick="this.setAttribute('type', 'date');"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                    w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"/>
                </div>

                <div class="col-span-4 ">
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

                <div class="col-span-4 ">
                  <label for="prospect" class="block text-sm font-medium text-gray-700">
                    Prospect</label>
                  <select name="prospect" id="prospect"
                  autocomplete="prospect"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm">
                    <option selected="selected">Select prospect</option>
                    <option v-for="w, i in Prospects" :key="i">{{w.Name}}</option>
                  </select>
                </div>

                <div class="col-span-2 ">
                  <label for="county" class="block text-sm font-medium text-gray-700">
                    County</label>
                  <select name="county" id="county"
                  autocomplete="county"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm">
                    <option selected="selected">Select county</option>
                    <option>Dan</option>
                    <option>Adam</option>
                    <option>Ben</option>
                  </select>
                </div>

                <div class="col-span-6 ">
                  <label for="legalDescription" class="block text-sm font-medium text-gray-700">
                    Legal Description</label>
                  <select name="legalDescription" id="legalDescription"
                  autocomplete="legalDescription"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm">
                    <option selected="selected">Select legal description</option>
                    <option>Dan</option>
                    <option>Adam</option>
                    <option>Ben</option>
                  </select>
                </div>

                <div class="col-span-3 ">
                  <label for="workType" class="block text-sm font-medium text-gray-700">
                    Work Type</label>
                  <select name="workType" id="workType"
                  autocomplete="workType"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm">
                    <option selected="selected">Select worktype</option>
                    <option v-for="w, i in workTypes" :key="i">{{w.Name}}</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label for="project" class="block text-sm font-medium text-gray-700">
                    Project</label>
                  <select name="project" id="project"
                  autocomplete="project"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm">
                    <option selected="selected">Select prospect</option>
                    <option v-for="w, i in Projects" :key="i">{{w.Name}}</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label for="wellName" class="block text-sm font-medium text-gray-700">
                    Well Name</label>
                  <input type="text" name="wellName" id="wellName" autocomplete="wellName"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-1 ">
                  <label for="timeWorked" class="block text-sm font-medium text-gray-700">
                    Time Worked</label>
                  <select name="timeWorked" id="timeWorked"
                  autocomplete="timeWorked"
                  placeholder="Select time"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm">
                    <option>0.000 (0 hours)</option>
                    <option>0.125 (1 hours)</option>
                    <option>0.250 (2 hours)</option>
                    <option>0.375 (3 hours)</option>
                    <option>0.500 (4 hours)</option>
                    <option>0.625 (5 hours)</option>
                    <option>0.750 (6 hours)</option>
                    <option>0.875 (7 hours)</option>
                    <option>1.000 (8 hours)</option>
                  </select>
                </div>

                <div class="col-span-6 ">
                  <label for="workDescription" class="block text-sm font-medium text-gray-700">
                    Work Description</label>
                   <textarea
                    type="text"
                    name="workDescription"
                    placeholder="Type message..."
                    class="p-5 mb-5 bg-white border w-full border-gray-200 rounded shadow-sm h-36"
                    id="workDescription">
                    </textarea>
                </div>

                <div class="flex items-start col-span-6">
                    <div class="flex items-center h-5">
                      <input id="prefill" name="prefill" type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4
                      text-indigo-600 border-gray-300 rounded"/>
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="prefill" class="font-medium text-gray-700">Prefill</label>
                      <p class="text-gray-500">
                          Prefill these fields for next time</p>
                    </div>
                </div>

              </div>
            </div>
             <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border
               border-transparent shadow-sm text-sm font-medium rounded-md text-white
                bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2
                focus:ring-offset-2 focus:ring-blue-500"
                @click="save">
                Save
              </button>
            </div>
          </div>
        </form>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { WorkType } from '@/models/WorkType';
import { Client } from '@/models/Client';
import { Prospect } from '@/models/Prospect';
import { Project } from '@/models/Project';

export default defineComponent({
  name: 'AddRecord',
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
    workTypes(): Array<WorkType> {
      return this.$store.state.workTypes;
    },
    Prospects(): Array<Prospect> {
      if (this.selectedClient > 0) {
        return this.$store.state.prospects
          .filter((f) => f.ClientId === this.selectedClient);
      }
      return this.$store.state.prospects;
    },
    Projects(): Array<Project> {
      if (this.selectedClient > 0) {
        return this.$store.state.projects
          .filter((f) => f.ClientId === this.selectedClient);
      }
      return this.$store.state.projects;
    },
  },
  data() {
    return {
      selectedClient: -1,
    };
  },
});
</script>
