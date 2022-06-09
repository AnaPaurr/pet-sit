$(document).ready(function(){
});

async function agregarMascotas(){

    let datos = {};

    datos.mascota_NOMBRE = document.getElementById('txtNombre').value;
    datos.mascota_ESPECIE = document.getElementById('txtEspecie').value;
    datos.mascota_RAZA = document.getElementById('txtRaza').value;
    datos.mascota_GENERO = document.getElementById('txtGenero').value;
    datos.mascota_COLOR = document.getElementById('txtColor').value;
    var e = document.getElementById('CmbCliente');
    datos.cliente_NUMERO = e.value;

    e = document.getElementById("CmbRegistro");

    datos.registro_NUMERO = e.value;

    if(datos.mascota_NOMBRE==''){
        alert("Ingresa el nombre por favor");
        return;
    }

    if(datos.mascota_ESPECIE==''){
            alert("Ingresa la especie por favor");
            return;
        }

    if(datos.mascota_RAZA==''){
            alert("Ingresa la raza por favor");
            return;
        }

    if(datos.mascota_GENERO==''){
            alert("Ingresa el genero por favor");
            return;
        }

    if(datos.mascota_COLOR==''){
            alert("Ingresa el color por favor");
            return;
        }


    const request = await fetch('mascota',{
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