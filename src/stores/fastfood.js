import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useFastFoodStore = defineStore("fastfood", () => {
  const menuItem = ref("Бургеры");
  const isLoading = ref(false);
  const foodList = ref([]);
  const orders = ref([]);
  const menuList = ref([
    {
      id: 0,
      name: "Бургеры",
      img: "/assets/img/icons/burger.png",
    },
    {
      id: 1,
      name: "Закуски",
      img: "/assets/img/icons/cakes.png",
    },
    {
      id: 2,
      name: "Хот-доги",
      img: "/assets/img/icons/hot_dog.png",
    },
    {
      id: 3,
      name: "Комбо",
      img: "/assets/img/icons/combo.png",
    },
    {
      id: 4,
      name: "Шаурма",
      img: "/assets/img/icons/shaurma.png",
    },
    {
      id: 5,
      name: "Пицца",
      img: "/assets/img/icons/pizza.png",
    },
    {
      id: 6,
      name: "Вок",
      img: "/assets/img/icons/wok.png",
    },
    {
      id: 7,
      name: "Десерты",
      img: "/assets/img/icons/bagel.png",
    },
    {
      id: 8,
      name: "Соусы",
      img: "/assets/img/icons/souse.png",
    },
  ]);

  async function getFoodList() {
    isLoading.value = true;
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/menu.json`,
      );
      foodList.value = response.data;
      console.log(foodList.value);
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    menuList,
    foodList,
    menuItem,
    isLoading,
    orders,
    getFoodList,
  };
});
