package demo.onthelive.training.lms.model.user;

import demo.onthelive.training.lms.model.user.support.LmsUserConfigKey;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class LmsUserConfig {
    private long userId;
    private LmsUserConfigKey configKey;
    private String value;
    private LocalDateTime createdDatetime;
    private LocalDateTime updatedDatetime;
}
