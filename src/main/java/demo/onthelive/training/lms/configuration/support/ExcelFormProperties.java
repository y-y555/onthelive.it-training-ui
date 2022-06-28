package demo.onthelive.training.lms.configuration.support;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "training.lms.demo.file")
public class ExcelFormProperties {
    private String lmsExcelFormPath;
    private String lmsMemberExcelFormPath;
    private String lmsGuestExcelFormPath;
    private String lmsSurveyExcelFormPath;
}
