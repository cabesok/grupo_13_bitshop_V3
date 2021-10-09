
const formulario= document.getElementById('formulario');
const inputs= document.querySelectorAll('#formulario input');


const expresiones = {
	user_name: /^[a-zA-Z0-9\_\-]{4,16}$/,
	first_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}


const campos = {
	user_name: false,
	first_name: false,
	password: false,
	email: false,
	last_name: false
}



const validarFormulario = (e) => {
	switch (e.target.name) {
    case "user_name":
      validarCampo(expresiones.user_name, e.target, "user_name");

      break;
    case "first_name":
      validarCampo(expresiones.first_name, e.target, "first_name");
      break;
    case "last_name":
      validarCampo(expresiones.last_name, e.target, "last_name");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
    case "email":
      validarCampo(expresiones.email, e.target, "email");
      break;
  }
}


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');
        campos[campo] = false;
    }
}


const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo-password2`).classList.add('formulario-grupo-incorrecto');
		document.getElementById(`grupo-password2`).classList.remove('formulario-grupo-correcto');
		document.querySelector(`#grupo-password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo-password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo-password2 .formulario-input-error`).classList.add('formulario-input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo-password2`).classList.remove('formulario-grupo-incorrecto');
		document.getElementById(`grupo-password2`).classList.add('formulario-grupo-correcto');
		document.querySelector(`#grupo-password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo-password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo-password2 .formulario-input-error`).classList.remove('formulario-input-error-activo');
		campos['password'] = true;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

/* formulario.addEventListener('submit', (e) => {
	e.preventDefault();

    if(campos.user_name && campos.first_name && campos.password && campos.email && campos.last_name){
		formulario.reset();

		document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario-grupo-correcto');
		});
	} else {
		document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
	}
}); */
