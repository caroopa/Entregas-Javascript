// *------------------------------------------------ENTREGA 2------------------------------------------------

// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio.
// (Ingredientes debe ser una lista).

let pizzas = [
  {
    id: 1,
    nombre: "muzzarella",
    ingredientes: ["muzarella", "tomate", "aceitunas"],
    precio: 1080,
  },
  {
    id: 2,
    nombre: "fugazzeta",
    ingredientes: ["cebolla", "muzarella"],
    precio: 840,
  },
  {
    id: 3,
    nombre: "napolitana",
    ingredientes: ["muzarella", "tomate", "jamón", "aceitunas"],
    precio: 1560,
  },
  {
    id: 4,
    nombre: "calabresa",
    ingredientes: ["muzarella", "tomate", "pepperoni", "aceitunas"],
    precio: 1380,
  },
  {
    id: 5,
    nombre: "capresse",
    ingredientes: ["muzarella", "tomate", "albahaca", "aceitunas"],
    precio: 1200,
  },
  {
    id: 6,
    nombre: "provolone",
    ingredientes: ["provolone", "tomate", "aceitunas"],
    precio: 1260,
  },
];

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.

let nombres = (array) => {
  return array.map((element) => element.nombre);
};

pizzasImpares = pizzas.filter((element) => element.id % 2 == 0);
console.log("Las pizzas con ID impares son:", nombres(pizzasImpares));

// b) ¿Hay alguna pizza que valga menos de $600?

pizzasMenos600 = pizzas.filter((element) => element.precio < 600);

if (pizzasMenos600.length === 0) {
  console.log("No hay ninguna pizza con precio menor a 600.");
} else {
  console.log(
    "Las pizzas con precio menor a 600 son:",
    nombres(pizzasMenos600)
  );
}

// c) Los nombres de todas las pizzas.

console.log("Todas las pizzas son:", nombres(pizzas));

// d) Los precios de las pizzas.

console.log(
  "Los precios de las pizzas son:",
  pizzas.map((element) => element.precio)
);

// e) El nombre de cada pizza con su respectivo precio.

let nombresYPrecios = (array) => {
  array.forEach((element) => {
    console.log(`La pizza ${element.nombre} tiene precio ${element.precio}.`);
  });
};
nombresYPrecios(pizzas);

// *------------------------------------------------ENTREGA 3------------------------------------------------

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida
// con el numero ingresado en el input.
// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

const btn = document.getElementById("btn");
const ID = document.getElementById("ID");
const h2 = document.getElementById("h2");
const h4 = document.getElementById("h4");

btn.addEventListener("click", () => {
  const valorID = parseInt(ID.value); // capturo el valor del ID
  let pizza = {}; // la pizza que va a coincidir con el ID

  // si no hay ningún ID que coincida
  if (!pizzas.some((item) => item.id === valorID)) {
    window.alert("El ID ingresado no pertenece a ninguna pizza.");
    return;
  }

  // recorro los objetos de pizzas
  // no me serviría poner directamente pizzas[valorID].id porque el orden podría no coincidir
  // y estaría retornando un valor de ID incorrecto
  for (let i in pizzas) {
    if (pizzas[i].id === valorID) {
      // si el valor del ID es igual al ID de la pizza me la guardo
      pizza = pizzas[i];
    }
  }

  h2.innerHTML = `<span class="texto">Pizza:</span> ${pizza.nombre}`;
  h4.innerHTML = `<span class="texto">Precio:</span> $${pizza.precio}`;
});
