package main.java.com;

public class Test {

    private static final String colores[] = {"Rojo","Azul","Verde","Negro"};
    public static void main (String[] args) {
        for ( int i = 0; i <100; i++){
            Circulo circulo = FlyweightFactory.obtenerCirculo(colorAleatorio());
            circulo.setRadio(i + 5);
            circulo.tamanio("Tamanio : " + i * 2);
            circulo.dibujar();
        }
    }


    private static String colorAleatorio(){
        return colores[(int)(Math.random()*colores.length)];
    }
}
