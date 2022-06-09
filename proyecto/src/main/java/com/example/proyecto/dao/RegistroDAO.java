package com.example.proyecto.dao;

import com.example.proyecto.models.Registro;

import java.util.List;

public interface RegistroDAO {
    List<Registro> getRegistros();

    void eliminar(int registro_numero);

    void agregarRegistro(Registro registro);
}
