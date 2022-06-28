package demo.onthelive.training.lms.model.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LmsUserToken {
    private String token;
    private LmsSimpleUser user;
}
