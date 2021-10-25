class Carrito{
    
    // Añade el producto al carrito
    comprarProducto(e){
        e.stopPropagation();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    // Lee los datos del producto
    leerDatosProducto(producto) {
        const infoProducto = {
            titulo: producto.querySelector('h4').textContent,
            imagen: producto.querySelector('img').src,
            precio: parseInt(producto.querySelector('p').textContent.substring(2)),
            id: producto.querySelector('button').getAttribute('data-id'),
            cantidad: 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id;
            }
        });
        if(productosLS === infoProducto.id){
            alert("Ya está, Papu Gómez.")
        } else {
            this.insertarCarrito(infoProducto);
        }
    }

    // Este es el método que va a poner el infoProducto dentro del carrito
    insertarCarrito(producto){ 
        alert("¡Felicidades! Has agregado " + producto.titulo + " al carrito.")
        this.guardarProductosLocalStorage(producto);
    }

    // Elimina el producto de la vista
    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
        this.calcularTotal();
    }

    //Guardar los datos en Local Storage
    guardarProductosLocalStorage(producto){
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    // Comprueba si hay productos en el Local Storage
    obtenerProductosLocalStorage(){
        let productoLS;
        if(localStorage.getItem('productos') === null) {
            productoLS = [];
            console.log("Hola")
        } else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    // Elimina el producto del Local Storage
    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS, index){
            if(productoLS.id === productoID){
                productosLS.splice(index, 1);
            }
        });
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    // Muestra los productos guardados, en el Local Storage, en products/cart
    leerLocalStorageCompra(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row = document.createElement('div');       
            row.innerHTML = `
                <figure>
                    <img src="${producto.imagen}" width="100px" height="100px">
                </figure>
                <div>
                    <p>${producto.titulo}</p>
                </div>
                <div>
                    <p>$ ${producto.precio}</p>
                </div>
                <div class="hello">
                    <div>
                        <input type="number" class="form-control cantidad" min="1" value="${producto.cantidad}">
                    </div>
                </div>
                <p id="subtotales">$ ${producto.precio * producto.cantidad}</p>
                <div>
                    <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:20px" data-id="${producto.id}"></a>
                </div>
                
            `;
            listaCompra.prepend(row);
        });
    
    }

    // Calcula los montos
    calcularTotal(){
        let productosLS;
        let total = 0, igv = 0, subtotal = 0;
        productosLS = this.obtenerProductosLocalStorage();
        for(let i = 0; i < productosLS.length; i++){
            let element = Number(productosLS[i].precio * productosLS[i].cantidad);
            subtotal = subtotal + element;
        }

        igv = parseFloat(subtotal * 0.21).toFixed(2);
        total = parseInt(subtotal) + parseInt(igv);

        document.getElementById('subtotal').innerHTML = "$" + subtotal;
        document.getElementById('igv').innerHTML = "$" + igv;
        document.getElementById('total').innerHTML = "$ " + total.toFixed(2);
    }

    obtenerEvento(e) {
        e.preventDefault();
        let id, cantidad, producto, productosLS;
        if (e.target.classList.contains('cantidad')) {
            producto = e.target.parentElement.parentElement.parentElement;
 
            id = producto.querySelector('.borrar-producto').getAttribute('data-id');

            cantidad = producto.querySelector('input').value;

            let actualizarMontos = document.querySelectorAll('#subtotales');

            productosLS = this.obtenerProductosLocalStorage();
            productosLS.forEach(function (productoLS, index) {
                if (productoLS.id === id) {
                    productoLS.cantidad = cantidad;
                    actualizarMontos[index].innerHTML = "$ " + Number(cantidad * productosLS[index].precio)
                }
            });
            localStorage.setItem('productos', JSON.stringify(productosLS));        
        }
    }
}