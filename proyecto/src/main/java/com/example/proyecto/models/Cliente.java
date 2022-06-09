package com.example.proyecto.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "cliente")
@NamedStoredProcedureQuery(name = "editarTelefono", procedureName = "editarTelefono", resultClasses = {
        Cliente.class}, parameters = {
        @StoredProcedureParameter(name = "CLIENTE_NUMERO", type = Integer.class, mode = ParameterMode.IN),
        @StoredProcedureParameter(name = "CLIENTE_TELEFONO", type = String.class, mode = ParameterMode.IN)
}
)
@ToString @EqualsAndHashCode
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "CLIENTE_NUMERO")
    private int CLIENTE_NUMERO;

    @Getter @Setter @Column(name = "CLIENTE_NOMBRE")
    private String CLIENTE_NOMBRE;

    @Getter @Setter @Column(name = "CLIENTE_APELLIDOS")
    private String CLIENTE_APELLIDOS;

    @Getter @Setter @Column(name = "CLIENTE_TELEFONO")
    private String CLIENTE_TELEFONO;

    @Getter @Setter @Column(name = "CLIENTE_DIRECCION")
    private String CLIENTE_DIRECCION;

    @Getter @Setter @Column(name = "CLIENTE_MUNICIPIO")
    private String CLIENTE_MUNICIPIO;

    @Getter @Setter @Column(name = "CLIENTE_CODIGO_POSTAL")
    private int CLIENTE_CODIGO_POSTAL;
}
