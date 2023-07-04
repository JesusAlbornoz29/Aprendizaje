package com.example.FinalDesdeCero.repository;

import com.example.FinalDesdeCero.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPacienteRepository extends JpaRepository<Paciente, Long> {
}
