const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra div');
const carrito = document.getElementById('carrito');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    
    carrito.addEventListener('click', (e) => {compra.eliminarProducto(e)});

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });

    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });
}