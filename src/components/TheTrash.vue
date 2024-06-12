<template>
  <div class="w-full rounded-2xl bg-white px-3.5 py-6 shadow-2xl sm:w-300">
    <div
      class="flex items-center justify-between border-b-2 border-b-gray pb-2"
    >
      <h3 class="font-nunito text-2xl font-semibold">Корзина</h3>
      <span class="block rounded-2xl bg-gray px-4 py-0.5 font-nunito text-base"
        >4</span
      >
    </div>
    <div v-if="false">
      <div class="max-h-[320px] overflow-y-auto">
        <trash-item />
        <trash-item />
        <trash-item />
        <trash-item />
        <trash-item />
      </div>
      <div
        class="mb-6 mt-4 flex items-center justify-between font-nunito text-base"
      >
        <span>Итого:</span>
        <span>550₽</span>
      </div>
      <button-btn @click="$emit('showPopupDelivery', true)" class="mb-3"
        >Оформить заказ
      </button-btn>
      <div class="flex items-center gap-1.5">
        <img src="../assets/img/icons/bike.png" alt="bike" />
        <span class="font-nunito text-xs">Бесплатная доставка</span>
      </div>
    </div>
    <div class="mt-4 font-nunito text-base" v-else>Тут пока пусто :(</div>
  </div>
</template>

<script setup>
import TrashItem from "@/components/TrashItem.vue";
import ButtonBtn from "@/components/ButtonBtn.vue";
</script>

<style scoped lang="scss"></style>
