import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useFastFoodStore = defineStore("fastfood", () => {
  const menuItem = ref("Бургеры");

  const menuList = ref([
    {
      id: 0,
      name: "Бургеры",
      img: "src/assets/img/icons/burger.png",
    },
    {
      id: 1,
      name: "Закуски",
      img: "src/assets/img/icons/cakes.png",
    },
    {
      id: 2,
      name: "Хот-доги",
      img: "src/assets/img/icons/hot_dog.png",
    },
    {
      id: 3,
      name: "Комбо",
      img: "src/assets/img/icons/combo.png",
    },
    {
      id: 4,
      name: "Шаурма",
      img: "src/assets/img/icons/shaurma.png",
    },
    {
      id: 5,
      name: "Пицца",
      img: "src/assets/img/icons/pizza.png",
    },
    {
      id: 6,
      name: "Вок",
      img: "src/assets/img/icons/wok.png",
    },
    {
      id: 7,
      name: "Десерты",
      img: "src/assets/img/icons/bagel.png",
    },
    {
      id: 8,
      name: "Соусы",
      img: "src/assets/img/icons/souse.png",
    },
  ]);

  const foodList = ref([]);

  async function getFoodList() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/menu.json`,
      );
      foodList.value = response.data;
      console.log(foodList.value);
    } catch (error) {
      console.log(error);
    }
  }

  getFoodList();

  return { menuList, foodList, menuItem, getFoodList };
});
