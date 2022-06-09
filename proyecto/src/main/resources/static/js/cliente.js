$(document).ready(function(){
    mostrarClientes();
});


async function mostrarClientes(){

    const request = await fetch('clientes', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    });

    const clientes = await request.json();

    console.log(clientes);
}