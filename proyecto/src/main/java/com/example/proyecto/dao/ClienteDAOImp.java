package com.example.proyecto.dao;

import com.example.proyecto.models.Cliente;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.util.List;

@Repository
@Transactional
public class ClienteDAOImp implements ClienteDAO {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Cliente> getClientes() {
        String query = "FROM Cliente";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(int cliente_numero) {
        Cliente cliente = entityManager.find(Cliente.class, cliente_numero);
        entityManager.remove(cliente);
    }

    @Override
    public void agregarCliente(Cliente cliente) {
        entityManager.merge(cliente);
    }

    @Override
    public void editar(Cliente cliente) {

       // int identificador=cliente.getCLIENTE_NUMERO();
        //Cliente miCliente = entityManager.find(Cliente.class,identificador);
        //String tel = cliente.getCLIENTE_TELEFONO();
        //miCliente.setCLIENTE_TELEFONO(tel);

        var CLIENTE_N = cliente.getCLIENTE_NUMERO();
        var CLIENTE_T =  cliente.getCLIENTE_TELEFONO();

        StoredProcedureQuery query = entityManager.createNamedStoredProcedureQuery("editarTelefono");
        query.setParameter("CLIENTE_NUMERO", CLIENTE_N);
        query.setParameter("CLIENTE_TELEFONO", CLIENTE_T);

        query.execute();
    }
}
