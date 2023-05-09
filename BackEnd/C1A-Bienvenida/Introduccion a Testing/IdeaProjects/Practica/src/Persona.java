import java.time.LocalDate;
import java.time.Period;

public class Persona {

    private String apellido;

    private String nombre;

    private String email;

    private LocalDate fechaDeNacimiento;

    public Persona(String apellido, String nombre, String email, LocalDate fechaDeNacimiento) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
        this.fechaDeNacimiento = fechaDeNacimiento;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getFechaDeNacimiento() {
        return fechaDeNacimiento;
    }

    public void setFechaDeNacimiento(LocalDate fechaDeNacimiento) {
        this.fechaDeNacimiento = fechaDeNacimiento;
    }

    //Un método que muestre el nombre completo de la siguiente manera: Apellido, Nombre.
    public String getNombreCompleto(){
        return apellido + ", " + nombre;
    }

    // Un método para calcular si la persona es mayor de 18 años.
    public boolean esMayorDeEdad () {
        LocalDate fechaActual = LocalDate.now();
        Period periodo = Period.between(fechaDeNacimiento, fechaActual);
        int edad = periodo.getYears();
        return edad >= 18;
    }



}
