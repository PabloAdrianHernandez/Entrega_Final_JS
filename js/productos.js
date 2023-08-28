/* ------ Simulación de carrito de compras ------ */

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

function agregarAlCarrito(producto) {
    let productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];
    productosSeleccionados.push(producto);
    localStorage.setItem('carrito', JSON.stringify(productosSeleccionados));
    Toastify({
        text: "Agregaste un producto al carrito!",
        duration: 2800
        }).showToast();

}

fetch('../data/productos.json')
    .then(response => response.json())
    .then(productos => {
        btn1.addEventListener("click", function() {
            agregarAlCarrito(productos[0]);
        });

        btn2.addEventListener("click", function() {
            agregarAlCarrito(productos[1]);
        });

        btn3.addEventListener("click", function() {
            agregarAlCarrito(productos[2]);
        });

        btn4.addEventListener("click", function() {
            agregarAlCarrito(productos[3]);
        });

        btn5.addEventListener("click", function() {
            agregarAlCarrito(productos[4]);
        });

        btn6.addEventListener("click", function() {
            agregarAlCarrito(productos[5]);
        });
    });




























