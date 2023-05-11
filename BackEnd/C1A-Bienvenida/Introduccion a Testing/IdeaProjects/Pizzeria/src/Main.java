public class Main {
    public static void main(String[] args) {

    Cocinero vegano = new CocineroVeggie();
    Cocinero noVegano = new CocineroNoVeggie();


    vegano.hacerPizza();
    noVegano.hacerPizza();
    }
}