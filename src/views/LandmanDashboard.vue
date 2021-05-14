<template>
  <div class="content-center flex flex-col flex-grow items-center justify-center pt-50px">
    <div class="bg-white rounded-lg w-2/3 flex-grow m-6 p-6">
        <h1 class="text-4xl text-left mb-6">Landman</h1>
        <table class="w-full table-auto">
            <thead>
                <th>Name</th>
                <th>Company</th>
            </thead>
            <tbody>
                <tr v-for="l, i in LandPeople" :key="i">
                    <td>{{ l.Name }}</td>
                    <td>{{ l.CompanyName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Landman } from '@/models/Landman';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandmanDashboard',
  methods: {
  },
  computed: {
    LandPeople(): Array<Landman> {
      return this.$store.state.landPeople;
    },
  },
});
</script>
