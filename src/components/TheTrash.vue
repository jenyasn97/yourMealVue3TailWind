<template>
  <div class="w-300 rounded-2xl bg-white px-3.5 py-6">
    <div
      class="flex items-center justify-between border-b-2 border-b-gray pb-2"
    >
      <h3 class="font-nunito text-2xl font-semibold">Корзина</h3>
      <span class="block rounded-2xl bg-gray px-4 py-0.5 font-nunito text-base"
        >4</span
      >
    </div>
    <trash-item />
    <trash-item />
    <trash-item />
    <div
      class="mb-6 mt-4 flex items-center justify-between font-nunito text-base"
    >
      <span>Итого:</span>
      <span>550₽</span>
    </div>
    <button
      class="mb-2 w-full rounded-2xl bg-orange px-3.5 py-3.5 font-nunito text-base text-white active:bg-redOrange"
    >
      Оформить заказ
    </button>
    <div class="flex items-center gap-1.5">
      <img src="../assets/img/icons/bike.png" alt="bike" />
      <span class="font-nunito text-xs">Бесплатная доставка</span>
    </div>
  </div>
</template>

<script setup>
import TrashItem from "@/components/TrashItem.vue";
</script>

<style scoped lang="scss"></style>
