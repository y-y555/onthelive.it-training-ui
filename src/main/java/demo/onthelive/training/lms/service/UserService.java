package demo.onthelive.training.lms.service;

import demo.onthelive.training.lms.exception.ErrorCode;
import demo.onthelive.training.lms.exception.LMSException;
import demo.onthelive.training.lms.model.user.LmsSimpleUser;
import demo.onthelive.training.lms.model.user.LmsUser;
import demo.onthelive.training.lms.model.user.support.LmsUserState;
import demo.onthelive.training.lms.model.user.support.LmsUserType;
import demo.onthelive.training.lms.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static demo.onthelive.training.lms.exception.ErrorCode.*;

@Slf4j
@Service
public class UserService {

    private static final String DEFAULT_ADMIN_ID = "admin@onthelive.kr";
    private static final String DEFAULT_ADMIN_PASSWORD = "dnflRlfl!1535";
    private static final String DEFAULT_ADMIN_NAME = "administrator";
    private static final Map<String, Boolean> notAcceptableIdMap = new HashMap<>();
    static {
        notAcceptableIdMap.put("check", false);
        notAcceptableIdMap.put("signin", false);
        notAcceptableIdMap.put("signout", false);
        notAcceptableIdMap.put("signcheck", false);
        notAcceptableIdMap.put("login", false);
        notAcceptableIdMap.put("logout", false);
        notAcceptableIdMap.put("logincheck", false);
    }

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;

    @Autowired
    public UserService(UserRepository repository,
                       PasswordEncoder passwordEncoder,
                       ModelMapper modelMapper) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.modelMapper = modelMapper;
    }

    @PostConstruct
    public void checkAdmin() {
        final List<LmsUser> admins = getAllUsersByType(LmsUserType.Admin);

        if((admins == null) || (admins.size() < 1)) {
            log.info("Admin account not exists : create a default admin account");

            final LmsUser newAdmin = LmsUser.builder()
                    .email(DEFAULT_ADMIN_ID)
                    .password(DEFAULT_ADMIN_PASSWORD)
                    .name(DEFAULT_ADMIN_NAME)
                    .type(LmsUserType.Admin)
                    .state(LmsUserState.Normal)
                    .enabled(true)
                    .shouldChangePassword(false)
                    .allowEmail(true)
                    .build();

            createNewUser(newAdmin);
        }
    }

    public LmsUser getUser(String email) {
        return repository.selectUser(email);
    }

    public LmsSimpleUser getUserById(Long id) {
        if(id == null){
            throw new LMSException(CanNotFoundData, "Can Not Found User");
        }
        return repository.selectUserById(id);
    }

    public List<LmsUser> getAllUsersByType(LmsUserType type) {
        return repository.selectAllUsersByType(type);
    }

    public List<LmsUser> getUsersByType(LmsUserType type, int rowsPerPage, int startRow) {
        return repository.selectUsersWhereType(type, rowsPerPage, startRow);
    }

    public LmsUser createNewUser(LmsUser user) {
        log.error("createNewUser = {} ", user);

        if(user == null){
            throw new NullPointerException("Can Not be null LmsUser account data");
        }

        LmsUser lmsUser = getUser(user.getEmail());

        if(lmsUser != null) {
            if(lmsUser.getState() == LmsUserState.Wait) {
                throw new LMSException(ErrorCode.NotAuthenticatedUser, "Not authenticated user");
            } else if(lmsUser.getState() != LmsUserState.Withdraw) {
                throw new LMSException(AlreadyRegisteredLmsUser, "Already Registered LmsUser");
            }
        }

        if(isNotAcceptableId(user.getEmail())) {
            throw new LMSException(ErrorCode.NotAcceptableId, "Not acceptable id : " + user.getEmail());
        }

        if(user.getType() == null) {
            user.setType(LmsUserType.User);
        }

        if(user.getPassword() != null) {
            final String encodedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encodedPassword);
        }

        if(user.getState() == null) {
            user.setState(LmsUserState.Wait);
        }


        repository.insertUser(user);

        return user;
    }

    private boolean isNotAcceptableId(String id) {
        return (id == null) || (id.length() < 1) || (id.contains(" ")) || (notAcceptableIdMap.containsKey(id.toLowerCase()));
    }

    public LmsSimpleUser checkUserEmail(String userEmail) {
        log.trace("Start... UserService.checkUserEmail userEmail={}", userEmail);

        LmsSimpleUser userByEmail = repository.checkUserEmail(userEmail);
        log.debug("End... UserService.checkUserEmail userByEmail={}", userByEmail);

        return userByEmail;
    }


    private String localDateTimeFormatter(String value) {
        log.trace("localDateTimeFormatter formatting value = {}", value);
        String sliceStr = value;
        if(value.length() > 18){
            sliceStr = value.substring(0, 19);
        }
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        log.trace("localDateTimeFormatter formatting result = {}", sliceStr);
        return sliceStr;
    }

}
