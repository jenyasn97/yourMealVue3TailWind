<template>
  <div
    v-auto-animate
    class="flex w-full justify-start bg-gray px-3.5 md:justify-center xl:px-0"
  >
    <div
      class="flex max-w-screen-xl flex-col gap-8 py-12 font-nunito sm:w-full md:gap-12 xl:w-3/4"
    >
      <h2 class="mb-2 text-4xl font-extrabold sm:mb-0">О нас</h2>

      <p class="mb-3.5 text-base sm:text-xl">
        Добро пожаловать в YourMeal! <br />
        Мы – команда энтузиастов, преданных идее создания лучших бургеров в
        городе. Наши бургеры – это не просто еда, это настоящее искусство!
      </p>

      <div>
        <h2 class="mb-3.5 text-2xl sm:text-3xl">Наша История</h2>
        <p class="text-base sm:text-xl">
          Наше путешествие началось с небольшой кухни, где мы экспериментировали
          с рецептами и ингредиентами, стремясь найти идеальный вкус. Сегодня мы
          гордимся тем, что можем предложить вам только самые сочные и вкусные
          бургеры, приготовленные с любовью и вниманием к каждой детали.
        </p>
      </div>
      <div>
        <h2 class="mb-3.5 text-2xl sm:text-3xl">Наша Миссия</h2>
        <p class="text-base sm:text-xl">
          Мы верим, что бургер – это не просто еда на ходу, а полноценное
          гастрономическое впечатление. Наша миссия – приносить радость каждому
          гостю, используя только свежие и качественные продукты. Мы стремимся к
          совершенству в каждом бургере, который подаем.
        </p>
      </div>

      <div>
        <h2 class="mb-3.5 text-2xl sm:text-3xl">Почему Выбирают Нас</h2>
        <ul class="list-disc space-y-4 pl-7 text-base sm:text-xl">
          <li>
            <span class="font-bold">Качество ингредиентов:</span> Мы используем
            только свежие и натуральные продукты от проверенных поставщиков.
          </li>
          <li>
            <span class="font-bold">Индивидуальный подход:</span> Каждый бургер
            готовится по вашему заказу, чтобы вы могли наслаждаться неповторимым
            вкусом.
          </li>
          <li>
            <span class="font-bold">Уютная атмосфера:</span> Наши рестораны –
            это место, где вы можете расслабиться и насладиться отличной едой в
            приятной обстановке.
          </li>
        </ul>
      </div>

      <div>
        <h2 class="mb-3.5 text-2xl sm:text-3xl">Наша Команда</h2>
        <p class="text-base sm:text-xl">
          Наши повара – настоящие мастера своего дела, которые вкладывают душу в
          каждое блюдо. Мы все – большая семья, объединенная общей страстью к
          созданию идеальных бургеров.
        </p>
      </div>
      <div>
        <h2 class="mb-3.5 text-2xl sm:text-3xl">Присоединяйтесь К Нам</h2>
        <p class="text-base sm:text-xl">
          Наши повара – настоящие мастера своего дела, которые вкладывают душу в
          каждое блюдо. Мы все – большая семья, объединенная общей страстью к
          созданию идеальных бургеров.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { vAutoAnimate } from "@formkit/auto-animate";
import CardItem from "@/components/CardItem.vue";
</script>

<style scoped lang="scss"></style>
