<template>
  <div class="bg-gray">
    <the-header class="mb-10" />
    <menu-item :item="fastFood.menuList" />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import MenuItem from "@/components/MenuItem.vue";
import { useFastFoodStore } from "@/stores/fastfood.js";

const fastFood = useFastFoodStore();
</script>

<style lang="scss" scoped></style>
