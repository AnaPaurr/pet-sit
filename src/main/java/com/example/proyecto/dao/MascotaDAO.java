package com.example.proyecto.dao;

import com.example.proyecto.models.Cliente;
import com.example.proyecto.models.Mascota;

import java.util.*;

public interface MascotaDAO {
    List<Mascota> getMascota();

    void eliminar(int mascota_numero);

    void agregarMascota(Mascota mascota);
}
