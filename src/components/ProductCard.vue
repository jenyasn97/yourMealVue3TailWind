<template>
  <div
    class="fixed bottom-0 left-0 right-0 top-0 m-auto flex h-full w-full flex-col items-center justify-center bg-black/50"
  >
    <div
      class="flex h-full w-full flex-col rounded-2xl bg-white p-6 sm:h-auto sm:max-w-2xl"
    >
      <div class="mb-6 flex w-full justify-between">
        <h3 class="font-nunito text-4xl">{{ props.item.name }}</h3>
        <button @click="$emit('closePopup', false)">
          <img src="../assets/img/icons/close.png" alt="close" />
        </button>
      </div>
      <div
        class="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:items-stretch"
      >
        <img
          class="h-[220px] w-full max-w-[276px] rounded-2xl"
          :src="props.item.img"
          :alt="props.item.name"
        />
        <div class="flex flex-col font-nunito text-base sm:text-sm">
          <p class="mb-2.5">
            {{ props.item.desc }}
          </p>
          <div class="mb-3">
            <p class="text-xs">Состав:</p>
            <p class="text-xm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <span class="mt-auto text-xs text-black/20"
            >{{ props.item.weight }}г, ккал {{ props.item.caloriesIn100 }}</span
          >
        </div>
      </div>
      <div class="mt-auto flex items-center justify-between pb-8">
        <div class="flex">
          <button-btn class="mr-4 px-24">Добавить</button-btn>
          <counter-qua />
        </div>
        <span class="right-0 font-nunito text-2xl"
          >{{ props.item.price }}₽</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonBtn from "@/components/ButtonBtn.vue";
import CounterQua from "@/components/CounterQua.vue";

defineEmits(["closePopup"]);

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped></style>
