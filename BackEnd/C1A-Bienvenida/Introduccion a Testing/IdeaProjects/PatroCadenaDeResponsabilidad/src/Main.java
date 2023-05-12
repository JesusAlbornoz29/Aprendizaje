public class Main {
    public static void main(String[] args) {
        EmpleadoBanco empleado1 = new EjecutivoCuenta();
        EmpleadoBanco empleado2 = new Gerente();
        EmpleadoBanco empleado3 = new Director();


        empleado2.setSigEmpleadoBanco(empleado3);
        empleado1.setSigEmpleadoBanco(empleado2);

        empleado1.procesarSolicitud(78000);
    }
}