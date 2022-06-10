package com.example.proyecto.models;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;


@Entity
@Table(name = "mascota")
@ToString @EqualsAndHashCode
public class Mascota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "MASCOTA_NUMERO")
    private int MASCOTA_NUMERO;

    @Getter @Setter @Column(name = "MASCOTA_NOMBRE")
    private String MASCOTA_NOMBRE;

    @Getter @Setter @Column(name = "MASCOTA_ESPECIE")
    private String MASCOTA_ESPECIE;

    @Getter @Setter @Column(name = "MASCOTA_RAZA")
    private String MASCOTA_RAZA;

    @Getter @Setter @Column(name = "MASCOTA_GENERO")
    private String MASCOTA_GENERO;

    @Getter @Setter @Column(name = "MASCOTA_COLOR")
    private String MASCOTA_COLOR;

    @Getter @Setter @Column(name = "CLIENTE_NUMERO")
    private int CLIENTE_NUMERO;

    @Getter @Setter @Column(name = "REGISTRO_NUMERO")
    private int REGISTRO_NUMERO;
}
