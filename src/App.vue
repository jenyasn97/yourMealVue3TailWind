<template>
  <div class="bg-gray">
    <the-header class="mb-10" />
    <menu-item :item="fastFood.menuList" class="mb-12" />
    <home-view :title="fastFood.menuItem" :foodList="fastFood.foodList" />
    <the-footer />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import MenuItem from "@/components/MenuItem.vue";
import { useFastFoodStore } from "@/stores/fastfood.js";
import HomeView from "@/views/HomeView.vue";
import TheFooter from "@/components/TheFooter.vue";

const fastFood = useFastFoodStore();
</script>

<style lang="scss" scoped></style>
