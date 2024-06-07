<template>
  <div class="flex items-center justify-between border-b-2 border-gray py-4">
    <div class="flex gap-1.5">
      <img class="h-14 w-16 rounded-2xl" src="" alt="" />
      <div class="flex flex-col font-nunito text-xs">
        <span class="mb-0.5">Супер бургер</span>
        <span class="mb-1.5 text-graySecond">512г</span>
        <span>550₽</span>
      </div>
    </div>
    <div class="flex gap-5 rounded-2xl bg-gray px-3 py-2.5">
      <span @click="decrement" class="cursor-pointer">-</span>
      <span class="">{{ value }}</span>
      <span @click="increment" class="cursor-pointer">+</span>
    </div>
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
