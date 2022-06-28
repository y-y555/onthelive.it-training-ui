package demo.onthelive.training.lms.service;

import demo.onthelive.training.lms.exception.ErrorCode;
import demo.onthelive.training.lms.exception.LMSException;
import demo.onthelive.training.lms.model.user.LmsSimpleUser;
import demo.onthelive.training.lms.model.user.LmsUser;
import demo.onthelive.training.lms.model.user.support.LmsUserState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserAuthenticationProvider implements AuthenticationProvider {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserAuthenticationProvider(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Authentication authenticate(Authentication request) throws AuthenticationException {
        if(request.getCredentials() != null) {
            return authenticatedByUserEmailAndPassword(request);
        } else {
            return authenticatedByOAuthPlatform(request);
        }
    }

    public Authentication authenticatedByUserEmailAndPassword(Authentication request) {
        Assert.isInstanceOf(UsernamePasswordAuthenticationToken.class, request, "Only UsernamePasswordAuthenticationToken is supported");

//        UsernamePasswordAuthenticationToken result = null;
        final String userId = (String) request.getPrincipal();
        final String password = (String) request.getCredentials();

        final LmsUser lmsUser = userService.getUser(userId);
        if(lmsUser == null) {
            throw new UsernameNotFoundException("Username not found : " + userId);
        }

        //Todo 가입 대기중인 상태인지 체크하고 Exception 처리

        if ((password != null) && (password.length() > 0) && (passwordEncoder.matches(password, lmsUser.getPassword()))) {

            if(!lmsUser.isEnabled()) {
                if(lmsUser.getState() == LmsUserState.Wait) {
                    throw new LMSException(ErrorCode.NotAuthenticatedUser, "Not authenticated user");
                } else {
                    throw new DisabledException("User is not enabled : " + userId);
                }

            }

            final List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(lmsUser.getType().name()));

            UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(userId, password, authorities);
            result.setDetails(getSimpleUser(lmsUser));
            return result;
        } else {
            throw new BadCredentialsException("Bad credentials");
        }

    }

    public Authentication authenticatedByOAuthPlatform(Authentication request) {
        Assert.isInstanceOf(UsernamePasswordAuthenticationToken.class, request, "Only UsernamePasswordAuthenticationToken is supported");

//        UsernamePasswordAuthenticationToken result = null;
        final String userId = (String) request.getPrincipal();
        final String password = (String) request.getCredentials();

        final LmsUser user = userService.getUser(userId);
        if(user == null) {
            throw new UsernameNotFoundException("Username not found : " + userId);
        }

        if(!user.isEnabled()) {
            throw new DisabledException("User is not enabled : " + userId);
        }

        final List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getType().name()));
        UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(userId, password, authorities);
        result.setDetails(getSimpleUser(user));

        return result;
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(aClass);
    }

    private LmsSimpleUser getSimpleUser(LmsUser user) {
        return LmsSimpleUser.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .type(user.getType())
                .enabled(user.isEnabled())
                .shouldChangePassword(user.isShouldChangePassword())
                .allowEmail(user.isAllowEmail())
                .createdDatetime(user.getCreatedDatetime())
                .updatedDatetime(user.getUpdatedDatetime())
                .build();
    }
}
