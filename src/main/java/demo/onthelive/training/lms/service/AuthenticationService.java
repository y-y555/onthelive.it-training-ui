package demo.onthelive.training.lms.service;

import demo.onthelive.training.lms.exception.ErrorCode;
import demo.onthelive.training.lms.exception.LMSException;
import demo.onthelive.training.lms.model.user.LmsSimpleUser;
import demo.onthelive.training.lms.model.user.LmsUser;
import demo.onthelive.training.lms.model.user.LmsUserToken;
import demo.onthelive.training.lms.model.user.support.LmsUserState;
import demo.onthelive.training.lms.repository.AuthenticationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@Service
public class AuthenticationService {
    public static final int MAX_INACTIVE_INTERVAL = 3600; // 6 hour
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final AuthenticationRepository authenticationRepository;

    @Autowired
    public AuthenticationService(AuthenticationManager authenticationManager, UserService userService, AuthenticationRepository authenticationRepository) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.authenticationRepository = authenticationRepository;
    }

    public LmsUserToken getLoginToken(String id, String rawPassword, HttpServletRequest request) {
        HttpSession session = request.getSession(true);
        session.setMaxInactiveInterval(MAX_INACTIVE_INTERVAL);
        final LmsUserToken token = getToken(id, rawPassword, session);

        if(token != null) {
            LmsUser loginUser = userService.getUser(id);

            destroySession(id);
        } else {
            throw new LMSException(ErrorCode.AuthenticationFail, "UNAUTHORIZED");
        }

        return token;
    }

    private LmsUserToken getToken(String id, String rawPassword, HttpSession session) {
        final Authentication request = new UsernamePasswordAuthenticationToken(id, rawPassword);

        final Authentication result = authenticationManager.authenticate(request);

        LmsUserToken token = null;
        if ((result != null) && (result.isAuthenticated())) {
            SecurityContextHolder.getContext().setAuthentication(result);
            token = LmsUserToken.builder()
                    .token(session.getId())
                    .user((LmsSimpleUser) result.getDetails())
                    .build();
        }

        return token;
    }

    public LmsSimpleUser getUser() {

        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        final LmsSimpleUser convertedLmsUser = (LmsSimpleUser) authentication.getDetails();
//        final LmsSimpleUser findLmsUser = userService.checkUserEmail(convertedLmsUser.getEmail());

        return (LmsSimpleUser) authentication.getDetails();
    }

    @Transactional
    public void createUser(LmsUser account) {
        try {
            userService.createNewUser(account);
        } catch (Exception e) {
            log.error("Failed createUser error message = {}", e.getMessage());
            throw new LMSException(ErrorCode.CanNotInsertData, "Failed createUser");
        }


    }

    @Transactional
    public void destroySession(String email) {
        authenticationRepository.destroySessionAttributes(email);
        authenticationRepository.destroySession(email);
    }

    public boolean checkExistEmail(String email) {
        LmsSimpleUser checkEmailResult = userService.checkUserEmail(email);
        boolean isExistEmail = (checkEmailResult != null) && (checkEmailResult.getState() != LmsUserState.Withdraw && checkEmailResult.getState() != LmsUserState.Wait);

        return isExistEmail;
    }
}
