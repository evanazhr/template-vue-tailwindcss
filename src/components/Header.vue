<template>
  <header
    class="z-10 fixed shadow-lg top-2 left-2 flex flex-row backdrop-blur-lg justify-between items-center bg-white/50 border border-gray-500 rounded-2xl px-4 py-2 w-[calc(100vw-16px)]"
  >
    <div class="size-6 cursor-pointer">
      <router-link to="/">
        <!-- Ganti dengan path yang benar ke logo -->
        <img src="@/assets/logo.svg" alt="logo" />
      </router-link>
    </div>
    <nav class="hidden md:flex gap-4 text-sm flex-row justify-evenly items-center">
      <router-link class="font-semibold hover:text-gray-500 text-gray-900" to="/">Home</router-link>
      <router-link class="font-semibold hover:text-gray-500 text-gray-900" to="/about"
        >About</router-link
      >
      <router-link class="font-semibold hover:text-gray-500 text-gray-900" to="/profile"
        >Profile</router-link
      >
      <router-link class="font-semibold hover:text-gray-500 text-gray-900" to="/contact"
        >Contact</router-link
      >
    </nav>
    <button
      id="navMenu-btn"
      @click="toggleNavbar()"
      class="cursor-pointer transition-colors duration-300 hover:bg-gray-200 active:bg-gray-200 rounded-xl p-1 md:hidden"
    >
      <svg
        v-if="isClosed"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"
        />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"
        />
      </svg>
    </button>
  </header>
  <nav
    ref="navbar"
    class="shadow-lg gap-4 fixed backdrop-blur-lg hidden z-10 max-w-xl min-w-50 top-16 right-2 md:hidden gap-4text-sm flex-col justify-start rounded-2xl border-gray-500 bg-white/50 border p-4 items-start"
  >
    <router-link
      class="w-full border-b border-transparent hover:border-gray-500 active:border-gray-500 transition-all duration-150 font-semibold hover:text-gray-500 active:text-gray-500 text-gray-900"
      to="/"
      >Home</router-link
    >
    <router-link
      class="w-full border-b border-transparent hover:border-gray-500 active:border-gray-500 transition-all duration-150 font-semibold hover:text-gray-500 active:text-gray-500 text-gray-900"
      to="/about"
      >About</router-link
    >
    <router-link
      class="w-full border-b border-transparent hover:border-gray-500 active:border-gray-500 transition-all duration-150 font-semibold hover:text-gray-500 active:text-gray-500 text-gray-900"
      to="/profile"
      >Profile</router-link
    >
    <router-link
      class="w-full border-b border-transparent hover:border-gray-500 active:border-gray-500 transition-all duration-150 font-semibold hover:text-gray-500 active:text-gray-500 text-gray-900"
      to="/contact"
      >Contact</router-link
    >
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navbar = ref(null)
const isClosed = ref(true)

function toggleNavbar() {
  isClosed.value = !isClosed.value
  if (navbar.value?.classList.contains('hidden')) {
    navbar.value?.classList.remove('hidden')
    navbar.value?.classList.add('flex')
  } else {
    navbar.value?.classList.remove('flex')
    navbar.value?.classList.add('hidden')
  }
}
</script>
