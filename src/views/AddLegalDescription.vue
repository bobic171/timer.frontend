<template>
  <div class="content-center flex flex-grow items-center justify-center pt-50px">
    <section class="bg-white w-1/4 rounded-xl p-5">
      <h1 class="text-blue-900 text-2xl text-left mb-4">Add Legal Description</h1>
      <div class="flex flex-col justify-start mb-4">

        <input id="name" placeholder="Legal description" v-model="name" required
          class="py-2 px-3 rounded-md border-2 border-solid border-gray-500" />
      </div>
      <button
        class="py-2 px-4 text-lg bg-blue-900 text-white rounded-md"
        @click="addLegalDescription"
      >Add</button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Actions from '@/store/actions';

export default defineComponent({
  name: 'AddLegalDescription',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    addLegalDescription() {
      this.$store.dispatch(Actions.ADD_LEGAL_DESCRIPTION, { name: this.name });
    },
  },
});
</script>
