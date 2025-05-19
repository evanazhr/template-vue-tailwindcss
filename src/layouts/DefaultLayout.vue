<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main class="pt-20 px-2 mx-auto max-w-7xl min-h-[calc(90vh-6rem)]">
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
