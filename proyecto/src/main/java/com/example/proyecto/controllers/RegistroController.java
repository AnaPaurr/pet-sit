package com.example.proyecto.controllers;


import com.example.proyecto.dao.ClienteDAO;
import com.example.proyecto.dao.RegistroDAO;
import com.example.proyecto.models.Cliente;
import com.example.proyecto.models.Registro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RegistroController {

    @Autowired

    private RegistroDAO registroDAO;

    @RequestMapping(value = "registros", method = RequestMethod.GET)
    public List<Registro> getRegistros(){return registroDAO.getRegistros();}

    @RequestMapping(value = "api/registro/{registro_NUMERO}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable int registro_NUMERO){registroDAO.eliminar(registro_NUMERO);}

    @RequestMapping(value = "registro", method = RequestMethod.POST)
    public void agregar(@RequestBody Registro registro){
        registroDAO.agregarRegistro(registro);
    }
}
