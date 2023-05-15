package main.java.com;

public class Circulo {

    private String color;

    private double radio;

    private String tamanio;

    public Circulo(String color) {
        this.color = color;
        this.radio = radio;
        this.tamanio = tamanio;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getRadio() {
        return radio;
    }

    public void setRadio(double radio) {
        this.radio = radio;
    }

    public String getTamanio() {
        return tamanio;
    }

    public void setTamanio(String tamanio) {
        this.tamanio = tamanio;
    }

    public void tamanio(String s) {
    }

    public void dibujar(){
        System.out.println("Dibujamos objeto color: "+ color);
    }
}
