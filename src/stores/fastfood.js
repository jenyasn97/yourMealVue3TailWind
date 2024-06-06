import { defineStore } from "pinia";
import { ref } from "vue";

export const useFastFoodStore = defineStore("fastfood", () => {
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

  const foodList = ref([
    {
      category: "Бургеры",
      categoryId: 0,
      items: [
        {
          itemsId: 0,
          name: "Мясная бомба",
          img: "src/assets/img/burger/photo1.png",
          price: 689,
          weight: 520,
        },
        {
          itemsId: 1,
          name: "Супер сырный",
          img: "src/assets/img/burger/photo2.png",
          price: 550,
          weight: 512,
        },
        {
          itemsId: 2,
          name: "Сытный",
          img: "src/assets/img/burger/photo3.png",
          price: 639,
          weight: 580,
        },
        {
          itemsId: 3,
          name: "Тяжелый удар",
          img: "src/assets/img/burger/photo4.png",
          price: 480,
          weight: 470,
        },
        {
          itemsId: 4,
          name: "Вечная классика",
          img: "src/assets/img/burger/photo1.png",
          price: 450,
          weight: 450,
        },
        {
          itemsId: 5,
          name: "Итальянский",
          img: "src/assets/img/burger/photo1.png",
          price: 570,
          weight: 510,
        },
      ],
    },
  ]);

  return { menuList, foodList };
});
