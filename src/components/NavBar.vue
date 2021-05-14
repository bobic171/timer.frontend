<template>
  <div class="bg-blue-900 h-50px flex items-center justify-end px-4">
    <div class="relative inline-block">
      <button class="rounded-full bg-white w-35px h-35px
        flex items-center justify-center text-blue-900 text-center z-10"
        id="menu-button" aria-expanded="true" aria-haspopup="true"
        @click="showMenu" aria-label="Menu">
          <font-awesome-icon id="menu-button-icon" :icon="['fas', 'user']" />
        </button>
      <div :class="{'invisible': menuClosed}"
      class="origin-top-right absolute divide-y divide-gray-100
        right-0 mt-3 w-52 rounded-md shadow-lg bg-white text-blue-900
      ring-1 ring-black ring-opacity-5 focus:outline-none py-1"
      role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div>
          <button @click="nav('Dashboard')"
            class="w-full py-2 px-4 font-bold text-left">Clients</button>
          <button @click="nav('AddClient')"
            class="w-full py-2 px-4 font-bold text-left">Add Client</button>
          <button @click="nav('AddProspect')"
            class="w-full py-2 px-4 font-bold text-left">Add Prospect</button>
          <button @click="nav('AddProject')"
            class="w-full py-2 px-4 font-bold text-left">Add Project</button>
        </div>
        <div>
          <button @click="nav('LandmanDashboard')"
            class="w-full py-2 px-4 font-bold text-left">Landmen</button>
          <button @click="nav('LandmanProfile')"
            class="w-full py-2 px-4 font-bold text-left">Landman Profile</button>
        </div>
        <div>
          <button @click="nav('AddRecord')"
            class="w-full py-2 px-4 font-bold text-left">Add Record</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'nav-bar',
  data() {
    return {
      menuClosed: true,
    };
  },
  methods: {
    showMenu(e: Event) {
      e.preventDefault();
      e.stopPropagation();
      this.menuClosed = !this.menuClosed;
    },
    nav(name: string) {
      this.menuClosed = true;
      this.$router.push({ name });
    },
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!this.menuClosed) {
        this.menuClosed = true;
      }
    });
  },
});
</script>

<style scoped lang="scss">
</style>
