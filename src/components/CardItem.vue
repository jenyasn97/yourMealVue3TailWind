<template>
  <div class="w-full rounded-2xl bg-white p-3 md:max-w-300">
    <img
      class="mb-4 h-1/2 w-full cursor-pointer rounded-2xl md:h-[220px] md:w-[276px]"
      :src="props.food.img.trim()"
      :alt="props.food.name"
      @click="$emit('openPopup', true)"
    />
    <span
      class="mb-2 block font-nunito text-base font-semibold text-black md:text-2xl"
      >{{ props.food.price }}₽</span
    >
    <h2 class="mb-4 font-nunito text-xs md:mb-7 md:text-base">
      {{ props.food.name }}
    </h2>
    <p
      class="mb-2 font-nunito text-xs font-semibold text-black/20 md:text-base"
    >
      {{ props.food.weight }}г
    </p>
    <button-btn @click="$emit('addItemToOrder', { ...props.food })"
      >Добавить
    </button-btn>
  </div>
</template>

<script setup>
import ButtonBtn from "@/components/ButtonBtn.vue";

const props = defineProps({
  food: {
    type: Object,
    default: () => {},
  },
});

defineEmits(["openPopup", "addItemToOrder"]);
</script>

<style scoped lang="scss"></style>
