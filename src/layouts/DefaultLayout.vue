<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useThemeStore } from '@/store/themeStore'

const useTheme = useThemeStore()
</script>

<template>
  <div :class="useTheme.theme" class="dark:bg-gray-900 text-gray-900 dark:text-white bg-white">
    <Navbar />
    <main class="pt-20 container mx-auto px-4 lg:px-8 xl:max-w-7xl min-h-screen">
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
