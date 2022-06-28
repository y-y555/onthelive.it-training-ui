package demo.onthelive.training.lms.exception;

public class LMSException extends RuntimeException {
    private final ErrorCode code;
    
    public LMSException(ErrorCode code, String message) {
        super(message);
        
        this.code = code;
    }
    
    public ErrorCode getErrorCode() {
        return this.code;
    }
}