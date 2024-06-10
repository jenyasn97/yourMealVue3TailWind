<template>
  <div class="flex gap-5 rounded-2xl bg-gray px-3 py-2.5">
    <span @click="decrement" class="cursor-pointer">-</span>
    <span class="">{{ value }}</span>
    <span @click="increment" class="cursor-pointer">+</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(0);

function increment() {
  value.value++;
}

function decrement() {
  if (value.value > 0) {
    value.value--;
  }
}
</script>

<style scoped lang="scss"></style>
