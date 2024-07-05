<template>
  <div
    class="flex w-full justify-start bg-gray px-3.5 md:justify-center xl:px-0"
  >
    <div
      class="flex max-w-screen-xl flex-col py-12 font-nunito sm:w-full sm:gap-2 xl:w-3/4"
    >
      <h2 class="mb-2 text-4xl font-extrabold sm:mb-0">
        Вопросы и ответы (FAQ)
      </h2>
      <div v-auto-animate>
        <accordion-app title="Что такое YourMeal?">
          YourMeal – это сеть ресторанов, специализирующихся на приготовлении
          сочных и вкусных бургеров из свежих и качественных ингредиентов.
        </accordion-app>
        <accordion-app title="Какие виды бургеров вы предлагаете?">
          Мы предлагаем широкий ассортимент бургеров, включая классические,
          вегетарианские и фирменные варианты. Подробное меню доступно на нашем
          сайте.
        </accordion-app>
        <accordion-app title="Доставляете ли вы заказы на дом?">
          Да, мы предлагаем услугу доставки. Время доставки зависит от вашего
          местоположения и загруженности нашей службы.
        </accordion-app>
        <accordion-app title="Откуда вы берёте ингредиенты для своих бургеров?">
          Мы используем только свежие и качественные ингредиенты от проверенных
          поставщиков. Мы тщательно контролируем процесс закупок, чтобы
          гарантировать высшее качество наших блюд.
        </accordion-app>
      </div>
    </div>
  </div>
</template>

<script setup>
import AccordionApp from "@/components/AccordionApp.vue";
import { vAutoAnimate } from "@formkit/auto-animate";
import CardItem from "@/components/CardItem.vue";
</script>

<style scoped></style>
