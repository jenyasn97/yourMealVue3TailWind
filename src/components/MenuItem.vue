<template>
  <ul class="flex items-center justify-center gap-7">
    <li
      v-for="item in props.item"
      :class="
        [item.name === active ? 'bg-orange' : 'bg-white'] +
        ' transition-bg hover:bg-orange flex cursor-pointer rounded-2xl px-3.5 py-2 duration-300'
      "
      @click="active = item.name"
    >
      <img class="mr-2 h-6 w-6" :alt="item.name" :src="item.img" /><span
        class="font-nunito text-black"
        >{{ item.name }}</span
      >
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from "vue";
import { useFastFoodStore } from "@/stores/fastfood.js";

const fastFood = useFastFoodStore();

const props = defineProps(["item"]);
const active = ref("Бургеры");

watch(
  active,
  () => {
    fastFood.menuItem = active.value;
  },
  { deep: true },
);
</script>

<style scoped lang="scss"></style>
