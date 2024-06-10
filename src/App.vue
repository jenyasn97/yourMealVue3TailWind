<template>
  <div class="overflow-hidden bg-gray">
    <the-header class="mb-10" />
    <menu-item :item="fastFood.menuList" class="mb-12" />
    <home-view
      :title="fastFood.menuItem"
      :foodList="fastFood.foodList"
      @open-popup="showPopup = true"
      @show-popup-delivery="showDelivery = true"
    />
    <the-footer />
  </div>

  <product-card v-show="showPopup" @close-popup="showPopup = false" />
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
import { ref } from "vue";
import DeliveryPopup from "@/components/DeliveryPopup.vue";

const fastFood = useFastFoodStore();
const showPopup = ref(false);
const showDelivery = ref(false);
</script>

<style scoped></style>
