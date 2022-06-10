package com.example.proyecto.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "cliente")
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
