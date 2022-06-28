package demo.onthelive.training.lms.controller;

import demo.onthelive.training.lms.exception.ErrorCode;
import demo.onthelive.training.lms.exception.LMSException;
import demo.onthelive.training.lms.model.user.LmsSimpleUser;
import demo.onthelive.training.lms.model.user.LmsUser;
import demo.onthelive.training.lms.model.user.LmsUserToken;
import demo.onthelive.training.lms.service.AuthenticationService;
import demo.onthelive.training.lms.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
@RequestMapping("/api/v1/authentications")
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final UserService userService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService, UserService userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
    }

    @PostMapping("/signin")
    public ResponseEntity<LmsUserToken> getLoginToken(HttpServletRequest httpRequest, @RequestBody LmsUser account) {
        final LmsUserToken token = authenticationService.getLoginToken(account.getEmail(), account.getPassword(), httpRequest);

        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @PostMapping("/signout")
    public ResponseEntity logout(HttpServletRequest httpRequest, HttpServletResponse resp, @RequestBody LmsUser user) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null){
            new SecurityContextLogoutHandler().logout(httpRequest, resp, auth);
        }

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/signcheck")
    public ResponseEntity<LmsSimpleUser> check(HttpServletRequest httpRequest) {
        final LmsSimpleUser user = authenticationService.getUser();

        if(user == null) {
            throw new LMSException(ErrorCode.CanNotFoundUser, "Can not found a user");
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> createNewUser(HttpServletRequest httpRequest, @RequestBody LmsUser account) {
        authenticationService.createUser(account);
        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping("/check/exist/{email}")
    public ResponseEntity<?> checkExistEmail(HttpServletRequest httpServletRequest,
                               @PathVariable String email) {
        boolean checkResult = authenticationService.checkExistEmail(email);

        if(checkResult) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

}
