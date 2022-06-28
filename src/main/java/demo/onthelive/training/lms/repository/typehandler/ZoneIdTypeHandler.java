package demo.onthelive.training.lms.repository.typehandler;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.ZoneId;

public class ZoneIdTypeHandler extends BaseTypeHandler<ZoneId> {
    @Override
    public ZoneId getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        return convert(cs.getString(columnIndex));
    }

    @Override
    public ZoneId getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        return convert(rs.getString(columnIndex));
    }

    @Override
    public ZoneId getNullableResult(ResultSet rs, String columnName) throws SQLException {
        return convert(rs.getString(columnName));
    }

    @Override
    public void setNonNullParameter(PreparedStatement ps, int columnIndex, ZoneId param, JdbcType jdbcType) throws SQLException {
        ps.setString(columnIndex, convert(param));
    }

    private String convert(ZoneId zoneId) {
        return zoneId.getId();
    }

    private ZoneId convert(String s) {
        if((s != null) && (s.length() > 0)) {
            try {
                return ZoneId.of(s);
            } catch (Exception e) {
                return null;
            }
        } else {
            return null;
        }
    }
}