<!-- src/views/HomeView.vue -->
<template>
  <div class="p-4 min-h-dvh">
    <h1 class="font-bold text-lg">Welcome to Home Page</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis autem dolore ullam doloribus
      dignissimos officiis sint, eveniet amet sapiente nobis voluptatibus harum excepturi in.
      Aliquam deleniti minus omnis eligendi mollitia.
    </p>
    <ul>
      <li v-for="nama in mahasiswa">
        <p>
          {{ nama }}
        </p>
      </li>
    </ul>
    <button
      @click="DoMahasiswa"
      class="uppercase py-2 px-4 font-semibold rounded-xl bg-orange-500 text-white shadow-md hover:bg-orange-600 cursor-pointer"
    >
      hapus nama
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mahasiswa = ref(['Agung', 'Asep', 'Andi', 'Budi', 'Bagas', 'Citra', 'Cleo', 'Dontol'])

function DoMahasiswa() {
  console.log(mahasiswa.value.pop())
}
console.log('HomeView rendered')
</script>
