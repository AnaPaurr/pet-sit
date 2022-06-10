//Funcion para agregar el Combo Box para seleccionar el registro de la mascota.
$(document).ready(function () {
	setCmbRegistros()
});
   async function setCmbRegistros(){
      const requestRegistro = await fetch("registros",{
        method:"GET",
        haders:{
    'Accept': 'application/json',
            'Context-Type': 'application/json'
             }
             });

    const registros = await requestRegistro.json();

        let i = 1;

        let registroCabeza = '<option selected disabled value="">-Registro-</option>';

        let registroCuerpo = '';

        for(registro of registros){
            registroCuerpo += '<option value="'+ i +'">'+ registro.registro_NUMERO+'</option>';
            i++;
        }
    let imprimir = registroCabeza + registroCuerpo;

    document.querySelector('#CmbRegistro').innerHTML = imprimir;
    }
    //Fin de la funcion del combo box