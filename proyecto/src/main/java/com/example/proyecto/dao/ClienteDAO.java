package com.example.proyecto.dao;

import com.example.proyecto.models.Cliente;

import java.util.*;

public interface ClienteDAO {
    List<Cliente> getClientes();

    void eliminar(int cliente_numero);

    void agregarCliente(Cliente cliente);

    void editar(Cliente cliente);
}
