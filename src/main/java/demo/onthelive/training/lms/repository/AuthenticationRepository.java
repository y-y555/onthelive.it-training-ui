package demo.onthelive.training.lms.repository;

import demo.onthelive.training.lms.repository.mapper.AuthenticationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AuthenticationRepository {
    private AuthenticationMapper mapper;

    @Autowired
    public AuthenticationRepository(AuthenticationMapper mapper) {
        this.mapper = mapper;
    }

    public void destroySessionAttributes(String email) { mapper.destroySessionAttributes(email); }

    public void destroySession(String email) { mapper.destroySession(email); }

    public boolean isSessionExist(String userId, String userToken) {
        return mapper.isSessionExist(userId, userToken) > 0;
    }
}
