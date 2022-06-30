package demo.onthelive.training.lms.controller;

import demo.onthelive.training.lms.model.user.LmsUserConfig;
import demo.onthelive.training.lms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{userId}/configs")
    public List<LmsUserConfig> getUserConfigs(HttpServletRequest request, HttpServletResponse response, @PathVariable Long userId) {
        return userService.getUserConfigs(userId);
    }
}
