function ValidaNombre(){
    let nombre = document.getElementById("nombre");
    let mensaje = document.getElementById("mensageNombre");
    if(nombre.value.length <5){
        mensaje.innerText= "El nombre debe tener al menos cinco caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
        nombre.classList.remove("exitoinput");
        nombre.classList.add("errorinput");
    }else{
        mensaje.innerText= "El nombre es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
        nombre.classList.remove("errorinput");
        nombre.classList.add("exitoinput");
    }

}

function ValidaCorreo(){
    let correo = document.getElementById("correo");
    let mensaje = document.getElementById("msgCorreo");
    let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!reg.test(correo.value)){
        mensaje.innerText= "El correo es incorrecto";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
        correo.classList.remove("exitoinput");
        correo.classList.add("errorinput");
    }else{
        mensaje.innerText= "El correo es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
        correo.classList.remove("errorinput");
        correo.classList.add("exitoinput");
    }

}

function ValidaNumero(){
    let numero = document.getElementById("numero");
    let mensaje = document.getElementById("msgNumero");
    if(numero.value.length<9){
        mensaje.innerText= "El teléfono debe tener al menos nueve números";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
        numero.classList.remove("exitoinput");
        numero.classList.add("errorinput");
    }else{
        mensaje.innerText= "El numero es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
        numero.classList.remove("errorinput");
        numero.classList.add("exitoinput");
    }

}