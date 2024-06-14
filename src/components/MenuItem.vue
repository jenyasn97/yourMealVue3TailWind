<template>
  <nav>
    <ul
      class="sx: flex items-center justify-center gap-7 px-5 xs:justify-start xs:overflow-x-auto xl:justify-center"
    >
      <li
        v-for="item in props.item"
        :class="
          [item.name === active ? 'bg-orange' : 'bg-white'] +
          ' transition-bg flex cursor-pointer rounded-2xl px-3.5 py-2 duration-300 hover:bg-orange xs:shrink-0'
        "
        @click="active = item.name"
      >
        <img class="mr-2 h-6 w-6" :alt="item.name" :src="item.img" /><span
          class="font-nunito text-black"
          >{{ item.name }}</span
        >
      </li>
    </ul>
  </nav>
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
