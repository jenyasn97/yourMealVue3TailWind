<template>
  <header
    class="flex h-466 w-full flex-col items-center bg-background_header_mob bg-cover bg-repeat-round px-3.5 xs:bg-background_header_768 md:bg-background_header_1024 xl:bg-background_header xl:px-0"
  >
    <div class="flex w-full justify-between py-6 xl:w-3/4 xl:max-w-screen-xl">
      <router-link
        class="rounded-full px-4 py-1 font-nunito text-2xl font-semibold text-white transition hover:bg-redOrange"
        to="/"
        ><img src="../assets/img/logo.png" alt="logo" />
      </router-link>
      <div class="flex gap-8">
        <router-link
          to="/about"
          class="rounded-full px-4 py-1 font-nunito text-2xl font-semibold text-white transition hover:bg-redOrange"
        >
          О нас
        </router-link>
        <router-link
          to="/faqview"
          class="rounded-full px-4 py-1 font-nunito text-2xl font-semibold text-white transition hover:bg-redOrange"
        >
          FAQ
        </router-link>
      </div>
    </div>
    <div class="flex flex-col gap-6 sm:flex-row">
      <img
        class="animate__animated animate__pulse animate__infinite order-2 max-w-[326px] px-9 py-4 sm:order-1"
        src="../assets/img/header/burger_header.png"
        srcset="
          ../assets/img/header/burger_header_768.png  768w,
          ../assets/img/header/burger_header.png     1024w
        "
        alt="burger"
      />
      <div class="order-1 flex flex-col sm:order-2">
        <h1
          class="animate__animated animate__rubberBand mb-4 text-center font-nunito text-3xl font-extrabold leading-tight text-white sm:my-12 sm:text-start sm:text-5xl"
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
