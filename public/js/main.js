const fila = document.querySelector(".contenedor-carrusel");
const productos = document.querySelectorAll(".producto");

const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

// ---------- Event Listener para flecha derecha--------------
flechaDerecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
  if(indicadorActivo.nextSibling){
      indicadorActivo.nextSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');
  }

});
//para que al accionar la flecha el indicador a la derecha cambie a activo.


// ---------- Event Listener para flecha izquierda--------------
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}

});
//para que al accionar la flecha el indicador a la izquierda cambie a activo.



//---------------------Paginación--------------------------
//Accede a la variable con length (cantidad de elementos), divide en 5 (elementos que mostramos)
const numeroPaginas = Math.ceil(productos.length / 5);
//con math.ceil redondeamos el resultado, por si al dividir no da decimales.

//Indicador por cada página.
//Ciclo. el ciclo se repite mientras que i sea menor al numero de paginas
/* en cada iteracion i aumentara una unidad hasta que la condicion deje de cumplirse, es decir hasta que
i deje de ser menor a num de paginas */
for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement("button");

  if (i === 0) {
    indicador.classList.add("activo");
  }

  document.querySelector(".indicadores").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
  });


} //por cada ejecucion creamos un boton dentro del div "indicadores".



//---------------------Hover-------------------------
/* por cada producto quiero que me ejecute una accion, en este caso un evento.*/

productos.forEach((producto) => {
    producto.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            productos.forEach(producto => producto.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });

});

fila.addEventListener('mouseleave', () => {
    productos.forEach(producto => producto.classList.remove('hover'));
})


//---------------EventListener para la barra de busqueda------------
document.querySelector(".buscar").addEventListener("click", () => {
  document.querySelector(".buscar").classList.toggle("show");
});
