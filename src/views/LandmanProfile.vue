<template>
  <div class="flex justify-center w-full items-center h-screen">
        <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 text-left font-sans bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">

                <div class="col-span-6 ">
                  <h2 class="block w-full subpixel-antialiased font-bold text-grey-800 text-lg">
                    Landman Profile</h2>
                </div>

                <div class="col-span-6 ">
                  <label for="company_name" class="block text-sm font-medium text-gray-700">
                    Company Name</label>
                  <input type="text" name="company_name" id="company_name"
                    v-model="companyName"
                    autocomplete="company-name"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                    w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="group" class="block text-sm font-medium text-gray-700">
                    Group</label>
                  <input type="text" name="group" id="group" autocomplete="group"
                    v-model="group"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                    w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="taxID" class="block text-sm font-medium text-gray-700">
                    Tax ID</label>
                  <input type="text" name="taxID" id="taxID" autocomplete="taxID"
                    v-model="taxId"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                      w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 ">
                  <h2 class="block w-full subpixel-antialiased font-bold text-grey-800 text-md">
                    Address details:</h2>
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                  <label for="street_address" class="block text-sm font-medium text-gray-700">
                    Street address</label>
                  <input type="text" name="street_address" id="street_address"
                    autocomplete="street-address"
                    v-model="streetAddress"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                      w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="unit" class="block text-sm font-medium text-gray-700">
                    Unit</label>
                  <input type="text" name="unit" id="unit"
                    v-model="unit"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                      w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    City</label>
                  <input type="text" name="city" id="city"
                    v-model="city"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                      w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="state" class="block text-sm font-medium text-gray-700">
                    State / Province</label>
                  <input type="text" name="state" id="state"
                    v-model="state"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                      w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="zip" class="block text-sm font-medium text-gray-700">
                    ZIP / Postal</label>
                  <input type="text" name="zip" id="zip" autocomplete="zip"
                    v-model="zip"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                      w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 ">
                  <h2 class="block w-full subpixel-antialiased font-bold text-grey-800 text-md">
                    Contact details:</h2>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="telephone" class="block text-sm font-medium text-gray-700">
                    Telephone</label>
                  <input type="text" name="telephone" id="telephone"
                    v-model="telephone"
                    autocomplete="telephone"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                      w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="mobile" class="block text-sm font-medium text-gray-700">
                    Cell</label>
                  <input type="text" name="mobile" id="mobile"
                    v-model="mobile"
                    autocomplete="mobile"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                      w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="fax" class="block text-sm font-medium text-gray-700">
                    Fax</label>
                  <input type="text" name="fax" id="fax"
                    v-model="fax"
                    autocomplete="fax"
                    class="mt-1 border rounded p-2 block focuse:border-blue-500
                      w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
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
import Actions from '@/store/actions';

export default defineComponent({
  name: 'LandmanProfile',
  methods: {
    save() {
      this.$store.dispatch(Actions.ADD_LANDMAN, {
        CompanyName: this.companyName,
        Group: this.group,
        TaxId: this.taxId,
        StreetAddress: this.streetAddress,
        Unit: this.unit,
        City: this.city,
        State: this.state,
        Zip: this.zip,
        Telephone: this.telephone,
        Mobile: this.mobile,
        Fax: this.fax,
      });
      this.$router.push({ path: 'landmandashboard' });
    },
  },
  data() {
    return {
      companyName: '',
      group: '',
      taxId: '',
      streetAddress: '',
      unit: '',
      city: '',
      state: '',
      zip: '',
      telephone: '',
      mobile: '',
      fax: '',
    };
  },
});
</script>
