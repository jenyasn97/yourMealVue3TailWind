<template>
  <nav>
    <ul
      class="flex items-center justify-center gap-7 pb-9 pl-5 xs:justify-start xs:overflow-x-auto xl:justify-center xl:pl-0"
    >
      <li
        v-for="item in props.item"
        :key="item.name"
        :class="
          [item.name === active ? 'bg-orange' : 'bg-white'] +
          ' transition-bg flex cursor-pointer rounded-2xl px-3.5 py-2 shadow-xl duration-300 hover:bg-orange xs:shrink-0'
        "
        @click="itemActive(item)"
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

const emit = defineEmits(["itemActive"]);

function itemActive(item) {
  active.value = item.name;
  emit("itemActive", active.value);
}

watch(
  active,
  () => {
    fastFood.menuItem = active.value;
  },
  { deep: true },
);
</script>

<style scoped lang="scss"></style>
