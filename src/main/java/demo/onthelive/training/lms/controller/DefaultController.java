package demo.onthelive.training.lms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DefaultController {
    @RequestMapping({"/",
                     "/home",
                     "/rooms",
                     "/roomType",
                     "/roomCreate",
                     "/roomModify",
                     "/scheduleDetail",
                     "/classWindow",
                     "/contentLecture",
                     "/serviceCenter",
                     "/profileSettings",
                     "/profileView",
                     "/class",
                     "/login",
                     "/signup",
                     "/search",
                     "/passwordFind",
                     "/signupDialog",
                     "/socialAgree",
                     "/passwordReset",
                     "/passwordComplete",
                     "/invitation",
    })
    public String getUIResource() {
        return "forward:/index.html";
    }
}