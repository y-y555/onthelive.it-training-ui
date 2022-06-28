package demo.onthelive.training.lms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "demo.onthelive.training.lms")
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
