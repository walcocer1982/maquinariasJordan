  // Preguntamos si desean que nos comuniquemos con ellos
  function rentaEquipos(){  
      let tipoMaquinaria = prompt("¿Qué tipo de maquinaria deseas alquilar");
  
  while (tipoMaquinaria !== "excavadora" && tipoMaquinaria !== "retroexcavadora"){
    alert("No se tiene ese tipo de maquinaria");
    rentaEquipos();
  }
  alert("Muchas gracias, su solictud de " + tipoMaquinaria + " está siendo procesada" );
  }
  function impresionImagen(){
    let numeroMaquinaria = prompt("¿Cuántos equipos deseas?");
    numeroMaquinaria = parseInt (numeroMaquinaria);
    for(i = 0; i < numeroMaquinaria; i++){
        document.write(
         `<img src="https://static.unimaq.com.pe/fcsaprdunimaq01/2019/07/Retroexcavadoras.png" class="equipos-img" style = "width:360px; margin:40px">`+ (i + 1)
        
        ); 
    }
    
  }
  rentaEquipos();  
  impresionImagen();
 

//   let numeroMaquinaria = prompt("¿Cuántos equipos necesitas?");
  

//   function rentaEquipos(tipoMaquinaria, numeroMaquinaria){
//     if(tipoMaquinaria == "excavadora"){
//         alert("El alquiler de la excavadora está 95 dolares la hora");
//         if( numeroMaquinaria > 2){
//             alert("Lo sentimos no tenemos el stock disponible")
//         }else{
//             let telefono = prompt("Déjanos tu número de teléfono:");
//             alert("Nos comunicaremos al " + telefono + ". Gracias");
//         }
//     }
//     else if(tipoMaquinaria == "retroexcavadora"){
//         alert("El alquiler de la retroexcavadora está 70 dolares la hora");
//         if( numeroMaquinaria > 3){
//             alert("Lo sentimos no tenemos el stock disponible")
//         }else{
//             let telefono = prompt("Déjanos tu número de teléfono:");
//             alert("Nos comunicaremos al " + telefono + ". Gracias");
//         }
//     }else{
//         alert("Lo sentimos no tenemos ese tipo equipo. Gracias")
//     }
//   }
  

//   if (interesado) {
//     // Recopilamos el número de teléfono y correo electrónico
    
//     let correo = prompt("Déjanos tu correo electrónico:");
//     console.log(telefono);
//     console.log(correo);    
//   } else {
//     alert("Gracias por tu tiempo.");
//   }
