<template>
  <nav class="flex flex-row p-4 justify-between items-center">
    <div class="size-8">
      <!-- Ganti dengan path yang benar ke logo -->
      <img src="@/assets/logo.svg" alt="logo" />
    </div>
    <ul class="flex flex-row gap-4">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>
