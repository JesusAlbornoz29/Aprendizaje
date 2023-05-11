

public class CocineroNoVeggie extends Cocinero{


    @Override
    protected void prepararIngredientes() {
        System.out.println("Preparando queso y jamon");
    }

    @Override
    protected void agregarIngredientes() {
        System.out.println("Agregando los ingredientes");
    }
}
