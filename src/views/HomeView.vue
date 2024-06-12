<template>
  <div class="grid justify-center gap-x-8 pb-24">
    <div class="col-start-2">
      <h2 class="mb-6 font-nunito text-4xl">{{ props.title }}</h2>
    </div>
    <div>
      <div class="row-start-1 m-auto w-full max-w-300 grid-flow-col">
        <the-trash />
      </div>
    </div>
    <div
      class="grid auto-cols-max grid-flow-col grid-rows-2 justify-items-center gap-4"
    >
      <card-item v-for="item in 6" :key="item.id" :food="item" />
    </div>
  </div>
</template>

<script setup>
import CardItem from "@/components/CardItem.vue";
import TheTrash from "@/components/TheTrash.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: () => "",
  },

  foodList: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
