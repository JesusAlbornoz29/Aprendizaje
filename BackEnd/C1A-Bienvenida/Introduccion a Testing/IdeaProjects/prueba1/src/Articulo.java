public class Articulo {
    // Atributos
    private String descripcion;
    private double precioVenta;
    private int stock;

    // Constructor
    public Articulo(String descripcion, double precioVenta, int stock) {
        this.descripcion = descripcion;
        this.precioVenta = precioVenta;
        this.stock = stock;
    }

    // Metodos


    public boolean getStock() {
        return stock>0;
    }

    public double getPrecioVenta(){
        return precioVenta;
    }
}
