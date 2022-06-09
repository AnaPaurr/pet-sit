//Funcion para agregar el Combo Box para seleccionar el cliente dueño de la mascota que se esta registrando
$(document).ready(function () {
	setCmbClientes()
});
   async function setCmbClientes(){
      const requestCliente = await fetch("clientes",{
        method:"GET",
        haders:{
    'Accept': 'application/json',
            'Context-Type': 'application/json'
             }
             });

    const clientes = await requestCliente.json();

        let i = 1;

        let clienteCabeza = '<option selected disabled value="">-Cliente-</option>';

        let clienteCuerpo = '';

        for(cliente of clientes){
            clienteCuerpo += '<option value="'+ cliente.cliente_NUMERO +'">'+ cliente.cliente_NOMBRE+'</option>';
            i++;
        }
    let imprimir = clienteCabeza + clienteCuerpo;

    document.querySelector('#CmbCliente').innerHTML = imprimir;
    }
    //Fin de la funcion del combo box



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
            registroCuerpo += '<option value="'+ registro.registro_NUMERO +'">'+ registro.registro_NUMERO+'</option>';
            i++;
        }
    let imprimir = registroCabeza + registroCuerpo;

    document.querySelector('#CmbRegistro').innerHTML = imprimir;
    }
    //Fin de la funcion del combo box



    //Funcion para agregar el Combo Box para seleccionar el id del responsable que los recibira en la cita.
    $(document).ready(function () {
    	setCmbResponsable()
    });
       async function setCmbResponsable(){
          const requestResponsable = await fetch("responsables",{
            method:"GET",
            haders:{
        'Accept': 'application/json',
                'Context-Type': 'application/json'
                 }
                 });

        const responsables = await requestResponsable.json();

            let i = 1;

            let responsableCabeza = '<option selected disabled value="">-Responsable-</option>';

            let responsableCuerpo = '';

            for(responsable of responsables){
                responsableCuerpo += '<option value="'+ responsable.responsable_NUMERO +'">'+ responsable.responsable_NUMERO+'</option>';
                i++;
            }
        let imprimir = responsableCabeza + responsableCuerpo;

        document.querySelector('#CmbResponsable').innerHTML = imprimir;
        }
        //Fin de la funcion del combo box