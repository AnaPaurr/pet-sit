//Funcion para mostrar las mascotas
$(document).ready(function () {
	mostrarMascotas()
});
async function mostrarMascotas(){
	const request = await fetch('mascotas',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });

    const mascotas = await request.json();

    for(mascota of mascotas){

     let boton = '<a href="#"><button onclick="eliminarMascota('+ mascota.mascota_NUMERO +')" class="btn btn-primary" type="button">Eliminar </button></a>';

    	let mascotasHTML = '<tr>'+
          '<th scope="row">'+ mascota.mascota_NUMERO +'</th>'+
          '<td>'+ mascota.mascota_NOMBRE +'</td>'+
          '<td>'+ mascota.mascota_ESPECIE +'</td>'+
          '<td>'+ mascota.mascota_RAZA +'</td>'+
          '<td>'+ mascota.mascota_GENERO +'</td>'+
          '<td>'+ mascota.mascota_COLOR +'</td>'+

          '<td>'+ boton +'</td>'+
        '</tr>';
        document.querySelector('#cuerpo2').innerHTML += mascotasHTML;
    }
}
async function eliminarMascota(mascota_NUMERO){

if(!confirm("¿Desea eliminar el mascota?")){
    return;
}