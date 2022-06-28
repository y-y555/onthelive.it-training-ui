package demo.onthelive.training.lms.model.user;

import demo.onthelive.training.lms.model.oauth.support.OAuthPlatform;
import demo.onthelive.training.lms.model.user.support.LmsUserState;
import demo.onthelive.training.lms.model.user.support.LmsUserType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class LmsUser {
    private long id;
    private String name;
    private String email;
    private String password;
    private String organization;
    private String department;
    private LmsUserType type;
    private LmsUserState state;
    private String accessToken;
    private OAuthPlatform platformType;
    private long parentId;
    private boolean enabled;
    private boolean shouldChangePassword;
    private boolean allowEmail;
    private LocalDateTime createdDatetime;
    private LocalDateTime updatedDatetime;
}
