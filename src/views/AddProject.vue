<template>
 <div class="flex justify-center w-full items-center h-screen">
        <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 text-left font-sans bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">

                <div class="col-span-6 ">
                  <h2 class="block w-full subpixel-antialiased font-bold text-grey-800 text-lg">
                    Add Project</h2>
                </div>

                <div class="col-span-3 ">
                  <label for="client" class="block text-sm font-medium text-gray-700">
                      Client</label>
                  <select id="client" name="client" autocomplete="client"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white
                  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 sm:text-sm">
                    <option>Memes R us</option>
                    <option>Big Kev</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div class="col-span-6 ">
                  <label for="client" class="block text-sm font-medium text-gray-700">
                      Prospect</label>
                  <select id="client" name="client" autocomplete="client"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white
                  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 sm:text-sm">
                    <option>Big Hole</option>
                    <option>Bigger hole in the north</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label for="project_name" class="block text-sm font-medium text-gray-700">
                    Name </label>
                  <input type="text" name="project_name" id="project_name"
                  autocomplete="project_name"
                  class="mt-1 border rounded p-2 block focuse:border-blue-500
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
               </div>

              <div class="flex items-start col-span-6">
                    <div class="flex items-center h-5">
                      <input id="comments" name="comments" type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4
                      text-indigo-600 border-gray-300 rounded"/>
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700">Prefill</label>
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

export default defineComponent({
  name: 'AddProject',
  methods: {
    save() {
      console.log('saved');
      this.$router.push({ path: 'dashboard' });
    },
  },
});
</script>
