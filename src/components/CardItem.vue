<template>
  <div class="max-w-300 rounded-2xl bg-white p-3">
    <img
      class="mb-4 rounded"
      src="../assets/img/burgers/photo1.png"
      alt="burger1"
    />
    <span class="mb-2 block font-nunito text-2xl font-semibold text-black"
      >689₽</span
    >
    <h2 class="mb-7 font-nunito text-base">Мясная бомба</h2>
    <p class="mb-2 font-nunito font-semibold text-black/20">520г</p>
    <button-btn @click="$emit('openPopup', true)">Добавить</button-btn>
  </div>
</template>

<script setup>
import ButtonBtn from "@/components/ButtonBtn.vue";

defineEmits(["openPopup"]);
</script>

<style scoped lang="scss"></style>
