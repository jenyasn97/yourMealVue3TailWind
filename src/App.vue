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
      @increment="increment($event)"
      @decrement="decrement($event)"
      @open-popup="openPopup"
      @show-popup-delivery="showDelivery = true"
      @add-item-to-order="addItemToOrder"
    />
    <the-footer />
  </div>

  <product-card
    v-show="showPopup"
    @close-popup="showPopup = false"
    @increment="increment(targetItem)"
    @decrement="decrement(targetItem)"
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
  localStorage.setItem("orders", JSON.stringify(fastFood.orders));
}

function checkItemInOrders(item) {
  return fastFood.orders.some((searchItem) => searchItem.name === item.name);
}

function increment(item) {
  const orderItemIndex = fastFood.orders.findIndex(
    (order) => order.name === item.name,
  );
  if (orderItemIndex !== -1) {
    fastFood.orders[orderItemIndex].quantity++;
  } else {
    fastFood.orders.push({ ...item, quantity: 1 });
  }
  localStorage.setItem("orders", JSON.stringify(fastFood.orders));
}

function decrement(item) {
  const orderItemIndex = fastFood.orders.findIndex(
    (order) => order.name === item.name,
  );
  if (orderItemIndex !== -1) {
    const orderItem = fastFood.orders[orderItemIndex];
    if (orderItem.quantity > 1) {
      orderItem.quantity--;
    } else {
      fastFood.orders.splice(orderItemIndex, 1);
    }
  }
  localStorage.setItem("orders", JSON.stringify(fastFood.orders));
}

onMounted(async () => {
  await fastFood.getFoodList();
  if (localStorage.getItem("orders")) {
    fastFood.orders = JSON.parse(localStorage.getItem("orders"));
  }
});

watch(fastFood.orders, () => {
  console.log(`orders`, fastFood.orders);
});
</script>

<style scoped></style>
