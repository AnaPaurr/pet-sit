package com.example.proyecto.dao;

import com.example.proyecto.models.Cliente;
import com.example.proyecto.models.Registro;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class RegistroDAOImp implements RegistroDAO{

    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Registro> getRegistros() {
        String query = "FROM Registro";
         return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(int registro_numero) {
        Registro registro = entityManager.find(Registro.class, registro_numero);
        entityManager.remove(registro);
    }

    @Override
    public void agregarRegistro(Registro registro) {
        entityManager.merge(registro);
    }
}
