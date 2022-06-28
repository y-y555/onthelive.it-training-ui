package demo.onthelive.training.lms.model.user;

import demo.onthelive.training.lms.model.user.support.LmsUserState;
import demo.onthelive.training.lms.model.user.support.LmsUserType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class LmsSimpleUser implements Serializable {
    public static final long serialVersionUID = 1L;

    private Long id;
    private String email;
    private String name;
    private String organization;
    private String department;
    private LmsUserType type;
    private LmsUserState state;
    private Long parentId;
    private boolean enabled;
    private boolean shouldChangePassword;
    private boolean allowEmail;
    private LocalDateTime createdDatetime;
    private LocalDateTime updatedDatetime;

    public void setEmail(String value) {
        this.email = value.trim();
    }

    public void setName(String value) {
        this.name = value.trim();
    }
}
