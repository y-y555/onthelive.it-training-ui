package demo.onthelive.training.lms.repository.mapper;

import demo.onthelive.training.lms.model.user.LmsSimpleUser;
import demo.onthelive.training.lms.model.user.LmsUser;
import demo.onthelive.training.lms.model.user.LmsUserConfig;
import demo.onthelive.training.lms.model.user.support.LmsUserType;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
    LmsUser selectUser(String email);

    List<LmsUser> selectAllUsersWhereType(LmsUserType type);

    List<LmsUser> selectUsersWhereType(@Param("type") LmsUserType type, @Param("rowsPerPage") int rowsPerPage, @Param("startRow") int startRow);

    int insertUser(LmsUser account);

    LmsSimpleUser selectUserById(long id);

    LmsSimpleUser checkUserEmail(String userEmail);

    List<LmsUserConfig> selectUserConfigs(long userId);

}
