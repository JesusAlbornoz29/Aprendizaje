import java.time.LocalDate;

public class Main {

    public static void main(String[] args){
        Persona Jesus = new Persona("Albornoz","Jesus","jesus@gmail.com" , LocalDate.of(1993,01,05));

        if (Jesus.esMayorDeEdad()) {
            System.out.println("La persona es mayor de edad");
        } else {
            System.out.println("La persona es menor de edad");
        }
    }

}