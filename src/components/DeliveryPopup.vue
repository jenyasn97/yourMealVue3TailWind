<template>
  <div
    class="fixed bottom-0 left-0 right-0 top-0 m-auto flex h-full w-full flex-col items-center justify-center bg-black/80"
  >
    <form class="flex h-full w-full justify-center sm:h-[440px] sm:max-w-2xl">
      <img
        class="hidden bg-orange px-16 py-20 sm:block sm:rounded-bl-2xl sm:rounded-tl-2xl"
        src="../assets/img/delivery.png"
        alt="delivery"
      />
      <app-loader v-if="isLoaded" class="flex justify-center" />
      <div
        v-else-if="isSuccess"
        class="flex w-full flex-col items-center justify-center bg-gray p-6 sm:rounded-2xl sm:rounded-none sm:rounded-br-2xl sm:rounded-tr-2xl"
      >
        <div class="flex w-full justify-center gap-3">
          <button @click.prevent="$emit('showPopupDelivery', false)">
            <img
              @click.prevent="$emit('showPopupDelivery', false)"
              src="../assets/img/icons/close.png"
              alt="close"
            />
          </button>
          <p class="font-nunito text-xl">Заказ успешно отправлен</p>
        </div>
      </div>
      <div
        v-else
        class="flex w-full flex-col bg-gray p-6 sm:rounded-none sm:rounded-br-2xl sm:rounded-tr-2xl"
      >
        <div class="mb-3.5 flex w-full justify-between">
          <h3 class="font-nunito text-2xl font-semibold">Доставка</h3>
          <button @click.prevent="$emit('showPopupDelivery', false)">
            <img
              @click.prevent="$emit('showPopupDelivery', false)"
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
            v-model="name"
          />
          <my-input
            class="font-nunito text-xs"
            type="tel"
            placeholder="Ваш телефон +7 (999) 999-99-99)"
            v-model="phone"
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
                placeholder="Адрес"
                v-model="fullAddress"
              />
            </div>
            <div class="flex gap-4">
              <my-input
                class="font-nunito text-xs"
                type="text"
                placeholder="Этаж"
                v-model="floor"
              />
              <my-input
                class="font-nunito text-xs"
                type="text"
                placeholder="Домофон"
                v-model="intercom"
              />
            </div>
          </div>
        </div>
        <button-btn @click.prevent="sendOrder" class="mt-auto bg-white"
          >Оформить
        </button-btn>
      </div>
    </form>
  </div>
</template>

<script setup>
import MyInput from "@/components/myInput.vue";
import ButtonBtn from "@/components/ButtonBtn.vue";
import AppLoader from "@/components/AppLoader.vue";
import { ref } from "vue";
import { useFastFoodStore } from "@/stores/fastfood.js";
import axios from "axios";

const fastFood = useFastFoodStore();

const selectedOption = ref("delivery");
const name = ref("");
const phone = ref("");
const fullAddress = ref("");
const floor = ref("");
const intercom = ref("");
const isLoaded = ref(false);
const isSuccess = ref(false);

async function sendOrder() {
  const order = ref({});

  if (!name.value || !phone.value || !fastFood.orders.length) {
    alert(
      "Заполните все обязательные поля и добавьте хотя бы один товар в заказ",
    );
    return;
  }

  if (selectedOption.value === "selfDelivery") {
    order.value = {
      name: name.value,
      phone: phone.value,
      selfDelivery: true,
      orderList: fastFood.orders,
    };
  } else {
    if (!fullAddress.value || !floor.value || !intercom.value) {
      console.log("Заполните все поля для доставки");
      return;
    }
    order.value = {
      name: name.value,
      phone: phone.value,
      address: fullAddress.value,
      selfDelivery: false,
      floor: floor.value,
      intercom: intercom.value,
      orderList: fastFood.orders,
    };
  }

  try {
    isLoaded.value = true;
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/orders.json`,
      order.value,
    );
    isSuccess.value = true;
  } catch (error) {
    console.error(`Заказ не отправлен`, error);
  } finally {
    fastFood.orders = [];
    localStorage.setItem("orders", JSON.stringify(fastFood.orders));
    isLoaded.value = false;
    name.value = "";
    phone.value = "";
    fullAddress.value = "";
    floor.value = "";
    selectedOption.value = "delivery";
    intercom.value = "";
    isSuccess.value = false;
    setTimeout(() => {
      emit("showPopupDelivery", false);
    }, 1500);
  }
}

const emit = defineEmits(["showPopupDelivery"]);
</script>

<style lang="scss" scoped></style>
