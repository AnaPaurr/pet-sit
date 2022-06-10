$(document).ready(function(){
});

async function agregarClientes(){

    let datos = {};

    datos.cliente_NOMBRE = document.getElementById('txtNombre').value;
    datos.cliente_APELLIDOS = document.getElementById('txtApellidos').value;
    datos.cliente_TELEFONO = document.getElementById('txtTelefono').value;
    datos.cliente_DIRECCION = document.getElementById('txtDireccion').value;
    datos.cliente_MUNICIPIO = document.getElementById('txtMunicipio').value;
    datos.cliente_CODIGO_POSTAL = document.getElementById('txtCodigo').value;

    if(datos.cliente_NOMBRE==''){
        alert("Ingresa el nombre por favor");
        return;
    }

    if(datos.cliente_APELLIDOS==''){
            alert("Ingresa los apellidos por favor");
            return;
        }

    if(datos.cliente_TELEFONO==''){
            alert("Ingresa el telefono por favor");
            return;
        }

    if(datos.cliente_DIRECCION==''){
            alert("Ingresa la direccion por favor");
            return;
        }

    if(datos.cliente_MUNICIPIO==''){
            alert("Ingresa el municipio por favor");
            return;
        }

    if(datos.cliente_CODIGO_POSTAL==''){
            alert("Ingresa el código postal por favor");
            return;
        }

    const request = await fetch('cliente',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

alert("Se ha registrado con exito");


}


