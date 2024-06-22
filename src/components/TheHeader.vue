<template>
  <header
    class="flex h-466 w-full flex-col items-center bg-background_header_mob bg-cover bg-repeat-round xs:bg-background_header_768 md:bg-background_header_1024 xl:bg-background_header"
  >
    <div class="py-6">
      <a href="#"> <img src="../assets/img/logo.png" alt="logo" /></a>
    </div>
    <div class="flex flex-col gap-6 sm:flex-row">
      <img
        class="order-2 max-w-[326px] px-9 py-4 sm:order-1"
        src="../assets/img/header/burger_header.png"
        srcset="
          ../assets/img/header/burger_header_768.png  768w,
          ../assets/img/header/burger_header.png     1024w
        "
        alt="burger"
      />
      <div class="order-1 flex flex-col sm:order-2">
        <h1
          class="mb-4 text-center font-nunito text-3xl font-extrabold leading-tight text-white sm:my-12 sm:text-start sm:text-5xl"
        >
          Только самые <br />
          <span class="text-red">сочные бургеры!</span>
        </h1>
        <p class="text-center font-nunito text-white sm:text-start">
          Бесплтаная доставка от 599₽
        </p>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped lang="scss"></style>
