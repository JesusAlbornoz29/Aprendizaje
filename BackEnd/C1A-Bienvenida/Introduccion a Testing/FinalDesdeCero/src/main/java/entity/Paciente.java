package entity;

import org.springframework.stereotype.Controller;

import java.util.Date;

@Controller
public class Paciente {
    private Integer id;
    private String apellido;
    private String nombre;
    private Domicilio domicilio;
    private String dni;
    private Date fechaDeAlta;

    //Constructor vacio

    public Paciente() {
    }

    // Constructor sin id

    public Paciente(String apellido, String nombre, Domicilio domicilio, String dni, Date fechaDeAlta) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.dni = dni;
        this.fechaDeAlta = fechaDeAlta;
    }

    // constructor con id

    public Paciente(int id, String apellido, String nombre, Domicilio domicilio, String dni, Date fechaDeAlta) {
        this.id = id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.dni = dni;
        this.fechaDeAlta = fechaDeAlta;
    }

    // Getter y Setters

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Domicilio getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(Domicilio domicilio) {
        this.domicilio = domicilio;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public Date getFechaDeAlta() {
        return fechaDeAlta;
    }

    public void setFechaDeAlta(Date fechaDeAlta) {
        this.fechaDeAlta = fechaDeAlta;
    }

    // toString

    @Override
    public String toString() {
        return "Paciente{" +
                "id=" + id +
                ", apellido='" + apellido + '\'' +
                ", nombre='" + nombre + '\'' +
                ", domicilio=" + domicilio +
                ", dni='" + dni + '\'' +
                ", fechaDeAlta=" + fechaDeAlta +
                '}';
    }
}
