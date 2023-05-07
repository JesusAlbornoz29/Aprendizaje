public class Auto {
    private StateAuto estado;
    // Estado del auto (apagado, en marcha, sin combustible)
    private int velocidadActual = 0; // Velocidad actual del auto
    private int combustibleActual = 0; // Combustible restante

    //Constructor
    public Auto (int combustible){
        this.setCombustibleActual(combustible);
        // Estado inicial (apagado)
        this.setEstado(new Apagado(this));
    }

    public void acelerar(){
        getEstado().acelerar();
        System.out.println("Velocidad actual: "+ getVelocidadActual()+ ". Combustible restante: "+ getCombustibleActual());
    }

    public void frenar(){
        getEstado().frenar();
    }
    public void contacto() {
        getEstado().contacto();
    }
    public void modificarVelocidad(int kmh){
        setVelocidadActual(getVelocidadActual() + kmh);
    }
    public void modificarCombustible(int decilitros) {
        setCombustibleActual(getCombustibleActual() + decilitros);
    }

    public int getVelocidadActual(){
        return velocidadActual;
    }
    public void setVelocidadActual(int velocidadActual){
        this.velocidadActual = velocidadActual;
    }
    public int getCombustibleActual(){
        return combustibleActual;
    }
    public void setCombustibleActual(int combustibleActual){
        this.combustibleActual = combustibleActual;
    }
    public StateAuto getEstado(){
        return estado;
    }
    public void setEstado(StateAuto estado){
        this.estado = estado;
    }
}
