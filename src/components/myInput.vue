<template>
  <input
    :type="props.type"
    class="w-full rounded-2xl border border-gray p-3"
    :placeholder="props.placeholder"
  />
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss"></style>
