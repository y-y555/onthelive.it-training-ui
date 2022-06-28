package demo.onthelive.training.lms.repository;

import demo.onthelive.training.lms.model.user.LmsSimpleUser;
import demo.onthelive.training.lms.model.user.LmsUser;
import demo.onthelive.training.lms.model.user.support.LmsUserType;
import demo.onthelive.training.lms.repository.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {
    private final UserMapper mapper;

    @Autowired
    public UserRepository(UserMapper mapper) {
        this.mapper = mapper;
    }

    public LmsUser selectUser(String email) {
        return mapper.selectUser(email);
    }

    public LmsSimpleUser selectUserById(long id) { return mapper.selectUserById(id);}

    public List<LmsUser> selectAllUsersByType(LmsUserType type) {
        return mapper.selectAllUsersWhereType(type);
    }

    public List<LmsUser> selectUsersWhereType(LmsUserType type, int rowsPerPage, int startRow) {
        return mapper.selectUsersWhereType(type, rowsPerPage, startRow);
    }

    public int insertUser(LmsUser user) {
        return mapper.insertUser(user);
    }

    public LmsSimpleUser checkUserEmail(String userEmail) {
        return mapper.checkUserEmail(userEmail);
    }
}
