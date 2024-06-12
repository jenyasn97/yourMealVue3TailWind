<template>
  <div class="max-w-full rounded-2xl bg-white p-3 md:max-w-300">
    <img
      class="mb-4 rounded"
      src="../assets/img/burgers/photo1.png"
      alt="burger1"
    />
    <span
      class="mb-2 block font-nunito text-base font-semibold text-black md:text-2xl"
      >689₽</span
    >
    <h2 class="mb-4 font-nunito text-xs md:mb-7 md:text-base">Мясная бомба</h2>
    <p
      class="mb-2 font-nunito text-xs font-semibold text-black/20 md:text-base"
    >
      520г
    </p>
    <button-btn @click="$emit('openPopup', true)">Добавить</button-btn>
  </div>
</template>

<script setup>
import ButtonBtn from "@/components/ButtonBtn.vue";

defineEmits(["openPopup"]);
</script>

<style scoped lang="scss"></style>
