package com.example.proyecto.controllers;

import com.example.proyecto.dao.MascotaDAO;
import com.example.proyecto.models.Cliente;
import com.example.proyecto.models.Mascota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MascotaController {

@Autowired
    private MascotaDAO mascotaDAO;

@RequestMapping(value = "mascotas", method = RequestMethod.GET)
    public List<Mascota> getMascotas(){return mascotaDAO.getMascota();}  //getMascotas

    @RequestMapping(value = "api/mascotas/{mascota_NUMERO}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable int mascota_NUMERO){
    mascotaDAO.eliminar(mascota_NUMERO);
    }

    @RequestMapping(value = "mascota", method = RequestMethod.POST)
    public void agregar(@RequestBody Mascota mascota){
        mascotaDAO.agregarMascota(mascota);
    }

}
