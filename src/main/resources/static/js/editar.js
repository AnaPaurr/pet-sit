$(document).ready(function () {
	});

//Funcion para mostrar los clientes

async function editar(){
      let id = localStorage.id;

      let contenedor = {};
      contenedor.cliente_NUMERO = id;
      contenedor.cliente_TELEFONO = document.getElementById('txtTelefono').value;

      const request = await fetch('editar',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contenedor)
      });
alert("Ya se actualizo el telefono");
 }
//Fin de la funcion mostrar clientes