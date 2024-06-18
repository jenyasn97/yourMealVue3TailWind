<template>
  <div class="overflow-hidden bg-gray">
    <the-header class="mb-10" />
    <menu-item
      :item="fastFood.menuList"
      @itemActive="activeMenuItem = $event"
      class="mb-12"
    />
    <app-loader v-if="fastFood.isLoading" class="flex justify-center" />
    <home-view
      v-else
      :foodList="fastFood.foodList[idx]"
      @open-popup="openPopup($event)"
      @show-popup-delivery="showDelivery = true"
      @add-item-to-trash="addItemToOrder($event)"
    />
    <the-footer />
  </div>

  <product-card
    v-show="showPopup"
    @close-popup="showPopup = false"
    :item="targetItem"
  />
  <delivery-popup
    v-show="showDelivery"
    @show-popup-delivery="showDelivery = false"
  />
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import MenuItem from "@/components/MenuItem.vue";
import { useFastFoodStore } from "@/stores/fastfood.js";
import HomeView from "@/views/HomeView.vue";
import TheFooter from "@/components/TheFooter.vue";
import ProductCard from "@/components/ProductCard.vue";
import { computed, onMounted, ref, watch } from "vue";
import DeliveryPopup from "@/components/DeliveryPopup.vue";
import AppLoader from "@/components/AppLoader.vue";

const fastFood = useFastFoodStore();
const showPopup = ref(false);
const showDelivery = ref(false);
const activeMenuItem = ref("Бургеры");
const idx = computed(() =>
  fastFood.menuList.findIndex((item) => item.name === activeMenuItem.value),
);
const targetItem = ref({});

function openPopup(item) {
  showPopup.value = true;
  if (item) {
    showPopup.value = true;
    targetItem.value = item;
  }
}

function addItemToOrder(item) {
  if (!checkItemInOrders(item)) {
    fastFood.orders.push({ ...item, quantity: 1 });
  } else {
    const orderItem = fastFood.orders.find(
      (searchItem) => searchItem.name === item.name,
    );
    if (orderItem) orderItem.quantity++;
  }
}

function checkItemInOrders(item) {
  const exists = fastFood.orders.some(
    (searchItem) => searchItem.name === item.name,
  );
  console.log(exists);
  return exists;
}

onMounted(async () => {
  await fastFood.getFoodList();
});

watch(fastFood.orders, () => {
  console.log(`orders`, fastFood.orders);
});
</script>

<style scoped></style>
