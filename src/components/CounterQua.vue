<template>
  <div class="flex gap-5 rounded-2xl bg-gray px-3 py-2.5">
    <span @click="$emit('decrement')" class="cursor-pointer">-</span>
    <span class="font-nunito"><slot></slot></span>
    <span @click="$emit('increment')" class="cursor-pointer">+</span>
  </div>
</template>

<script setup>
defineEmits(["increment", "decrement"]);
</script>

<style scoped lang="scss"></style>
