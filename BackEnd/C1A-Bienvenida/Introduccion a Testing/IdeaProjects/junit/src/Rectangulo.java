public class Rectangulo {

    private int ancho;

    private int alto;

    public Rectangulo (int ancho, int alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    public int area() {
        return ancho * alto;
    }

    public int perimetro () {
        return 2 * ancho + 2 * alto;
    }

}
