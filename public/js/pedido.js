const carro = new Carrito();
const productos = document.getElementById('lista-productos');

cargarEventos();

function cargarEventos(){
    productos.addEventListener('click', (e) => {carro.comprarProducto(e)});
}