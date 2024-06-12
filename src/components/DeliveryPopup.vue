<template>
  <div
    class="fixed bottom-0 left-0 right-0 top-0 m-auto flex h-full w-full flex-col items-center justify-center bg-black/50"
  >
    <div class="flex h-full w-full justify-center sm:h-[440px] sm:max-w-2xl">
      <img
        class="hidden bg-orange px-16 py-20"
        src="../assets/img/delivery.png"
        alt="delivery"
      />
      <div class="flex w-full flex-col rounded-2xl bg-gray p-6">
        <div class="mb-3.5 flex w-full justify-between">
          <h3 class="font-nunito text-2xl font-semibold">Доставка</h3>
          <button @click="$emit('showPopupDelivery', false)">
            <img
              @click="$emit('showPopupDelivery', false)"
              src="../assets/img/icons/close.png"
              alt="close"
            />
          </button>
        </div>
        <div class="mb-3.5 flex w-full flex-col gap-2">
          <my-input
            class="font-nunito text-xs"
            type="text"
            placeholder="Ваше имя"
          />
          <my-input
            class="font-nunito text-xs"
            type="text"
            placeholder="Телефон"
          />
        </div>
        <div class="mb-3.5 flex flex-col gap-3.5">
          <div class="flex items-center">
            <input
              id="selfDelivery"
              type="radio"
              value="selfDelivery"
              v-model="selectedOption"
              class="bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 text-blue-600 focus:border-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            />
            <label
              for="selfDelivery"
              class="text-gray-900 dark:text-gray-300 ms-2 text-xs font-medium"
              >Самовывоз</label
            >
          </div>
          <div class="flex items-center">
            <input
              checked
              id="delivery"
              type="radio"
              value="delivery"
              v-model="selectedOption"
              class="bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            />
            <label
              for="delivery"
              class="text-gray-900 dark:text-gray-300 ms-2 text-xs font-medium"
              >Доставка</label
            >
          </div>
        </div>
        <div>
          <div
            v-if="selectedOption === 'delivery'"
            class="flex w-full flex-col gap-3"
          >
            <div>
              <my-input
                class="font-nunito text-xs"
                type="text"
                placeholder="Улица, дом, квартира"
              />
            </div>
            <div class="flex gap-4">
              <my-input
                class="font-nunito text-xs"
                type="text"
                placeholder="Этаж"
              />
              <my-input
                class="font-nunito text-xs"
                type="text"
                placeholder="Домофон"
              />
            </div>
          </div>
        </div>
        <button-btn class="mt-auto bg-white">Оформить</button-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyInput from "@/components/myInput.vue";
import ButtonBtn from "@/components/ButtonBtn.vue";
import { ref } from "vue";

const selectedOption = ref("delivery");

defineEmits(["showPopupDelivery"]);
</script>

<style lang="scss" scoped></style>
