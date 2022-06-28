package demo.onthelive.training.lms.configuration.support;

import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HttpPreProcessFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
        throws ServletException, IOException {
        if (request.getMethod().equalsIgnoreCase("OPTIONS")
                || request.getMethod().equalsIgnoreCase("DELETE")
                || request.getMethod().equalsIgnoreCase("TRACE")){
            response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
            return;
        }
        filterChain.doFilter(request, response);
    }
}
