import java.util.concurrent.ExecutionException;

public class Main {
    public static void main(String[] args) {

        try {
            Gaseosa gs1 = GaseosaFactory.construir("Coca");
            Gaseosa gs2 = GaseosaFactory.construir("Naranja");
            Gaseosa gs3 = GaseosaFactory.construir("Uva");
        } catch ( Exception e){
            System.out.println("!Exception encontrada!: "+ e);
        }

    }
}