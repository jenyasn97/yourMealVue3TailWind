<template>
  <div class="flex items-center justify-between border-b-2 border-gray py-4">
    <div class="flex gap-1.5">
      <img
        class="h-14 w-16 rounded-2xl"
        :src="props.orderItem.img"
        :alt="props.orderItem.name"
      />
      <div class="flex flex-col font-nunito text-xs">
        <span class="mb-0.5">{{ props.orderItem.name }}</span>
        <span class="mb-1.5 text-graySecond"
          >{{ props.orderItem.weight }}г</span
        >
        <span>{{ props.orderItem.price * props.orderItem.quantity }}₽</span>
      </div>
    </div>
    <counter-qua
      @increment="$emit('increment', props.orderItem)"
      @decrement="$emit('decrement', props.orderItem)"
      >{{ props.orderItem.quantity || 1 }}
    </counter-qua>
  </div>
</template>

<script setup>
import CounterQua from "@/components/CounterQua.vue";

const props = defineProps({
  orderItem: {
    type: Object,
    default: {},
  },
});

defineEmits(["increment", "decrement"]);
</script>

<style scoped lang="scss"></style>
