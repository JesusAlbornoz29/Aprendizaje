package com.example.FinalDesdeCero.repository;

import com.example.FinalDesdeCero.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface IUserRepository extends JpaRepository<AppUser, Long> {


    Optional<AppUser> findByEmail(String email);

}
