package com.example.proyecto.controllers;

import com.example.proyecto.dao.ClienteDAO;
import com.example.proyecto.models.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClienteController {

    @Autowired
    private ClienteDAO clienteDAO;

    @RequestMapping(value = "clientes", method = RequestMethod.GET)
    public List<Cliente> getClientes() {
        return clienteDAO.getClientes();
    }


    @RequestMapping(value = "api/clientes/{cliente_NUMERO}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable int cliente_NUMERO){clienteDAO.eliminar(cliente_NUMERO);}

    @RequestMapping(value = "cliente", method = RequestMethod.POST)
    public void agregar(@RequestBody Cliente cliente){
        clienteDAO.agregarCliente(cliente);
    }

    @RequestMapping(value = "editar", method = RequestMethod.POST)
    public void editar(@RequestBody Cliente cliente){
        clienteDAO.editar(cliente);
    }
}
