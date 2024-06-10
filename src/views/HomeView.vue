<template>
  <div class="flex flex-col px-5 pb-24 md:grid md:justify-center md:gap-x-8">
    <div class="order-2 md:order-none md:col-start-2">
      <h2 class="mb-6 font-nunito text-4xl">{{ props.title }}</h2>
    </div>
    <div>
      <div
        class="order-1 mb-6 md:order-none md:row-start-1 md:m-auto md:w-full md:max-w-300"
      >
        <the-trash @show-popup-delivery="$emit('showPopupDelivery', true)" />
      </div>
    </div>
    <div
      class="order-3 grid w-full grid-cols-2 justify-items-center gap-4 sm:grid-cols-4 md:order-none md:grid-cols-2 lg:grid-cols-3"
    >
      <card-item
        v-for="item in 10"
        :key="item.id"
        :food="item"
        @open-popup="$emit('openPopup', true)"
      />
    </div>
  </div>
</template>

<script setup>
import CardItem from "@/components/CardItem.vue";
import TheTrash from "@/components/TheTrash.vue";

defineEmits(["openPopup", "showPopupDelivery"]);

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
