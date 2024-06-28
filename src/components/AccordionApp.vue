<template>
  <div class="mt-2 rounded border-2 p-2">
    <div
      v-on:click="isOpen = !isOpen"
      class="cursor-pointer rounded bg-orange p-4 text-2xl font-bold text-white sm:text-3xl"
    >
      {{ title }}
    </div>
    <div
      class="mt-4 rounded border-2 p-2 text-base sm:text-xl"
      :class="isOpen ? 'd-block' : 'hidden'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
defineProps({
  title: String,
});
</script>
