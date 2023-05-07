public class Dios {
    private static Dios instancia;

    private Dios(){
    }

    /* Esta tecnica se llama iniciacion tardia
    hasta que no se invoque el metodo getInstancia
    no se crea ningun objeto en memoria.*/

    public static Dios getInstance(){
        if (instancia == null)
            instancia = new Dios();
        // se puede omitir el if
        return instancia;
    }


    public String pedir(String pedido){
        return "tu pedido fue escuchado: " + pedido;
    }
}
