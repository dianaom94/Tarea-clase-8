function alerta (){
    alert('Gracias por contactarnos, en breve atenderemos su solicitud.')
}
function hacerClic(){
    document.getElementsByTagName ('input')[3].onclick = alerta;
}

window.onload = hacerClic;