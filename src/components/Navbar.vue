<template>
  <header
    class="z-1 fixed top-0 left-0 w-full flex flex-none items-center bg-white dark:bg-gray-900 shadow-lg"
  >
    <div class="container mx-auto px-4 lg:px-8 xl:max-w-7xl flex flex-col">
      <div
        :class="navOpen ? '' : 'border-b border-gray-800 md:border-0'"
        class="py-4 flex justify-between items-center"
      >
        <div class="size-6 cursor-pointer">
          <router-link to="/">
            <!-- Ganti dengan path yang benar ke logo -->
            <img src="@/assets/logo.svg" alt="logo" />
          </router-link>
        </div>

        <!-- nav tablet/pc -->
        <nav class="hidden md:flex gap-4 text-sm flex-row justify-evenly items-center">
          <router-link
            class="dark:hover:text-gray-300 hover:text-gray-500 text-gray-900 dark:text-white"
            to="/"
            >Home</router-link
          >
          <router-link
            class="dark:hover:text-gray-300 hover:text-gray-500 text-gray-900 dark:text-white"
            to="/about"
            >About</router-link
          >
          <router-link
            class="dark:hover:text-gray-300 hover:text-gray-500 text-gray-900 dark:text-white"
            to="/profile"
            >Profile</router-link
          >
          <router-link
            class="dark:hover:text-gray-300 hover:text-gray-500 text-gray-900 dark:text-white"
            to="/contact"
            >Contact</router-link
          >
        </nav>
        <div class="flex justify-center items-center gap-2">
          <button @click="useTheme.toggleTheme()" class="cursor-pointer">
            <svg
              class=""
              v-show="useTheme.theme === 'light'"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 5q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5m4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275M20 13q-.425 0-.713-.288T19 12t.288-.712T20 11h2q.425 0 .713.288T23 12t-.288.713T22 13zm-8 10q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19t.713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275m12.7 12.725l-1.4-1.425q-.275-.3-.275-.712t.275-.688t.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M2 13q-.425 0-.712-.288T1 12t.288-.712T2 11h2q.425 0 .713.288T5 12t-.288.713T4 13zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18"
              />
            </svg>

            <svg
              v-show="useTheme.theme === 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.5 2q2.075 0 3.9.788t3.175 2.137T18.713 8.1T19.5 12t-.788 3.9t-2.137 3.175t-3.175 2.138T9.5 22q-1.325 0-2.588-.337T4.5 20.65Q6.825 19.3 8.163 17T9.5 12T8.162 7T4.5 3.35q1.15-.675 2.413-1.012T9.5 2"
              />
            </svg>
          </button>
          <button
            @click="toggleNavbar()"
            ref="hamburgerBtn"
            class="cursor-pointer transition-colors duration-300 md:hidden"
          >
            <svg
              v-show="navOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="text-gray-900 dark:text-white"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"
              />
            </svg>
            <svg
              v-show="!navOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="text-gray-900 dark:text-white"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- nav mobile -->
      <nav
        ref="navBar"
        :class="!navOpen ? 'flex' : 'hidden '"
        class="flex gap-4 text-sm md:hidden flex-col py-4 justify-evenly items-center"
      >
        <router-link
          class="dark:hover:text-gray-300 p-2 hover:text-gray-500 w-full hover:bg-gray-100 active:bg-gray-100 rounded-lg dark:hover:bg-gray-500 dark:active:bg-gray-500 text-gray-900 dark:text-white"
          to="/"
          >Home</router-link
        >
        <router-link
          class="dark:hover:text-gray-300 p-2 hover:text-gray-500 w-full hover:bg-gray-100 active:bg-gray-100 rounded-lg dark:hover:bg-gray-500 dark:active:bg-gray-500 text-gray-900 dark:text-white"
          to="/about"
          >About</router-link
        >
        <router-link
          class="dark:hover:text-gray-300 p-2 hover:text-gray-500 w-full hover:bg-gray-100 active:bg-gray-100 rounded-lg dark:hover:bg-gray-500 dark:active:bg-gray-500 text-gray-900 dark:text-white"
          to="/profile"
          >Profile</router-link
        >
        <router-link
          class="dark:hover:text-gray-300 p-2 hover:text-gray-500 w-full hover:bg-gray-100 active:bg-gray-100 rounded-lg dark:hover:bg-gray-500 dark:active:bg-gray-500 text-gray-900 dark:text-white"
          to="/contact"
          >Contact</router-link
        >
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/store/themeStore'

const useTheme = useThemeStore()

const navOpen = ref(true)
const navBar = ref(null)
const hamburgerBtn = ref(null)

function toggleNavbar() {
  navOpen.value = !navOpen.value
}

function handleClickOutside(e) {
  if (!navBar.value?.contains(e.target) && !hamburgerBtn.value?.contains(e.target)) {
    navOpen.value = true
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
