<template>
  <div class="h-screen bg-yellow-200 flex flex-col">
    <nav-bar v-if="LoggedIn"></nav-bar>
    <router-view :class="{ 'userbar-offset': LoggedIn }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'app',
  computed: {
    LoggedIn(): boolean {
      return this.$store.state.user.LoggedIn;
    },
  },
  components: {
    NavBar,
  },
});
</script>

<style lang="scss">
.userbar-offset {
  margin-top: -50px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
  background: #555;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #AAA;
  opacity: 0.7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888;
}

html,body{
 scrollbar-color: #888 #FFF !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
