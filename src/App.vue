<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import Navbar from './components/Navbar.vue';

  const route = useRoute();
  
  const showNavbar = computed(() => !route.meta.hideNavbar);
</script>

<template>
  <div class="flex">
    <Navbar v-if="showNavbar" />
    <main class="flex-1 min-h-lvh">
      <RouterView />
    </main>
  </div>
</template>