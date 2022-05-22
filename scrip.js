/*Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida 
con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. */

const Pizzas = [
    {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["muzzarella", "oregano"],
    precio: 400,
},
    {
    id: 2,
    nombre: "Tomate",
    ingredientes: ["muzzarella", "oregano","Tomate"],
    precio: 450,
},
    {
    id: 3,
    nombre: "Queso Azul",
    ingredientes: ["muzzarella", "queso azul"],
    precio: 500,
},
    {
    id: 4,
    nombre: "Provolone",
    ingredientes: ["muzzarella", "oregano", "provolone"],
    precio: 650,
},
    {
    id: 5,
    nombre: "Fugazza",
    ingredientes: ["provolone", "cebolla"],
    precio: 350,
},
    {
    id: 6,
    nombre: "Jamon",
    ingredientes: ["muzzarella", "oregano", "jamon"],
    precio: 650,
}
]
const h2 = document.querySelector("h2")
const h4 = document.querySelector("h4")
const button = document.querySelector("button")
const atrapador = document.querySelector("input")

const mostrarPizza = () => {
        
    const pizzaSeleccionada = Pizzas.find(pizza => pizza.id === Number(atrapador.value))
   
    if (pizzaSeleccionada) {
        h2.innerHTML = `Tu pizza es: ${pizzaSeleccionada.nombre}`
        h4.innerHTML = `Y sale: ${pizzaSeleccionada.precio}`}
    else {
        h2.innerHTML = "no existe esa pizza"
        h4.innerHTML = ""
    }    
}

button.addEventListener("click", mostrarPizza)



