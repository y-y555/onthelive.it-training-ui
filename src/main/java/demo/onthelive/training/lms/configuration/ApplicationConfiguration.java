package demo.onthelive.training.lms.configuration;

import demo.onthelive.training.lms.configuration.support.TomcatProperties;
import demo.onthelive.training.lms.util.SystemEnvUtil;
import org.apache.catalina.connector.Connector;
import org.apache.http.client.HttpClient;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.ssl.SSLContexts;
import org.modelmapper.*;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.aop.interceptor.SimpleAsyncUncaughtExceptionHandler;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

import java.security.cert.X509Certificate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class ApplicationConfiguration implements AsyncConfigurer {

    @Value("${spring.servlet.encoding.charset}")
    private String encoding;

    @Value("${training.lms.demo.file.access.aws-url}")
    private String awsUrl;

    @Value("${training.lms.demo.file.access.oci-access-url}")
    private String ociAccessUrl;

    @Value("${training.lms.demo.file.access.oci-name-space}")
    private String ociNameSpace;

    @Value("${training.lms.demo.file.access.aws.region-name}")
    private String regionName;

    @Value("${training.lms.demo.file.access.aws.bucket-name}")
    private String bucketName;

    @Value("${training.lms.demo.file.access.aws.access-key}")
    private String accessKey;

    @Value("${training.lms.demo.file.access.aws.secret-key}")
    private String secretKey;

    @Value("${restTemplate.factory.readTimeout}")
    private int readTimeout;

    @Value("${restTemplate.factory.connectTimeout}")
    private int connectTimeout;

    @Value("${restTemplate.httpClient.maxConnTotal}")
    private int maxConnTotal;

    @Value("${restTemplate.httpClient.maxConnPerRoute}")
    private int maxConnPerRoute;

    @Value("${training.lms.demo.file.access.oci-folder-name}")
    private String ociFolderName;

    @Value("${training.lms.demo.scheduler-pool-size}")
    private int schedulePoolSize;

    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10);
        executor.setMaxPoolSize(200);
        executor.setQueueCapacity(20);
        executor.initialize();

        return executor;
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new SimpleAsyncUncaughtExceptionHandler();
    }

    // Tomcat configuration
    @Bean
    public TomcatServletWebServerFactory servletContainer(TomcatProperties tomcatProperties) {
        return new TomcatServletWebServerFactory() {
            @Override
            protected void customizeConnector(Connector connector) {
                super.customizeConnector(connector);

                connector.setProperty("maxThreads", 			tomcatProperties.getMaxThreads());
                connector.setProperty("minSpareThreads", 		tomcatProperties.getMinSpareThreads());
                connector.setProperty("maxConnections",		    tomcatProperties.getMaxConnections());
                connector.setProperty("connectionLinger", 	    tomcatProperties.getConnectionLingers());
                connector.setProperty("connectionTimeout", 	    tomcatProperties.getConnectionTimeout());
                connector.setProperty("keepAliveTimeout", 	    tomcatProperties.getKeepAliveTimeout());
                connector.setProperty("maxKeepAliveRequests",   tomcatProperties.getMaxKeepAliveRequests());
                connector.setProperty("server", 				tomcatProperties.getServerInfo());
            }
        };
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public SystemEnvUtil systemEnvUtil() {
        return new SystemEnvUtil();
    }

    @Bean
    public ModelMapper modelMapper() {
        Provider<LocalDateTime> localDateTimeProvider = new AbstractProvider<LocalDateTime>() {
            @Override
            public LocalDateTime get() {
                return LocalDateTime.now();
            }
        };

        Converter<String, LocalDateTime> toStringDate = new AbstractConverter<String, LocalDateTime>() {
            @Override
            protected LocalDateTime convert(String source) {
                DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                return LocalDateTime.parse(source, format);
            }
        };

        ModelMapper modelMapper = new ModelMapper();
        modelMapper.createTypeMap(String.class, LocalDateTime.class);
        modelMapper.addConverter(toStringDate);
        modelMapper.getTypeMap(String.class, LocalDateTime.class).setProvider(localDateTimeProvider);
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper;
    }

    @Bean
    public RestTemplate restTemplate() throws Exception {
        HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
        HttpClient client = HttpClientBuilder.create()
                .setMaxConnTotal(maxConnTotal)
                .setMaxConnPerRoute(maxConnPerRoute)
                .setSSLHostnameVerifier(new NoopHostnameVerifier())
                .setSSLContext(SSLContexts.custom()
                        .loadTrustMaterial(null, (X509Certificate[] x509Certificates, String s) -> true)
                        .build()
                ).build();

        factory.setHttpClient(client);
        factory.setConnectTimeout(connectTimeout);
        factory.setReadTimeout(readTimeout);

        return new RestTemplate(factory);
    }

    @Bean
    public TaskScheduler taskScheduler() {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();

        scheduler.setPoolSize(schedulePoolSize);
        scheduler.setThreadNamePrefix("TaskScheduler_");

        return scheduler;
    }

}
