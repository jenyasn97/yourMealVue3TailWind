<template>
  <div
    class="fixed bottom-0 left-0 right-0 top-0 m-auto flex h-full w-full flex-col items-center justify-center bg-black/50"
  >
    <div
      class="flex h-full w-full flex-col rounded-2xl bg-white p-6 sm:h-auto sm:max-w-2xl"
    >
      <div class="mb-6 flex w-full justify-between">
        <h3 class="font-nunito text-4xl">Мясная бомба</h3>
        <button @click="$emit('closePopup', false)">
          <img src="../assets/img/icons/close.png" alt="close" />
        </button>
      </div>
      <div
        class="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:items-stretch"
      >
        <img
          class="w-full max-w-[320px]"
          src="../assets/img/burgers/photo1.png"
          alt="burger1"
        />
        <div
          class="flex flex-col justify-between font-nunito text-base sm:text-sm"
        >
          <p class="mb-2.5">
            Супер мясное наслаждение! Большая рубленая котлета из свежего
            говяжего мяса покорит вас своей сочностью, а хрустящие листья салата
            добавят свежести.
          </p>
          <div class="mb-3">
            <p class="text-xs">Состав:</p>
            <p class="text-xm">
              Пшеничная булочка, Котлета из говядины, Красный лук, Листья
              салата, Соус горчичный
            </p>
          </div>

          <span class="text-xs text-black/20">520г, ккал 430</span>
        </div>
      </div>
      <div class="mt-auto flex items-center justify-between pb-8">
        <div class="flex">
          <button-btn class="mr-4 px-24">Добавить</button-btn>
          <counter-qua />
        </div>
        <span class="right-0 font-nunito text-2xl">550₽</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonBtn from "@/components/ButtonBtn.vue";
import CounterQua from "@/components/CounterQua.vue";

defineEmits(["closePopup"]);
</script>

<style lang="scss" scoped></style>
