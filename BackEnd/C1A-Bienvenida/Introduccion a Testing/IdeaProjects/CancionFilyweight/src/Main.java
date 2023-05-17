import com.company.Cancion;
import com.company.Flyweght;

public class Main {

    private static final String nombres[] = {"Amor","Corazon","Verano"};


    public static void main(String[] args) {

        for ( int i = 0 ; i < 30 ; i ++){
            Cancion cancion = Flyweght.obtenerCancion(nombreAleatorio());
            cancion.setGenero("Latinos");
            cancion.setArtista("Gloria Estefan");
            cancion.mostrarLista();
        }



    }

    private static String nombreAleatorio(){
        return nombres[(int) (Math.random()* nombres.length)];
    }

}