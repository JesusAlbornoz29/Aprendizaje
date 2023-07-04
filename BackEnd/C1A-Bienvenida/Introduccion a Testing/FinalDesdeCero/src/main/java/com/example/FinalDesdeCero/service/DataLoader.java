package com.example.FinalDesdeCero.service;

import com.example.FinalDesdeCero.entity.AppUser;
import com.example.FinalDesdeCero.entity.AppUserRole;
import com.example.FinalDesdeCero.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private final IUserRepository userRepository;

    @Autowired
    public DataLoader(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        BCryptPasswordEncoder passwordEncoder1 = new BCryptPasswordEncoder();
        String hashedPassword1 = passwordEncoder1.encode("password1");

        BCryptPasswordEncoder passwordEncoder2 = new BCryptPasswordEncoder();
        String hashedPassword2 = passwordEncoder2.encode("password2");

        userRepository.save(new AppUser("Diego","diego","diego@digital.com",hashedPassword1, AppUserRole.ADMIN));
        userRepository.save(new AppUser("Paula","paula","paula@digital.com",hashedPassword2,AppUserRole.USER));

    }
}
