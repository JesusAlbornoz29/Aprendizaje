public class Main {

    public static void main (String[] args){

        Articulo articulo = new Articulo("Articulo 1",100.00,1100);

        if (articulo.getStock())
        {
            System.out.println("Hay stock disponible");
        }

        System.out.println("El precio de venta es: "+articulo.getPrecioVenta());



    }


}
