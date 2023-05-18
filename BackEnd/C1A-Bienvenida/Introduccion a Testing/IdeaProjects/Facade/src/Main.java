import com.company.AerolineaA;
import com.company.AerolineaB;
import com.company.AerolineaC;
import com.company.service.IFacade;
import com.company.service.impl.FacadeImpl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class Main {
    public static void main(String[] args) throws ParseException {

        //Parseamos la fecha
        Date fecha1 = new SimpleDateFormat("yyyy-MM-dd").parse("2023-05-17");

        // Creamos una interfaz de facade
        IFacade iFacade = new FacadeImpl(new AerolineaA(), new AerolineaB(), new AerolineaC());

        // buscamos un vuelo
        List<Map<String,String>> resultado = iFacade.buscarVuelo(fecha1, "Uruguay", "Buenos Aires" );

        // Muestro el resultado
        resultado.forEach(System.out::println);
    
    }
}