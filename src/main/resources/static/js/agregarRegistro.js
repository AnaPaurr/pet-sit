$(document).ready(function(){
});

async function agregarRegistros(){

    let datos = {};

    datos.registro_FECHA_ENTRADA = new Date(document.getElementById('txtFechaEntrada').value);
    datos.registro_FECHA_SALIDA = new Date(document.getElementById('txtFechaSalida').value);
    datos.registro_HORA_ENTRADA = new Date(document.getElementById('txtHoraEntrada').value);
    datos.registro_HORA_SALIDA = new Date(document.getElementById('txtHoraSalida').value);
    //datos.responsable_RESPONSABLE = document.getElementById('txtResponsable').value;

    if(datos.registro_FFECHA_ENTRADA==''){
        alert("Ingresa la fecha de entrada por favor");
        return;
    }

    if(datos.registro_FECHA_SALIDA==''){
            alert("Ingresa la fecha de salida por favor");
            return;
        }

    if(datos.registro_HORA_ENTRADA==''){
            alert("Ingresa la hora de entrada por favor");
            return;
        }

    if(datos.registro_HORA_SALIDA==''){
            alert("Ingresa la hora de salida por favor");
            return;
        }

    const request = await fetch('registro/crea',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

alert("Se ha registrado su cita con exito");


}
