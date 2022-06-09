package com.example.proyecto.models;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "registro")
@ToString @EqualsAndHashCode
public class Registro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "REGISTRO_NUMERO")
    private int REGISTRO_NUMERO;

    @Getter @Setter @Column(name = "REGISTRO_FECHA_ENTRADA")
    private Date REGISTRO_FECHA_ENTRADA;

    @Getter @Setter @Column(name = "REGISTRO_FECHA_SALIDA")
    private Date REGISTRO_FECHA_SALIDA;

    @Getter @Setter @Column(name = "REGISTRO_HORA_ENTRADA")
    private Time REGISTRO_HORA_ENTRADA;

    @Getter @Setter @Column(name = "REGISTRO_HORA_SALIDA")
    private Time REGISTRO_HORA_SALIDA;

    @Getter @Setter @Column(name = "RESPONSABLE_NUMERO")
    private int RESPONSABLE_NUMERO;

}

