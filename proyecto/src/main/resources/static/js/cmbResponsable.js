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