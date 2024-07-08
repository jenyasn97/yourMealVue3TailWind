<template>
  <app-loader
    v-if="fastFood.isLoading && fastFood.foodList.length === 0"
    class="flex justify-center"
  />
  <menu-item :item="fastFood.menuList" @itemActive="activeMenuItem = $event" />
  <main class="flex flex-col px-5 pb-24 md:grid md:justify-center md:gap-x-8">
    <div
      v-if="fastFood.foodList[idx]"
      class="order-2 md:order-none md:col-start-2"
    >
      <div class="mb-6 flex items-center justify-between">
        <h2 class="font-nunito text-4xl font-extrabold">
          {{ fastFood.foodList[idx].category }}
        </h2>

        <div>
          <select v-model="sortBy">
            <option value="default" selected>По умолчанию</option>
            <option value="asc">По возрастанию цены</option>
            <option value="desc">По убыванию цены</option>
          </select>
        </div>
      </div>
    </div>
    <aside>
      <div
        class="order-1 mb-6 md:order-none md:row-start-1 md:m-auto md:w-full md:max-w-300"
      >
        <the-trash
          @open-trash="showTrash = true"
          @increment="increment($event)"
          @decrement="decrement($event)"
          @show-popup-delivery="showDelivery = true"
        />
      </div>
    </aside>
    <article
      v-auto-animate
      class="order-3 grid w-full grid-cols-2 justify-items-center gap-4 sm:grid-cols-4 md:order-none md:grid-cols-2 lg:grid-cols-3"
    >
      <card-item
        v-if="fastFood.foodList[idx]"
        v-for="item in itemsList"
        :key="item.id"
        :food="item"
        @open-popup="openPopup(item)"
        @add-item-to-order="addItemToOrder"
      />
    </article>
  </main>

  <product-card
    v-show="showPopupCard"
    @close-popup="showPopupCard = false"
    @increment="increment(targetItem)"
    @decrement="decrement(targetItem)"
    :item="targetItem"
  />
  <delivery-popup
    v-show="showDelivery"
    @show-popup-delivery="showDelivery = false"
  />
  <app-trash-popup
    v-show="showTrash"
    @close-popup-trash="showTrash = false"
    @increment="increment"
    @decrement="decrement"
    @show-popup-delivery="showDeliveryPopup"
  />
</template>

<script setup>
import { vAutoAnimate } from "@formkit/auto-animate";
import { useFastFoodStore } from "@/stores/fastfood.js";
import { computed, onMounted, ref, watch } from "vue";
import AppLoader from "@/components/AppLoader.vue";
import { setNoScroll } from "@/utils";
import MenuItem from "@/components/MenuItem.vue";
import CardItem from "@/components/CardItem.vue";
import TheTrash from "@/components/TheTrash.vue";
import DeliveryPopup from "@/components/DeliveryPopup.vue";
import AppTrashPopup from "@/components/AppTrashPopup.vue";
import ProductCard from "@/components/ProductCard.vue";

const fastFood = useFastFoodStore();

const showPopupCard = ref(false);
const showDelivery = ref(false);
const showTrash = ref(false);
const activeMenuItem = ref("Бургеры");

const idx = computed(() =>
  fastFood.menuList.findIndex((item) => item.name === activeMenuItem.value),
);

const itemsList = computed(() => fastFood.foodList[idx.value].items);
const sortBy = ref("default");

watch(sortBy, (newValue) => {
  itemsList.value.sort((a, b) => {
    if (newValue === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
});

const targetItem = ref({});

function showDeliveryPopup() {
  showDelivery.value = true;
  showTrash.value = false;
}

function openPopup(item) {
  showPopupCard.value = true;
  if (item) {
    showPopupCard.value = true;
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

watch(showDelivery, () => {
  if (showDelivery.value) {
    setNoScroll(false);
  }
  if (!showDelivery.value) {
    setNoScroll(true);
  }
});

watch(showPopupCard, () => {
  if (showPopupCard.value) {
    setNoScroll(false);
  }
  if (!showPopupCard.value) {
    setNoScroll(true);
  }
});

watch(showTrash, () => {
  if (showTrash.value) {
    setNoScroll(false);
  }
  if (!showTrash.value) {
    setNoScroll(true);
  }
});
</script>

<style lang="scss" scoped></style>
