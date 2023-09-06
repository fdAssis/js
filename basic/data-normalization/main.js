import data from "./data/restaurants.js";

// new Map([
//   ["key", "value"],
//   ["key", "value"],
// ]);

// Colocar uma key para acesso rápido.

const restaurants = new Map(
  data.map(({ menus, ...restaurant }) => [
    restaurant.id,
    { ...restaurant, munusIds: menus.map((menu) => menu.id) },
  ])
);

console.log(restaurants);

const menus = new Map(
  data.flatMap((restaurant) =>
    restaurant.menus.map((menu) => [
      menu.id,
      { ...menu, restaurantId: restaurant.id },
    ])
  )
);

console.log(menus);
