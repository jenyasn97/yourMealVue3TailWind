<template>
  <footer
    class="flex w-full justify-start bg-white px-3.5 md:justify-center xl:px-0"
  >
    <div
      class="flex max-w-screen-xl flex-col justify-between py-12 sm:w-full md:gap-12 xl:w-3/4"
    >
      <div
        class="md:flex md:max-w-full md:flex-col md:justify-between lg:flex-row"
      >
        <div>
          <a href="#" class="mb-6 block">
            <img
              class="wax-w-[300px] w-full sm:w-1/2 md:w-[300px]"
              src="../assets/img/footer/logo_footer.png"
              srcset="
                ../assets/img/footer/logo_footer_768.png  768w,
                ../assets/img/footer/logo_footer.png     1024w
              "
              alt="logo"
            />
          </a>
        </div>
        <div class="flex flex-col gap-8 sm:mb-6 sm:flex-row sm:gap-32">
          <div class="flex flex-col">
            <span class="mb-3 block font-nunito text-xl md:text-2xl"
              >Ноемр для заказа</span
            >
            <a
              href="tel:+79308333811"
              class="flex items-center gap-2 font-nunito text-base"
            >
              <img src="../assets/img/icons/call.png" alt="phone" />
              <span>+7(930)833-38-11</span>
            </a>
          </div>
          <div>
            <span class="mb-3 block font-nunito text-xl md:text-2xl"
              >Мы в соцсетях</span
            >
            <div class="mb-4 flex gap-4 sm:mb-0">
              <a href="#">
                <img src="../assets/img/footer/vk.png" alt="vk" /> </a
              ><a href="#">
                <img src="../assets/img/footer/tg.png" alt="tg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="font-nunito text-xs">© YouMeal, 2024</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped lang="scss"></style>
