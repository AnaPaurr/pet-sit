//Funcion para mostrar los registros
async function mostrarRegistros(){
	const request = await fetch('registros',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });

    const registros = await request.json();

    for(registro of registros){

    let boton = '<a href="#"><button onclick="eliminarRegistro('+ registro.registro_NUMERO +')" class="btn btn-primary" type="button">Eliminar </button></a>';

    	let registrosHTML = '<tr>'+
          '<th scope="row">'+ registro.registro_NUMERO +'</th>'+
          '<td>'+ registro.registro_FEHCA_ENTRADA +'</td>'+
          '<td>'+ registro.registro_FECHA_SALIDA +'</td>'+
          '<td>'+ registro.registro_HORA_ENTRADA +'</td>'+
          '<td>'+ registro.registro_HORA_SALIDA +'</td>'+
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