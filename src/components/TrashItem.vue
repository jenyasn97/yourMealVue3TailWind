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
    <counter-qua />
  </div>
</template>

<script setup>
import CounterQua from "@/components/CounterQua.vue";
</script>

<style scoped lang="scss"></style>
