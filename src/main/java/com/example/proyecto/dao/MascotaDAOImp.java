package com.example.proyecto.dao;

import com.example.proyecto.models.Cliente;
import com.example.proyecto.models.Mascota;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import javax.persistence.PersistenceContext;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
@Transactional
public class MascotaDAOImp implements MascotaDAO {
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Mascota> getMascota() {
        String query = "FROM Mascota";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(int mascota_numero) {
        Mascota mascota = entityManager.find(Mascota.class, mascota_numero);
        entityManager.remove(mascota);
    }

    @Override
    public void agregarMascota(Mascota mascota) {
        entityManager.merge(mascota);
    }
}
