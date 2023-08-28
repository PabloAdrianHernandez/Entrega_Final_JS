let listaCarrito = document.getElementById('listaCarrito');

function eliminarProducto(indice) {
    let productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];
    productosSeleccionados.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(productosSeleccionados));
    mostrarProductosEnCarrito();
    mostrarSumatoriaPrecios(); 
}

function mostrarProductosEnCarrito() {
    listaCarrito.innerHTML = "";

    let productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];

    productosSeleccionados.forEach(function(producto, indice) {
        let li = document.createElement('li');
        li.textContent = `Producto: ${producto.descripcion} - Talle: ${producto.talle} - Precio: $${producto.precio}`;

        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = function() {
            eliminarProducto(indice);
        };

        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });
}

function mostrarSumatoriaPrecios() {
    const productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];

    const sumatoria = productosSeleccionados.reduce((total, producto) => total + producto.precio, 0);

    const sumatoriaElement = document.getElementById('sumatoriaPrecios');
    sumatoriaElement.textContent = `Sumatoria de precios: $${sumatoria}`;
}

mostrarProductosEnCarrito();
mostrarSumatoriaPrecios();

let modoEntrega = 'retiroLocal'; 
let modoPago = 'efectivoTransferencia';

document.getElementById('retiroLocal').addEventListener('click', function() {
    modoEntrega = 'retiroLocal';
    calcularSubtotal();
    calcularTotal();
});

document.getElementById('envioCorreo').addEventListener('click', function() {
    modoEntrega = 'envioCorreo';
    calcularSubtotal();
    calcularTotal();
});

document.getElementById('efectivoTransferencia').addEventListener('click', function() {
    modoPago = 'efectivoTransferencia';
    calcularTotal();
});

document.getElementById('mercadoPagoTarjeta').addEventListener('click', function() {
    modoPago = 'mercadoPagoTarjeta';
    calcularTotal();
});

function calcularSubtotal() {
    const productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];
    const sumatoria = productosSeleccionados.reduce((total, producto) => total + producto.precio, 0);

    let recargo = 0;
    if (modoEntrega === 'envioCorreo') {
        recargo = sumatoria * 0.1; 
    }

    const subtotal = sumatoria + recargo;

    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = `El subtotal es: $${subtotal}`;
}

function calcularTotal() {
    const productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];
    const sumatoria = productosSeleccionados.reduce((total, producto) => total + producto.precio, 0);

    let recargo = 0;
    if (modoEntrega === 'envioCorreo') {
        recargo = sumatoria * 0.1; 
    }
    let recargo2 = 0;
    if (modoPago === 'mercadoPagoTarjeta') {
        recargo2 = sumatoria * 0.12; 
    }
    const total = sumatoria + recargo + recargo2;
    const totalElement = document.getElementById('total');
    totalElement.textContent = `El total es: $${total}`;
}


calcularSubtotal();
calcularTotal();













