<template>
  <div class="bg-gray">
    <the-header class="mb-10" />
    <router-view />
    <the-footer />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style scoped></style>
