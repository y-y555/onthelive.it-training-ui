package demo.onthelive.training.lms.repository.mapper;

public interface AuthenticationMapper {
    void destroySessionAttributes(String email);
    void destroySession(String email);
    int isSessionExist(String userId, String userToken);
}
