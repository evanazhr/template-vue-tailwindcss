<template>
  <div
    class="mx-auto max-w-50 flex justify-center items-center flex-col gap-8 rounded-2xl shadow-lg p-4"
  >
    <h2 class="font-bold uppercase text-xl">Counter</h2>
    <p>{{ counter.count }}</p>
    <button
      @click="counter.increment()"
      class="px-4 py-2 w-full rounded-full bg-blue-500 uppercase font-bold text-white shadow-md cursor-pointer hover:bg-blue-700"
    >
      count + 1
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counterStore'

const counter = useCounterStore()
</script>
