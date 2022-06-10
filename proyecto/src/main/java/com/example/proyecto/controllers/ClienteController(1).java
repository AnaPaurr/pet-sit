package com.example.proyecto.controllers;

import com.example.proyecto.dao.ClienteDAO;
import com.example.proyecto.models.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClienteController {

    @Autowired
    private ClienteDAO clienteDAO;

    @RequestMapping(value = "clientes", method = RequestMethod.GET)
    public List<Cliente> getClientes() {
        return clienteDAO.getClientes();
    }
}
