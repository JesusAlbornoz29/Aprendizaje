public class GaseosaFactory {
    public static Gaseosa construir (String tipo) {

        switch (tipo) {
            case "Coca":
                return new GaseosaCola();
            case "Naranka":
                return new GaseosaNaranja();
            default:
                System.out.println("Ups, no encontramos este objeto para construir");
        }
    }
}
