$(document).ready(function () {
	mostrarClientes()
	mostrarMascotas()
	//setCmbClientes()
	mostrarRegistros()
});

//Funcion para mostrar los clientes

async function mostrarClientes(){
	const request = await fetch('clientes',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });

    const clientes = await request.json();



    for(cliente of clientes){
    let boton = '<a href="#"><button onclick="eliminarCliente('+ cliente.cliente_NUMERO +')" class="btn btn-primary" type="button">Eliminar </button></a>';
    let botonE = '<a href="editar.html"><button onclick="localStorage.id='+ cliente.cliente_NUMERO +'" class="btn btn-primary" type="button">Editar </button></a>';

    	let clientesHTML = '<tr>'+
          '<th scope="row">'+ cliente.cliente_NUMERO +'</th>'+
          '<td>'+ cliente.cliente_NOMBRE +'</td>'+
          '<td>'+ cliente.cliente_APELLIDOS +'</td>'+
          '<td>'+ cliente.cliente_TELEFONO +'</td>'+
          '<td>'+ cliente.cliente_DIRECCION +'</td>'+
          '<td>'+ cliente.cliente_MUNICIPIO +'</td>'+
          '<td>'+ cliente.cliente_CODIGO_POSTAL +'</td>'+
          '<td>'+ boton + '<p>   </p>'+ botonE +'</td>'+

        '</tr>';
        document.querySelector('#cuerpo').innerHTML += clientesHTML;
    }
}
//Fin de la funcion mostrar clientes



//Funcion para eliminar clientes
async function eliminarCliente(cliente_NUMERO){

if(!confirm("¿Desea eliminar el cliente?")){
    return;
}

const request = await fetch('api/clientes/'+ cliente_NUMERO,{
        method:'DELETE',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });
    location.reload();
}
//Fin de la funcion para eliminar clientes



//Funcion para mostrar mascotas
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
          '<td>'+ mascota.cliente_NUMERO +'</td>'+
          '<td>'+ mascota.registro_NUMERO +'</td>'+
          '<td>'+ boton +'</td>'+
        '</tr>';
        document.querySelector('#cuerpo2').innerHTML += mascotasHTML;
    }
}
//Fin de la funcion para mostrar mascotas



//Funcion para eliminar mascotas
async function eliminarMascota(mascota_NUMERO){

if(!confirm("¿Desea eliminar la mascota?")){
    return;
}

const request = await fetch('api/mascotas/'+ mascota_NUMERO,{
        method:'DELETE',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });
    location.reload();
}
//Fin de la funcion para eliminar mascotas


//Funcion para mostrar los registros
async function mostrarRegistros(){
	const request = await fetch('registros',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const registros = await request.json();

    for(registro of registros){

    let boton = '<a href="#"><button onclick="eliminarRegistro('+ registro.registro_NUMERO +')" class="btn btn-primary" type="button">Eliminar </button></a>';

    	let registrosHTML = '<tr>'+
          '<th scope="row">'+ registro.registro_NUMERO +'</th>'+
          '<td>'+ registro.registro_FECHA_ENTRADA +'</td>'+
          '<td>'+ registro.registro_FECHA_SALIDA +'</td>'+
          '<td>'+ registro.registro_HORA_ENTRADA +'</td>'+
          '<td>'+ registro.registro_HORA_SALIDA +'</td>'+
         // '<td>'+ registro.responsable_NUMERO +'</td>'+
          '<td>'+ boton +'</td>'+
        '</tr>';
        document.querySelector('#cuerpo3').innerHTML += registrosHTML;
    }
}
//Fin de la funcion para mostrar registros


//Funcion para eliminar registros
async function eliminarRegistro(registro_NUMERO){

if(!confirm("¿Desea eliminar el registro?")){
    return;
}

const request = await fetch('api/registros/'+ registro_NUMERO,{
        method:'DELETE',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });
    location.reload();
}
//Fin de la funcion para eliminar registros