package repository;

import java.sql.SQLException;
import java.util.List;

public interface IDAO <T> {
    T agregar (T t) throws SQLException;
    T actualizar (T t) throws SQLException;
    void eliminar (Integer id) throws SQLException;
    T buscar(Integer id);
    List<T> listarTodos();
}
