  // Preguntamos si desean que nos comuniquemos con ellos
  let tipoMaquinaria = prompt("¿Qué tipo de maquinaria deseas alquilar");
  let numeroMaquinaria = prompt("¿Cuántos equipos necesitas");
  

  function rentaEquipos(tipoMaquinaria, numeroMaquinaria){
    if(tipoMaquinaria == "excavadora"){
        alert("El alquiler de la excavadora está 95 dolares la hora");
        if( numeroMaquinaria > 2){
            alert("Lo sentimos no tenemos el stock disponible")
        }else{
            let telefono = prompt("Déjanos tu número de teléfono:");
            alert("Nos comunicaremos al " + telefono);
        }
    }
    if(tipoMaquinaria == "retroexcavadora"){
        alert("El alquiler de la retroexcavadora está 70 dolares la hora");
        if( numeroMaquinaria > 3){
            alert("Lo sentimos no tenemos el stock disponible")
        }else{
            let telefono = prompt("Déjanos tu número de teléfono:");
            alert("Nos comunicaremos al " + telefono + ". Gracias");
        }
    }else(
        alert("Lo sentimos no tenemos ese tipo equipo. Gracias causa")
    )
  }
  rentaEquipos(tipoMaquinaria, numeroMaquinaria);
  
//   if (interesado) {
//     // Recopilamos el número de teléfono y correo electrónico
    
//     let correo = prompt("Déjanos tu correo electrónico:");
//     console.log(telefono);
//     console.log(correo);    
//   } else {
//     alert("Gracias por tu tiempo.");
//   }
