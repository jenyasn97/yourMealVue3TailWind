<template>
  <div
    class="fixed bottom-0 left-0 right-0 top-0 m-auto flex h-full w-full flex-col items-center justify-center bg-black/80"
  >
    <div
      class="animate__animated animate__pulse animate__zoomIn flex h-full w-full flex-col bg-white p-6 sm:h-auto sm:max-w-2xl sm:rounded-2xl"
    >
      <div class="mb-6 flex w-full justify-between">
        <h3 class="font-nunito text-4xl">Корзина</h3>
        <button @click="$emit('closePopupTrash', false)">
          <img src="../assets/img/icons/close.png" alt="close" />
        </button>
      </div>
      <div v-if="fastFood.orders.length > 0">
        <div class="max-h-[320px] overflow-y-auto">
          <trash-item
            @increment="$emit('increment', orderItem)"
            @decrement="$emit('decrement', orderItem)"
            v-for="orderItem in fastFood.orders"
            :key="orderItem.name"
            :orderItem="orderItem"
          />
        </div>
        <div
          class="mb-6 mt-4 flex items-center justify-between font-nunito text-base"
        >
          <span>Итого:</span>
          <span>{{ getFinalPrice(fastFood.orders) }}₽</span>
        </div>
        <button-btn @click="$emit('showPopupDelivery', true)" class="mb-3"
          >Оформить заказ
        </button-btn>
      </div>
      <div v-else class="mt-4 font-nunito text-base">Тут пока пусто :(</div>
    </div>
  </div>
</template>

<script setup>
import ButtonBtn from "@/components/ButtonBtn.vue";
import TrashItem from "@/components/TrashItem.vue";
import { useFastFoodStore } from "@/stores/fastfood.js";
import { getFinalPrice } from "@/utils/index.js";

const fastFood = useFastFoodStore();

defineEmits(["closePopupTrash", "increment", "decrement", "showPopupDelivery"]);
</script>

<style lang="scss" scoped></style>
