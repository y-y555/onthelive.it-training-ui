USE b2b_lms;

##
## for Spring Sessionƒ
##
CREATE TABLE SPRING_SESSION (
    PRIMARY_ID CHAR(36) NOT NULL,
    SESSION_ID CHAR(36) NOT NULL,
    CREATION_TIME BIGINT NOT NULL,
    LAST_ACCESS_TIME BIGINT NOT NULL,
    MAX_INACTIVE_INTERVAL INT NOT NULL,
    EXPIRY_TIME BIGINT NOT NULL,
    PRINCIPAL_NAME VARCHAR(100),

    CONSTRAINT SPRING_SESSION_PK PRIMARY KEY (PRIMARY_ID)
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC;

CREATE UNIQUE INDEX SPRING_SESSION_IX1 ON SPRING_SESSION (SESSION_ID);
CREATE INDEX SPRING_SESSION_IX2 ON SPRING_SESSION (EXPIRY_TIME);
CREATE INDEX SPRING_SESSION_IX3 ON SPRING_SESSION (PRINCIPAL_NAME);


CREATE TABLE SPRING_SESSION_ATTRIBUTES (
    SESSION_PRIMARY_ID CHAR(36) NOT NULL,
    ATTRIBUTE_NAME VARCHAR(200) NOT NULL,
    ATTRIBUTE_BYTES BLOB NOT NULL,

    CONSTRAINT SPRING_SESSION_ATTRIBUTES_PK PRIMARY KEY (SESSION_PRIMARY_ID, ATTRIBUTE_NAME),
    CONSTRAINT SPRING_SESSION_ATTRIBUTES_FK FOREIGN KEY (SESSION_PRIMARY_ID) REFERENCES SPRING_SESSION(PRIMARY_ID) ON DELETE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC;


##
## for Application
##
CREATE TABLE otl_configs (
    id                                  BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT 'ID',
    config_key                          VARCHAR(32)                 NOT NULL                            COMMENT '설정 Key [MainText|SubText|MainTextColor|SubTextColor|MainColor|SubColor|OrganizationName|WebviewUrl]',
    value                               VARCHAR(256)                NOT NULL                            COMMENT '설정 값',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '화면 설정정보';

CREATE TABLE otl_images (
    id                                  BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT 'ID',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '이미지 유형 [Main|Logo|Favicon]',
    image                               LONGTEXT                    NOT NULL                            COMMENT '이미지 데이터',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '이미지 정보';

CREATE TABLE otl_users (
                           id                                  BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '사용자 ID',
                           name                                VARCHAR(128)                NOT NULL                            COMMENT '사용자 이름',
                           email                               VARCHAR(256)                NOT NULL                            COMMENT '이메일',
                           password                            VARCHAR(256)                NULL                                COMMENT 'Password',
                           organization                        VARCHAR(128)                NULL                                COMMENT '회사명',
                           department                          VARCHAR(128)                NULL                                COMMENT '소속',
                           type                                VARCHAR(32)                 NOT NULL                            COMMENT '사용자 유형 [Admin|Normal]',
                           state                               VARCHAR(32)                 NOT NULL DEFAULT 'Wait'             COMMENT '사용자 상태 [Wait|Normal|Lock|Withdraw]',
                           access_token                        VARCHAR(128)                NULL                                COMMENT '소셜 사용자인증 발급 토큰',
                           platform_type                       VARCHAR(32)                 NULL                                COMMENT '소셜 사용자인증 플랫폼',
                           parent_id                           BIGINT                      NULL                                COMMENT '생성자 ID',
                           is_enabled                          CHAR(1)                     NOT NULL DEFAULT 'N'                COMMENT '사용가능 여부 [Y|N]',
                           should_change_password              CHAR(1)                     NOT NULL DEFAULT 'N'                COMMENT '패스워드 재설정 필요여부 [Y|N]',
                           is_allow_email                      CHAR(1)                     NOT NULL                            COMMENT '이메일 수신동의 여부 [Y|N]',
                           created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                           updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                           CONSTRAINT                                                      PRIMARY KEY (id),
                           CONSTRAINT uk_otl_user_email                                    UNIQUE KEY (email),
                           CONSTRAINT uk_otl_user_access_token                             UNIQUE KEY (access_token)
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '사용자 정보';


CREATE TABLE otl_user_avatars (
    user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
    image                               LONGTEXT                    NOT NULL                            COMMENT '아바타 이미지 데이터',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (user_id),
    CONSTRAINT fk_user_avatars_users                                FOREIGN KEY (user_id)
                                                                    REFERENCES otl_users(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '사용자 아바타';


CREATE TABLE otl_user_configs (
    user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
    config_key                          VARCHAR(32)                 NOT NULL                            COMMENT '설정 Key [Language|Zone]',
    value                               VARCHAR(256)                NOT NULL                            COMMENT '설정 값',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (user_id, config_key),
    CONSTRAINT fk_user_configs_users                                FOREIGN KEY (user_id)
                                                                    REFERENCES otl_users(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '사용자 설정정보';


CREATE TABLE otl_groups (
    id                                  BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '모임 ID',
    name                                VARCHAR(128)                NOT NULL                            COMMENT '이름',
    comment                             VARCHAR(1024)               NULL                                COMMENT '설명',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '모임 유형 [Group|Team]',
    color                               VARCHAR(32)                 NULL                                COMMENT '모임 색상 테마',
    is_public                           CHAR(1)                     NOT NULL                            COMMENT '공개 여부 [Y|N]',
    is_join_approval                    CHAR(1)                     NOT NULL DEFAULT 'N'                COMMENT '가입신청 받기 여부 [Y|N]',
    max_users                           INT                         NULL                                COMMENT '',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '모임 정보';


CREATE TABLE otl_group_images (
    group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
    image                               LONGTEXT                    NOT NULL                            COMMENT '모임 커버 이미지 데이터',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (group_id),
    CONSTRAINT fk_group_images_groups                               FOREIGN KEY (group_id)
                                                                    REFERENCES otl_groups(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '모임 이미지';

CREATE TABLE otl_group_users (
                                 group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                 user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
                                 type                                VARCHAR(32)                 NOT NULL                            COMMENT '모임 내 역할 [Leader|Member]',
                                 is_enabled                          CHAR(1)                     NOT NULL DEFAULT 'Y'                COMMENT '사용가능 여부 [Y|N]',
                                 notification_type                   VARCHAR(32)                 NOT NULL                            COMMENT '모임 내 알림설정',
                                 created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                 updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                 CONSTRAINT                                                      PRIMARY KEY (group_id, user_id),
                                 CONSTRAINT fk_group_users_groups                                  FOREIGN KEY (group_id)
                                     REFERENCES otl_groups(id) ON DELETE CASCADE,
                                 CONSTRAINT fk_group_users_users                                  FOREIGN KEY (user_id)
                                     REFERENCES otl_users(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '모임 사용자 정보(팀에 속한 사용자를 나타냄)';



CREATE TABLE otl_group_notices (
                                   group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                   notice_id                           BIGINT  AUTO_INCREMENT      NOT NULL                            COMMENT '공지사항 순번',
                                   title                               VARCHAR(128)                NOT NULL                            COMMENT '제목',
                                   content                             VARCHAR(1024)                NOT NULL                            COMMENT '내용',
                                   user_id                             BIGINT                      NOT NULL                                COMMENT '작성한 사용자 ID',
                                   created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                   updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                   CONSTRAINT                                                      PRIMARY KEY (notice_id, group_id),
                                   CONSTRAINT fk_group_notices_groups                              FOREIGN KEY (group_id)
                                                                                                   REFERENCES otl_groups(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '모임 공지사항';


CREATE TABLE otl_group_file_folders (
                                        file_folder_id                      BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '그룹파일 폴더 ID',
                                        parent_folder_id                    BIGINT                      NULL                                COMMENT '상위 폴더 ID',
                                        group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                        name                                VARCHAR(128)                NOT NULL                            COMMENT '폴더명',
                                        type                                VARCHAR(32)                 NOT NULL                            COMMENT '폴더 타입',
                                        created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '폴더 생성일시',
                                        updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '폴더 변경일시',

                                        CONSTRAINT                                                      PRIMARY KEY (file_folder_id, group_id),
                                        CONSTRAINT fk_group_file_folders_groups                         FOREIGN KEY (group_id)
                                                                                                        REFERENCES otl_groups(id) ON DELETE CASCADE,
                                        CONSTRAINT fk_group_file_folders                                FOREIGN KEY (parent_folder_id)
                                                                                                        REFERENCES otl_group_file_folders(file_folder_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                               COMMENT '모임 파일 폴더 정보';


CREATE TABLE otl_group_files (
    group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
    file_folder_id                      BIGINT                      NOT NULL                            COMMENT '그룹파일 폴더 ID',
    file_id                             BIGINT  AUTO_INCREMENT      NOT NULL                            COMMENT '파일 ID',
    access_type                         VARCHAR(32)                 NOT NULL                            COMMENT '파일 저장 유형 [DB|AmazonS3|NaverObjectStorage]',
    access_url                          VARCHAR(1024)               NOT NULL                            COMMENT '파일 접근 URL',
    title                               VARCHAR(128)                NOT NULL                            COMMENT '제목',
    name                                VARCHAR(256)                NOT NULL                            COMMENT '파일명',
    type                                VARCHAR(256)                NOT NULL                            COMMENT '파일타입',
    size                                BIGINT                      NOT NULL                            COMMENT '파일사이즈 (Byte 단위)',
    user_id                             BIGINT                      NOT NULL                            COMMENT '업로드 사용자 ID',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (file_id, group_id, file_folder_id),
    CONSTRAINT fk_group_files_group_users                           FOREIGN KEY (group_id, user_id)
                                                                    REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE,
    CONSTRAINT fk_group_files_group_file_folders                    FOREIGN KEY (file_folder_id)
                                                                    REFERENCES otl_group_file_folders(file_folder_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '모임 파일';


CREATE TABLE otl_group_file_binaries (
    group_file_id                       BIGINT                      NOT NULL                            COMMENT '파일 순번',
    data                                LONGBLOB                    NOT NULL                            COMMENT '파일 내용',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (group_file_id),
    CONSTRAINT fk_group_file_binaries_group_files                   FOREIGN KEY (group_file_id)
                                                                    REFERENCES otl_group_files(file_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '모임 파일 바이너리';

CREATE TABLE otl_group_authorities (
    group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
    feature_key                         VARCHAR(32)                 NOT NULL                            COMMENT '권한 설정 기능 ID',
    authority                           VARCHAR(32)                 NOT NULL                            COMMENT '권한 [CreateRoom|CreateNotice|UploadFile|...]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (group_id, feature_key, authority),
    CONSTRAINT fk_group_authorities_groups                          FOREIGN KEY (group_id)
                                                                    REFERENCES otl_groups(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '모임 사용자의 권한 정보';


CREATE TABLE otl_rooms (
    id                                  BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '',
    api_room_id                         VARCHAR(256)                NOT NULL                            COMMENT '',
    group_id                            BIGINT                      NOT NULL                            COMMENT '방이 모임에 종속될 경우, 해당 모임의 ID',
    user_id                             BIGINT                      NOT NULL                            COMMENT '방이 사용자에 종속될 경우, 해당 사용자의 ID',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '[None]',
    name                                VARCHAR(128)                NOT NULL                            COMMENT '',
    comment                             VARCHAR(1024)               NULL                                COMMENT '',
    start_datetime                      DATETIME                    NOT NULL                            COMMENT '',
    end_datetime                        DATETIME                    NOT NULL                            COMMENT '',
    max_users                           INT                         NOT NULL                            COMMENT '',
    is_statistics                       CHAR(1)                     NOT NULL DEFAULT 'N'                COMMENT '통계 데이터 존재 여부 [Y|N]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (id),
    CONSTRAINT fk_rooms_groups                                      FOREIGN KEY (group_id)
                                                                    REFERENCES otl_groups(id) ON DELETE CASCADE,
    CONSTRAINT fk_rooms_users                                       FOREIGN KEY (user_id)
                                                                    REFERENCES otl_users(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '방 정보';


CREATE TABLE otl_room_users (
    room_id                             BIGINT                      NOT NULL                            COMMENT '',
    group_id                            BIGINT                      NOT NULL                            COMMENT '방이 모임에 종속될 경우, 해당 모임의 ID',
    user_id                             BIGINT                      NOT NULL                            COMMENT '',
    api_user_id                         BIGINT                      NOT NULL                            COMMENT 'API 발급 사용자 ID',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '방의 주최자 여부를 나타냄 [Owner|Member]',
    entrance_url                        VARCHAR(512)                NOT NULL                            COMMENT '',
    is_notify                           CHAR(1)                     NOT NULL                            COMMENT '사용자 알림 확인 여부 [Y|N]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (room_id, group_id, user_id),
    CONSTRAINT fk_room_users_rooms                                  FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms(id) ON DELETE CASCADE,
    CONSTRAINT fk_room_users_group_users                            FOREIGN KEY (group_id, user_id)
                                                                    REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '방 유저 정보';

CREATE TABLE otl_group_teams (
                                 team_id                             BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '팀 ID',
                                 parent_team_id                      BIGINT                      NULL                                COMMENT '상위 팀 ID',
                                 name                                VARCHAR(128)                NOT NULL                            COMMENT '이름',
                                 group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                 is_enabled                          CHAR(1)                     NOT NULL                            COMMENT '사용가능 여부 [Y|N]',
                                 created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                 updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                 CONSTRAINT                                                      PRIMARY KEY (team_id, name, group_id),
                                 CONSTRAINT fk_group_teams_groups                                FOREIGN KEY (group_id)
                                                                                                 REFERENCES otl_groups(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                               COMMENT '팀 정보';

CREATE TABLE otl_group_team_users (
                                      team_id                             BIGINT                      NOT NULL                            COMMENT '팀 ID',
                                      group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                      user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
                                      type                                VARCHAR(32)                 NOT NULL                            COMMENT '팀 내 역할 [Leader|Member]',
                                      is_enabled                          CHAR(1)                     NOT NULL DEFAULT 'Y'                COMMENT '사용가능 여부 [Y|N]',
                                      created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                      updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                      CONSTRAINT                                                      PRIMARY KEY (team_id, group_id, user_id),
                                      CONSTRAINT fk_group_team_users_teams                                  FOREIGN KEY (team_id)
                                          REFERENCES otl_group_teams(team_id) ON DELETE CASCADE,
                                      CONSTRAINT fk_group_team_users_group_users                                  FOREIGN KEY (group_id, user_id)
                                          REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                    COMMENT '팀 사용자 정보(팀에 속한 사용자를 나타냄)';


CREATE TABLE otl_room_teams (
                                room_id                             BIGINT                      NOT NULL                            COMMENT '방 ID',
                                team_id                             BIGINT                      NOT NULL                            COMMENT '그룹 내 팀 ID',
                                created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                CONSTRAINT                                                     PRIMARY KEY (room_id, team_id),
                                CONSTRAINT fk_room_team_rooms                                  FOREIGN KEY (room_id)
                                                                                               REFERENCES otl_rooms(id) ON DELETE CASCADE,
                                CONSTRAINT fk_room_teams_teams                                 FOREIGN KEY (team_id)
                                                                                               REFERENCES otl_group_teams(team_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '방 팀 정보';


CREATE TABLE otl_room_guests (
    room_id                             BIGINT                      NOT NULL                            COMMENT '방 ID',
    guest_id                            INT                         NOT NULL                            COMMENT '손님 순번',
    name                                VARCHAR(128)                NOT NULL                            COMMENT '손님 이름',
    email                               VARCHAR(256)                NULL                                COMMENT '손님 이메일',
    entrance_url                        VARCHAR(512)                NOT NULL                            COMMENT '초대 URL',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (room_id, guest_id),
    CONSTRAINT fk_room_guests_rooms                                 FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '방 손님 정보';

CREATE TABLE otl_room_activations (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    state                               VARCHAR(32)                 NOT NULL                            COMMENT '현재 Activation의 상태 값 [Activated|OnAir|Deactivated]',
    activated_datetime                  DATETIME                    NOT NULL                            COMMENT '수업이 Activated 된 시작',
    onair_datetime                      DATETIME                    NULL                                COMMENT '수업이 OnAir 된 시각',
    deactivated_datetime                DATETIME                    NULL                                COMMENT '수업이 Deactivated 된 시각',
    deactivate_type                     VARCHAR(32)                 NULL                                COMMENT '수업이 Deactivated 된 원인 [Exit|TimeOut]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id),
    CONSTRAINT fk_room_activations_rooms                            FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '방 활성화 정보';

CREATE TABLE otl_result_quizzes (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    quiz_id                             INT                         NOT NULL                            COMMENT '퀴즈의 ID',
    title                               VARCHAR(1024)               NOT NULL                            COMMENT '퀴즈의 제목',
    quiz_type                           VARCHAR(32)                 NOT NULL                            COMMENT '퀴즈의 종류',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, quiz_id),
    CONSTRAINT fk_result_quizzes_room_activations                   FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations(room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '출제된 퀴즈 정보';

CREATE TABLE otl_result_quiz_items (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    quiz_id                             INT                         NOT NULL                            COMMENT '퀴즈의 ID',
    item_id                             INT                         NOT NULL                            COMMENT '퀴즈 객관식 ID',
    content                             VARCHAR(512)                NOT NULL                            COMMENT '퀴즈 객관식 문항',
    is_correct                          CHAR(1)                     NOT NULL                            COMMENT '퀴즈 정답 여부 [Y|N]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, quiz_id, item_id),
    CONSTRAINT fk_result_quiz_items_result_quizzes                  FOREIGN KEY (room_id, activation_id, quiz_id)
                                                                    REFERENCES otl_result_quizzes(room_id, activation_id, quiz_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '출제된 퀴즈의 객관식 정보';

CREATE TABLE otl_result_quiz_images (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    quiz_id                             INT                         NOT NULL                            COMMENT '퀴즈의 ID',
    image_id                            INT                         NOT NULL                            COMMENT '퀴즈 이미지 ID',
    name                                VARCHAR(256)                NULL                                COMMENT '퀴즈 이미지 이름',
    type                                VARCHAR(256)                NULL                                COMMENT '퀴즈 이미지 타입',
    access_url                          VARCHAR(1024)               NULL                                COMMENT '퀴즈 이미지 URL',
    data                                LONGTEXT                    NOT NULL                            COMMENT '이미지 데이터',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, quiz_id, image_id),
    CONSTRAINT fk_result_quiz_images_result_quizzes                 FOREIGN KEY (room_id, activation_id, quiz_id)
                                                                    REFERENCES otl_result_quizzes(room_id, activation_id, quiz_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '출제된 퀴즈의 이미지 정보';

CREATE TABLE otl_room_activation_user_summaries (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    attendance_rate                     FLOAT                       NOT NULL                            COMMENT '학생 츨석률',
    response_rate                       FLOAT                       NOT NULL                            COMMENT '학생 출석체크 응답률',
    presentation_count                  INT                         NOT NULL                            COMMENT '학생 발표 횟수',
    question_count                      INT                         NOT NULL                            COMMENT '학생 질문 횟수',
    quiz_answer_rate                    FLOAT                       NOT NULL                            COMMENT '학생 퀴즈 정답',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, external_key),
    CONSTRAINT fk_room_activation_user_summaries_room_activations   FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations(room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '학생 활동 요약 정보';

CREATE TABLE otl_room_activation_user_histories (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    history_id                          INT                         NOT NULL                            COMMENT '학생 History 순번',
    device_type                         VARCHAR(256)                NOT NULL                            COMMENT '학생의 디바이스 유형',
    browser_type                        VARCHAR(256)                NOT NULL                            COMMENT '학생의 브라우저 유형',
    enter_datetime                      DATETIME                    NULL                                COMMENT '학생 입장 시각',
    exit_datetime                       DATETIME                    NULL                                COMMENT '학생 퇴장 시각',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, external_key, history_id),
    CONSTRAINT fk_room_activation_user_histories_room_activations   FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations(room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '학생의 방출입 정보';


CREATE TABLE otl_attendance_results (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    attendance_id                       INT                         NOT NULL                            COMMENT '학생 출석체크 ID',
    is_response                         CHAR(1)                     NOT NULL                            COMMENT '학생의 출석체크 확인 여부 [Y|N]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, external_key, attendance_id),
    CONSTRAINT fk_attendance_results_room_activations               FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations(room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '학생의 출석체크 정보';

CREATE TABLE otl_activities (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    activity_id                         INT                         NOT NULL                            COMMENT '학생의 발표 질문 ID',
    activity_type                       VARCHAR(32)                 NOT NULL                            COMMENT '학생의 발표 질문 유형',
    start_time                          DATETIME                    NULL                                COMMENT '시작시간',
    end_time                            DATETIME                    NULL                                COMMENT '종료시간',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, external_key, activity_id),
    CONSTRAINT fk_activities_room_activations                       FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations (room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '학생의 발표 질문 정보';

CREATE TABLE otl_result_quiz_item_answers (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    quiz_id                             INT                         NOT NULL                            COMMENT '퀴즈 ID',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    item_id                             INT                         NOT NULL                            COMMENT '학생의 퀴즈 객관식 풀이 정보',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, quiz_id, external_key, item_id),
    CONSTRAINT fk_result_quiz_item_answers_room_activations         FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations (room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '학생의 객관식 퀴즈 답변 정보';

CREATE TABLE otl_result_quiz_short_answers (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    quiz_id                             INT                         NOT NULL                            COMMENT '퀴즈 ID',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    user_name                           VARCHAR(128)                NOT NULL                            COMMENT '학생 이름',
    answer                              VARCHAR(512)                NULL                                COMMENT '학생의 퀴즈 주관식 풀이 정보',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, quiz_id, external_key),
    CONSTRAINT fk_result_quiz_short_answers_room_activations        FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations (room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '학생의 주관식 퀴즈 답변 정보';

CREATE TABLE otl_result_surveys (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID (API)',
    user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
    title                               VARCHAR(256)                NOT NULL                            COMMENT '설문지 제목',
    descriptions                        VARCHAR(10240)              NULL                                COMMENT '설문지 설명',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, survey_id),
    CONSTRAINT fk_result_surveys_room_activations                   FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations (room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '출제된 설문지 정보';

CREATE TABLE otl_result_survey_items (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID',
    survey_item_id                      BIGINT                      NOT NULL                            COMMENT '설문 ID',
    is_required                         CHAR(1)                     NOT NULL                            COMMENT '필수 여부 [Y|N]',
    title                               VARCHAR(256)                NOT NULL                            COMMENT '설문 제목',
    contents                            VARCHAR(10240)              NOT NULL                            COMMENT '설문 내용',
    number                              INT                         NOT NULL                            COMMENT '설문 번호',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '설문 종류 [SingleChoice|MultipleChoice|ShortAnswer|Rating|Context]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, survey_id, survey_item_id),
    CONSTRAINT fk_result_survey_items_result_surveys                FOREIGN KEY (room_id, activation_id, survey_id)
                                                                    REFERENCES otl_result_surveys (room_id, activation_id, survey_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '출제된 설문 정보';

CREATE TABLE otl_result_survey_item_options (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID',
    survey_item_id                      BIGINT                      NOT NULL                            COMMENT '설문 ID',
    survey_item_option_id               BIGINT                      NOT NULL                            COMMENT '설문 옵션 ID',
    contents                            VARCHAR(256)                NOT NULL                            COMMENT '옵션(보기) 내용',
    number                              INT                         NOT NULL                            COMMENT '옵션(보기) 번호',
    is_etc                              CHAR(1)                     NOT NULL                            COMMENT '기타 여부 [Y|N]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, survey_id, survey_item_id, survey_item_option_id),
    CONSTRAINT fk_result_survey_item_options_result_survey_items    FOREIGN KEY (room_id, activation_id, survey_id, survey_item_id)
                                                                    REFERENCES otl_result_survey_items(room_id, activation_id, survey_id, survey_item_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '출제된 설문 옵션 정보';

CREATE TABLE otl_result_survey_item_images (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID',
    survey_item_id                      BIGINT                      NOT NULL                            COMMENT '설문 ID',
    survey_item_image_id                INT                         NOT NULL                            COMMENT '설문 이미지 ID',
    name                                VARCHAR(512)                NOT NULL                            COMMENT '이미지 이름',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '이미지 마임 타입',
    size                                BIGINT                      NOT NULL                            COMMENT '이미지 사이즈 (bytes)',
    width                               INT                         NOT NULL                            COMMENT '이미지 가로 사이즈(pixel)',
    height                              INT                         NOT NULL                            COMMENT '이미지 세로 사이즈(pixel)',
    image                               LONGTEXT                    NOT NULL                            COMMENT '이미지 데이터',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, survey_id, survey_item_id, survey_item_image_id),
    CONSTRAINT fk_result_survey_item_images_result_survey_items     FOREIGN KEY (room_id, activation_id, survey_id, survey_item_id)
                                                                    REFERENCES otl_result_survey_items(room_id, activation_id, survey_id, survey_item_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '출제된 설문 이미지 정보';

CREATE TABLE otl_result_survey_item_option_images (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID',
    survey_item_id                      BIGINT                      NOT NULL                            COMMENT '설문 ID',
    survey_item_option_id               BIGINT                      NOT NULL                            COMMENT '설문 옵션 ID',
    survey_item_option_image_id         INT                         NOT NULL                            COMMENT '설문 옵션 이미지 ID',
    name                                VARCHAR(512)                NOT NULL                            COMMENT '이미지 이름',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '이미지 마임 타입',
    size                                BIGINT                      NOT NULL                            COMMENT '이미지 사이즈 (bytes)',
    width                               INT                         NOT NULL                            COMMENT '이미지 가로 사이즈(pixel)',
    height                              INT                         NOT NULL                            COMMENT '이미지 세로 사이즈(pixel)',
    image                               LONGTEXT                    NOT NULL                            COMMENT '이미지 데이터',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                                  PRIMARY KEY (room_id, activation_id, survey_id, survey_item_id, survey_item_option_id, survey_item_option_image_id),
    CONSTRAINT fk_result_survey_item_option_images_result_survey_item_options   FOREIGN KEY (room_id, activation_id, survey_id, survey_item_id, survey_item_option_id)
                                                                                REFERENCES otl_result_survey_item_options(room_id, activation_id, survey_id, survey_item_id, survey_item_option_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '출제된 설문 옵션 이미지 정보';

CREATE TABLE otl_result_survey_item_answers (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID',
    survey_item_id                      BIGINT                      NOT NULL                            COMMENT '설문 ID',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    option_id                           BIGINT                      NOT NULL                            COMMENT '학생의 설문 객관식 풀이 정보',
    submitted_datetime                  DATETIME                    NULL                                COMMENT '제출 시간',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, survey_id, survey_item_id, external_key, option_id),
    CONSTRAINT fk_result_survey_item_answers_room_activations       FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations (room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '학생의 객관식 설문 답변 정보';

CREATE TABLE otl_result_survey_short_answers (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID',
    survey_item_id                      BIGINT                      NOT NULL                            COMMENT '설문 ID',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    user_name                           VARCHAR(128)                NOT NULL                            COMMENT '학생 이름',
    answer                              VARCHAR(512)                NULL                                COMMENT '학생의 퀴즈 주관식 풀이 정보',
    submitted_datetime                  DATETIME                    NULL                                COMMENT '제출 시간',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, survey_id, survey_item_id, external_key),
    CONSTRAINT fk_result_survey_short_answers_room_activations      FOREIGN KEY (room_id, activation_id)
                                                                    REFERENCES otl_room_activations (room_id, activation_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '학생의 주관식/별점 설문 답변 정보';

CREATE TABLE otl_statistics_attendance_results (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    attendance_id                       INT                         NOT NULL                            COMMENT '출석체크 ID',
    response_count                      INT                         NOT NULL                            COMMENT '응답 학생 수',
    total_count                         INT                         NOT NULL                            COMMENT '총 학생 수',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, attendance_id),
    CONSTRAINT fk_statistics_attendance_results_rooms               FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms (id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '출석 통계';

CREATE TABLE otl_statistics_user_activities (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    user_name                           VARCHAR(128)                NOT NULL                            COMMENT '학생 이름',
    presentation_count                  INT                         NOT NULL                            COMMENT '발표 횟수',
    question_count                      INT                         NOT NULL                            COMMENT '질문 횟수',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, external_key),
    CONSTRAINT fk_statistics_user_activities_rooms                  FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms (id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '발표/질문 통계';

CREATE TABLE otl_statistics_quiz_item_answers (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    quiz_id                             INT                         NOT NULL                            COMMENT '퀴즈의 ID',
    item_id                             INT                         NOT NULL                            COMMENT '퀴즈 객관식 ID',
    content                             VARCHAR(512)                NOT NULL                            COMMENT '퀴즈 객관식 문항',
    response_count                      INT                         NOT NULL                            COMMENT '응답 학생 수',
    is_correct                          CHAR(1)                     NOT NULL                            COMMENT '퀴즈 정답 여부 [Y|N]',
    users                               TEXT                        NULL                                COMMENT '학생 이름 리스트',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, quiz_id, item_id),
    CONSTRAINT fk_statistics_quiz_item_answers_rooms                FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms (id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '객관식 퀴즈 통계';

CREATE TABLE otl_statistics_user_histories (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    history_count                       INT                         NOT NULL                            COMMENT '수업의 접속 횟수',
    user_count                          INT                         NOT NULL                            COMMENT '학생 수',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, history_count),
    CONSTRAINT fk_statistics_user_histories_rooms                   FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms (id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '수업 접속 통계';

CREATE TABLE otl_statistics_user_devices (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    device_type                         VARCHAR(256)                NOT NULL                            COMMENT '학생의 디바이스 유형',
    user_count                          INT                         NOT NULL                            COMMENT '학생 수',
    users                               TEXT                        NULL                                COMMENT '학생 이름 리스트',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, device_type),
    CONSTRAINT fk_statistics_user_devices_rooms                     FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms (id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '접속 기기 통계';

CREATE TABLE otl_statistics_user_summaries (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    external_key                        VARCHAR(128)                NOT NULL                            COMMENT '학생 식별 키',
    user_name                           VARCHAR(128)                NOT NULL                            COMMENT '학생 이름',
    enter_datetime                      DATETIME                    NULL                                COMMENT '학생 첫 입장 시각',
    exit_datetime                       DATETIME                    NULL                                COMMENT '학생 마지막 퇴장 시각',
    play_time                           BIGINT                      NOT NULL                            COMMENT '학생 참여 시간(초)',
    history_count                       INT                         NOT NULL                            COMMENT '학생의 수업 접속 횟수',
    attendance_count                    INT                         NOT NULL                            COMMENT '전체 출석 체크 횟수',
    response_count                      INT                         NOT NULL                            COMMENT '학생 출석 체크 횟수',
    question_count                      INT                         NOT NULL                            COMMENT '학생 질문 횟수',
    presentation_count                  INT                         NOT NULL                            COMMENT '학생 발표 횟수',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, external_key),
    CONSTRAINT fk_statistics_user_summaries_rooms                   FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms (id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '학생 개별 활동 통계';

CREATE TABLE otl_statistics_survey_item_answers (
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    activation_id                       INT                         NOT NULL                            COMMENT '수업의 활성 ID (수업 ID내의 순번)',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID',
    survey_item_id                      BIGINT                      NOT NULL                            COMMENT '설문 ID',
    survey_item_option_id               BIGINT                      NOT NULL                            COMMENT '설문 옵션 ID',
    contents                            VARCHAR(256)                NOT NULL                            COMMENT '옵션(보기) 내용',
    number                              INT                         NOT NULL                            COMMENT '옵션(보기) 번호',
    response_count                      INT                         NOT NULL                            COMMENT '응답 학생 수',
    users                               TEXT                        NULL                                COMMENT '학생 이름 리스트',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (room_id, activation_id, survey_id, survey_item_id, survey_item_option_id),
    CONSTRAINT fk_statistics_survey_item_answers_rooms              FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms (id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '객관식/별점 설문 통계';

CREATE TABLE otl_survey_folders (
                                    survey_folder_id                    BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '설문지 폴더 ID',
                                    parent_folder_id                    BIGINT                      NULL                                COMMENT '상위 폴더 ID',
                                    group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                    name                                VARCHAR(128)                NOT NULL                            COMMENT '폴더명',
                                    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '폴더 생성일시',
                                    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '폴더 변경일시',

                                    CONSTRAINT                                                      PRIMARY KEY (survey_folder_id, group_id),
                                    CONSTRAINT uk_otl_survey_folders_name                           UNIQUE KEY (name),
                                    CONSTRAINT fk_survey_folders_groups                         FOREIGN KEY (group_id)
                                        REFERENCES otl_groups(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                               COMMENT '설문지 폴더 정보';

CREATE TABLE otl_surveys (
                             survey_id                           BIGINT                      NOT NULL  AUTO_INCREMENT            COMMENT '설문지 ID',
                             group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                             user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
                             folder_id                           BIGINT                      NOT NULL                            COMMENT '사용자 ID',
                             title                               VARCHAR(256)                NOT NULL                            COMMENT '설문지 제목',
                             descriptions                        VARCHAR(10240)              NULL                                COMMENT '설문지 설명',
                             created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
                             updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

                             CONSTRAINT                                                      PRIMARY KEY (survey_id),
                             CONSTRAINT fk_surveys_group_users                               FOREIGN KEY (group_id, user_id)
                                                                                             REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE,
                             CONSTRAINT fk_surveys_survey_folders                            FOREIGN KEY (folder_id)
                                                                                             REFERENCES otl_survey_folders(survey_folder_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '설문지';

CREATE TABLE otl_survey_items (
    survey_item_id                      BIGINT                      NOT NULL  AUTO_INCREMENT            COMMENT '설문 ID',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID',
    is_required                         CHAR(1)                     NOT NULL                            COMMENT '필수 여부 [Y|N]',
    title                               VARCHAR(256)                NOT NULL                            COMMENT '설문 제목',
    contents                            VARCHAR(10240)              NOT NULL                            COMMENT '설문 내용',
    number                              INT                         NOT NULL                            COMMENT '설문 번호',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '설문 종류 [SingleChoice|MultipleChoice|ShortAnswer|Rating|Context]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (survey_item_id),
    CONSTRAINT fk_survey_items_surveys                              FOREIGN KEY (survey_id)
                                                                    REFERENCES otl_surveys(survey_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '설문';

CREATE TABLE otl_survey_item_options (
    survey_item_option_id               BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '설문 옵션 ID',
    survey_item_id                      BIGINT                      NOT NULL                            COMMENT '설문 ID',
    contents                            VARCHAR(256)                NOT NULL                            COMMENT '옵션(보기) 내용',
    number                              INT                         NOT NULL                            COMMENT '옵션(보기) 번호',
    is_etc                              CHAR(1)                     NOT NULL                            COMMENT '기타 여부 [Y|N]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (survey_item_option_id),
    CONSTRAINT fk_survey_item_options_survey_items                  FOREIGN KEY (survey_item_id)
                                                                    REFERENCES otl_survey_items(survey_item_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '설문 옵션';


CREATE TABLE otl_survey_item_images (
    survey_item_id                      BIGINT                      NOT NULL                            COMMENT '설문 ID',
    survey_item_image_id                INT                         NOT NULL                            COMMENT '설문 이미지 ID',
    name                                VARCHAR(512)                NOT NULL                            COMMENT '이미지 이름',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '이미지 마임 타입',
    size                                BIGINT                      NOT NULL                            COMMENT '이미지 사이즈 (bytes)',
    width                               INT                         NOT NULL                            COMMENT '이미지 가로 사이즈(pixel)',
    height                              INT                         NOT NULL                            COMMENT '이미지 세로 사이즈(pixel)',
    image                               LONGTEXT                    NOT NULL                            COMMENT '이미지 데이터',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (survey_item_id, survey_item_image_id),
    CONSTRAINT fk_survey_item_images_survey_items                   FOREIGN KEY (survey_item_id)
                                                                    REFERENCES otl_survey_items(survey_item_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '설문 이미지';

CREATE TABLE otl_survey_item_option_images (
    survey_item_option_id               BIGINT                      NOT NULL                            COMMENT '설문 옵션 ID',
    survey_item_option_image_id         INT                         NOT NULL                            COMMENT '설문 옵션 이미지 ID',
    name                                VARCHAR(512)                NOT NULL                            COMMENT '이미지 이름',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '이미지 마임 타입',
    size                                BIGINT                      NOT NULL                            COMMENT '이미지 사이즈 (bytes)',
    width                               INT                         NOT NULL                            COMMENT '이미지 가로 사이즈(pixel)',
    height                              INT                         NOT NULL                            COMMENT '이미지 세로 사이즈(pixel)',
    image                               LONGTEXT                    NOT NULL                            COMMENT '이미지 데이터',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

    CONSTRAINT                                                      PRIMARY KEY (survey_item_option_id, survey_item_option_image_id),
    CONSTRAINT fk_survey_item_option_images_survey_item_options     FOREIGN KEY (survey_item_option_id)
                                                                    REFERENCES otl_survey_item_options(survey_item_option_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '설문 옵션 이미지';

CREATE TABLE otl_survey_histories (
    history_id                          BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '히스토리 ID',
    survey_id                           BIGINT                      NOT NULL                            COMMENT '설문지 ID',
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (history_id),
    CONSTRAINT fk_survey_histories_surveys                          FOREIGN KEY (survey_id)
                                                                    REFERENCES otl_surveys(survey_id) ON DELETE CASCADE,
    CONSTRAINT fk_survey_histories_rooms                            FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '설문지 이력 정보';

CREATE TABLE otl_mail_histories (
    history_id                          BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '히스토리 ID',
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업의 ID',
    user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (history_id),
    CONSTRAINT fk_mail_histories_rooms                              FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms(id) ON DELETE CASCADE,
    CONSTRAINT fk_mail_histories_users                              FOREIGN KEY (user_id)
                                                                    REFERENCES otl_users(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '메일 발송 이력 정보';

CREATE TABLE otl_quiz_banks (
    quiz_id                             BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '퀴즈 ID',
    group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
    user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
    type                                VARCHAR(32)                 NOT NULL                            COMMENT '퀴즈 유형 [SingleChoice|MultiChoice|ShortAnswer|Subjective]',
    title                               VARCHAR(1024)               NOT NULL                            COMMENT '퀴즈 제목',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT PRIMARY KEY (quiz_id),
    CONSTRAINT fk_quiz_banks_groups                                 FOREIGN KEY (group_id)
                                                                    REFERENCES otl_groups(id) ON DELETE CASCADE,
    CONSTRAINT fk_quiz_banks_users                                  FOREIGN KEY (user_id)
                                                                    REFERENCES otl_users(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '퀴즈 정보';

CREATE TABLE otl_quiz_bank_images (
    quiz_id                             BIGINT                      NOT NULL                            COMMENT '퀴즈 ID',
    image_id                            INT                         NOT NULL                            COMMENT '퀴즈 이미지 ID',
    access_type                         VARCHAR(32)                 NOT NULL                            COMMENT '이미지 액세스 방법 [DB|S3|NOS]',
    access_url                          VARCHAR(1024)               NULL                                COMMENT '이미지 액세스 URL',
    name                                VARCHAR(256)                NOT NULL                            COMMENT '이름',
    type                                VARCHAR(256)                NOT NULL                            COMMENT '타입(확장자)',
    size                                BIGINT                      NOT NULL                            COMMENT '크기(Byte 단위)',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT PRIMARY KEY (quiz_id, image_id),
    CONSTRAINT fk_quiz_bank_images_quiz_banks                       FOREIGN KEY (quiz_id)
                                                                    REFERENCES otl_quiz_banks(quiz_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '퀴즈 이미지 정보';

CREATE TABLE otl_quiz_bank_image_binaries (
    quiz_id                             BIGINT                      NOT NULL                            COMMENT '퀴즈 ID',
    image_id                            INT                         NOT NULL                            COMMENT '퀴즈 이미지 ID',
    data                                LONGBLOB                    NOT NULL                            COMMENT '이미지 데이터',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT PRIMARY KEY (quiz_id, image_id),
    CONSTRAINT fk_quiz_bank_image_binaries_quiz_bank_images         FOREIGN KEY (quiz_id, image_id)
                                                                    REFERENCES otl_quiz_bank_images(quiz_id, image_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '퀴즈 이미지 데이터';

CREATE TABLE otl_quiz_bank_items (
    quiz_id                             BIGINT                      NOT NULL                            COMMENT '퀴즈 ID',
    item_id                             INT                         NOT NULL                            COMMENT '퀴즈 보기 순번',
    content                             VARCHAR(512)                NOT NULL                            COMMENT '퀴즈 보기 내용',
    is_correct                          CHAR(1)                     NOT NULL                            COMMENT '정답 여부 [Y|N]',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT PRIMARY KEY (quiz_id, item_id),
    CONSTRAINT fk_quiz_bank_items_quiz_banks                        FOREIGN KEY (quiz_id)
                                                                    REFERENCES otl_quiz_banks(quiz_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '퀴즈 객관식 보기 정보';

CREATE TABLE otl_quiz_histories (
    history_id                          BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '히스토리 ID',
    quiz_id                             BIGINT                      NOT NULL                            COMMENT '퀴즈 ID',
    room_id                             BIGINT                      NOT NULL                            COMMENT '수업 ID',
    created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
    updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

    CONSTRAINT                                                      PRIMARY KEY (history_id),
    CONSTRAINT fk_quiz_histories_quiz_banks                         FOREIGN KEY (quiz_id)
                                                                    REFERENCES otl_quiz_banks(quiz_id) ON DELETE CASCADE,
    CONSTRAINT fk_quiz_histories_rooms                              FOREIGN KEY (room_id)
                                                                    REFERENCES otl_rooms(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '퀴즈 이력 정보';

CREATE TABLE otl_post_topics (
                                 id                                  BIGINT                      NOT NULL AUTO_INCREMENT             COMMENT '토픽 ID',
                                 group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                 name                                VARCHAR(128)                NOT NULL                            COMMENT '이름',
                                 created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                 updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                 CONSTRAINT                                                      PRIMARY KEY (id),
                                 CONSTRAINT uk_otl_post_topics_name                              UNIQUE KEY (name),
                                 CONSTRAINT fk_post_topics_groups                        FOREIGN KEY (group_id)
                                     REFERENCES otl_groups(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                               COMMENT '모임 게시글 토픽 정보';

CREATE TABLE otl_posts (
                           post_id                             BIGINT                      NOT NULL  AUTO_INCREMENT            COMMENT '게시글 ID',
                           group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                           user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
                           topic_id                            BIGINT                      NULL                                COMMENT '게시글 주제 ID',
                           title                               VARCHAR(256)                NOT NULL                            COMMENT '게시글 제목',
                           body                                VARCHAR(10240)              NOT NULL                            COMMENT '게시글 본문',
                           view_count                          BIGINT                      NOT NULL                            COMMENT '조회수',
                           is_notice                           CHAR(1)                     NOT NULL                            COMMENT '공지여부 Y|N',
                           created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
                           updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

                           CONSTRAINT                                                      PRIMARY KEY (post_id, group_id, user_id),
                           CONSTRAINT fk_posts_group_users                                 FOREIGN KEY (group_id, user_id)
                               REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE,
                           CONSTRAINT fk_posts_topics                               FOREIGN KEY (topic_id)
                               REFERENCES otl_post_topics(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                         COMMENT '게시글';

CREATE TABLE otl_post_files (
                                post_id                             BIGINT                      NOT NULL                            COMMENT '게시글 ID',
                                group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                file_id                             BIGINT                      NOT NULL   AUTO_INCREMENT           COMMENT '파일 ID',
                                access_type                         VARCHAR(32)                 NOT NULL                            COMMENT '파일 저장 유형 [DB|AmazonS3|NaverObjectStorage]',
                                access_url                          VARCHAR(1024)               NOT NULL                            COMMENT '파일 접근 URL',
                                title                               VARCHAR(128)                NOT NULL                            COMMENT '제목',
                                name                                VARCHAR(256)                NOT NULL                            COMMENT '파일명',
                                type                                VARCHAR(256)                NOT NULL                            COMMENT '파일타입',
                                size                                BIGINT                      NOT NULL                            COMMENT '파일사이즈 (Byte 단위)',
                                user_id                             BIGINT                      NOT NULL                                COMMENT '업로드 사용자 ID',
                                created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                CONSTRAINT                                                     PRIMARY KEY (file_id, post_id),
                                CONSTRAINT fk_post_files_posts                                 FOREIGN KEY (post_id)
                                    REFERENCES otl_posts(post_id) ON DELETE CASCADE,
                                CONSTRAINT fk_post_files_groups                                FOREIGN KEY (group_id)
                                    REFERENCES otl_groups(id) ON DELETE CASCADE,
                                CONSTRAINT fk_post_files_users                                 FOREIGN KEY (user_id)
                                    REFERENCES otl_users(id) ON DELETE CASCADE,
                                CONSTRAINT fk_post_files_group_users                           FOREIGN KEY (group_id, user_id)
                                    REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '게시글 파일';

CREATE TABLE otl_post_file_binaries (
                                         post_file_id                        BIGINT                      NOT NULL                            COMMENT '파일 ID',
                                         data                                LONGBLOB                    NOT NULL                            COMMENT '파일 내용',
                                         created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                         updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                         CONSTRAINT                                                      PRIMARY KEY (post_file_id),
                                         CONSTRAINT fk_post_file_binaries_post_files                     FOREIGN KEY (post_file_id)
                                                                                                         REFERENCES otl_post_files(file_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                              COMMENT '게시글 파일 바이너리';


CREATE TABLE otl_tags (
                           tag_id                              BIGINT                      NOT NULL  AUTO_INCREMENT            COMMENT '태그 ID',
                           group_id                            BIGINT                      NOT NULL                            COMMENT '태그를 사용한 모임 ID',
                           user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
                           name                                VARCHAR(32)                 NOT NULL                            COMMENT '태그 이름',
                           created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
                           updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

                           CONSTRAINT                                                      PRIMARY KEY (tag_id, group_id, user_id),
                           CONSTRAINT fk_tags_group_users                                  FOREIGN KEY (group_id, user_id)
                                                                                           REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                               COMMENT '태그';

CREATE TABLE otl_group_tags (
                              group_id                          BIGINT                      NOT NULL                            COMMENT '모임 ID',
                              tag_id                            BIGINT                      NOT NULL                            COMMENT '태그 ID',

                              CONSTRAINT fk_group_tags_groups                               FOREIGN KEY (group_id)
                                                                                            REFERENCES otl_groups(id) ON DELETE CASCADE,
                              CONSTRAINT fk_group_tags_tags                                 FOREIGN KEY (tag_id)
                                                                                            REFERENCES otl_tags(tag_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                COMMENT '모임 태그';

CREATE TABLE otl_room_tags (
                              group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                              room_id                             BIGINT                      NOT NULL                            COMMENT '일정 ID',
                              tag_id                              BIGINT                      NOT NULL                            COMMENT '태그 ID',

                              CONSTRAINT fk_room_tags_groups                                  FOREIGN KEY (group_id)
                                                                                              REFERENCES otl_groups(id) ON DELETE CASCADE,
                              CONSTRAINT fk_room_tags_rooms                                   FOREIGN KEY (room_id)
                                                                                              REFERENCES otl_rooms(id) ON DELETE CASCADE,
                              CONSTRAINT fk_room_tags_tags                                    FOREIGN KEY (tag_id)
                                                                                              REFERENCES otl_tags(tag_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                   COMMENT '일정 태그';

CREATE TABLE otl_post_tags (
                               group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                               post_id                             BIGINT                      NOT NULL                            COMMENT '게시글 ID',
                               tag_id                              BIGINT                      NOT NULL                            COMMENT '태그 ID',

                               CONSTRAINT fk_post_tags_groups                                 FOREIGN KEY (group_id)
                                   REFERENCES otl_groups(id) ON DELETE CASCADE,
                               CONSTRAINT fk_post_tags_posts                                  FOREIGN KEY (post_id)
                                   REFERENCES otl_posts(post_id) ON DELETE CASCADE,
                               CONSTRAINT fk_post_tags_tags                                   FOREIGN KEY (tag_id)
                                   REFERENCES otl_tags(tag_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                    COMMENT '모임 게시글 태그';

CREATE TABLE otl_likes (
                           like_id                             BIGINT                      NOT NULL  AUTO_INCREMENT            COMMENT '좋아요 ID',
                           group_id                            BIGINT                      NOT NULL                            COMMENT '좋아요를 사용한 모임 ID',
                           user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
                           created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
                           updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

                           CONSTRAINT                                                      PRIMARY KEY (like_id, group_id, user_id),
                           CONSTRAINT fk_likes_groups                                      FOREIGN KEY (group_id)
                                                                                           REFERENCES otl_groups(id) ON DELETE CASCADE,
                           CONSTRAINT fk_likes_users                                       FOREIGN KEY (user_id)
                                                                                           REFERENCES otl_users(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                           COMMENT '좋아요';

CREATE TABLE otl_post_likes (
                                group_id                            BIGINT                      NOT NULL                            COMMENT '좋아요 ID',
                                post_id                             BIGINT                      NOT NULL                            COMMENT '게시글 ID',
                                like_id                             BIGINT                      NOT NULL                            COMMENT '좋아요 ID',


                                CONSTRAINT fk_post_likes_groups                                 FOREIGN KEY (group_id)
                                    REFERENCES otl_groups(id) ON DELETE CASCADE,
                                CONSTRAINT fk_post_likes_posts                                  FOREIGN KEY (post_id)
                                    REFERENCES otl_posts(post_id) ON DELETE CASCADE,
                                CONSTRAINT fk_post_likes_likes                                  FOREIGN KEY (like_id)
                                    REFERENCES otl_likes(like_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '모임 게시판글 좋아요';

CREATE TABLE otl_room_likes (
                                group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                room_id                             BIGINT                      NOT NULL                            COMMENT '일정 ID',
                                like_id                             BIGINT                      NOT NULL                            COMMENT '좋아요 ID',

                                CONSTRAINT fk_room_likes_groups                                 FOREIGN KEY (group_id)
                                    REFERENCES otl_groups(id) ON DELETE CASCADE,
                                CONSTRAINT fk_room_likes_rooms                                  FOREIGN KEY (room_id)
                                    REFERENCES otl_rooms(id) ON DELETE CASCADE,
                                CONSTRAINT fk_room_likes_likes                                  FOREIGN KEY (like_id)
                                    REFERENCES otl_likes(like_id) ON DELETE CASCADE

) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '일정 좋아요';

CREATE TABLE otl_comments (
                              comment_id                          BIGINT                      NOT NULL  AUTO_INCREMENT            COMMENT '댓글 ID',
                              group_id                            BIGINT                      NOT NULL                            COMMENT '댓글을 사용한 모임 ID',
                              user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
                              text                                VARCHAR(10240)              NOT NULL                            COMMENT '댓글 내용',
                              created_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),
                              updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW(),

                              CONSTRAINT                                                      PRIMARY KEY (comment_id, group_id, user_id),
                              CONSTRAINT fk_comments_group_users                              FOREIGN KEY (group_id, user_id)
                                                                                              REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                COMMENT '댓글';

CREATE TABLE otl_post_comments (
                                   group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                   post_id                             BIGINT                      NOT NULL                            COMMENT '게시글 ID',
                                   comment_id                          BIGINT                      NOT NULL                            COMMENT '댓글 ID',


                                   CONSTRAINT fk_post_comments_groups                              FOREIGN KEY (group_id)
                                       REFERENCES otl_groups(id) ON DELETE CASCADE,
                                   CONSTRAINT fk_post_comments_posts                               FOREIGN KEY (post_id)
                                       REFERENCES otl_posts(post_id) ON DELETE CASCADE,
                                   CONSTRAINT fk_post_comments_comments                            FOREIGN KEY (comment_id)
                                       REFERENCES otl_comments(comment_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                    COMMENT '모임 게시판글 댓글';

CREATE TABLE otl_room_comments (
                                group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                room_id                             BIGINT                      NOT NULL                            COMMENT '일정 ID',
                                comment_id                          BIGINT                      NOT NULL                            COMMENT '댓글 ID',

                                CONSTRAINT fk_room_comments_groups                              FOREIGN KEY (group_id)
                                                                                                REFERENCES otl_groups(id) ON DELETE CASCADE,
                                CONSTRAINT fk_room_comments_rooms                               FOREIGN KEY (room_id)
                                                                                                REFERENCES otl_rooms(id) ON DELETE CASCADE,
                                CONSTRAINT fk_room_comments_comments                            FOREIGN KEY (comment_id)
                                                                                                REFERENCES otl_comments(comment_id) ON DELETE CASCADE

) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                     COMMENT '일정 댓글';


CREATE TABLE otl_comment_files (
                                comment_id                          BIGINT                      NOT NULL                            COMMENT '댓글 ID',
                                group_id                            BIGINT                      NOT NULL                            COMMENT '댓글 ID',
                                file_id                             BIGINT                      NOT NULL  AUTO_INCREMENT            COMMENT '파일 ID',
                                access_type                         VARCHAR(32)                 NOT NULL                            COMMENT '파일 저장 유형 [DB|AmazonS3|NaverObjectStorage]',
                                access_url                          VARCHAR(1024)               NOT NULL                            COMMENT '파일 접근 URL',
                                title                               VARCHAR(128)                NOT NULL                            COMMENT '제목',
                                name                                VARCHAR(256)                NOT NULL                            COMMENT '파일명',
                                type                                VARCHAR(256)                NOT NULL                            COMMENT '파일타입',
                                size                                BIGINT                      NOT NULL                            COMMENT '파일사이즈 (Byte 단위)',
                                user_id                             BIGINT                      NULL                                COMMENT '업로드 사용자 ID',
                                created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                CONSTRAINT                                                      PRIMARY KEY (file_id, comment_id, group_id),
                                CONSTRAINT fk_comment_files_comments                            FOREIGN KEY (comment_id)
                                                                                                REFERENCES otl_comments(comment_id) ON DELETE CASCADE,
                                CONSTRAINT fk_comment_files_groups                              FOREIGN KEY (group_id)
                                                                                                REFERENCES otl_groups(id) ON DELETE CASCADE,
                                CONSTRAINT fk_comment_files_users                               FOREIGN KEY (user_id)
                                                                                                REFERENCES otl_users(id) ON DELETE CASCADE,
                                CONSTRAINT fk_comment_files_group_users                           FOREIGN KEY (group_id, user_id)
                                    REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                    COMMENT '게시글 파일';


CREATE TABLE otl_comment_file_binaries (
                                           comment_file_id                             BIGINT                      NOT NULL                            COMMENT '파일 순번',
                                           data                                LONGBLOB                    NOT NULL                            COMMENT '파일 내용',
                                           created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                           updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                           CONSTRAINT                                                      PRIMARY KEY (comment_file_id),
                                           CONSTRAINT fk_comment_file_binaries_comment_files               FOREIGN KEY (comment_file_id)
                                                                                                           REFERENCES otl_comment_files(file_id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                                                              COMMENT '게시글 파일 바이너리';

CREATE TABLE otl_user_hide_groups (
                            user_id                             BIGINT                      NOT NULL                            COMMENT '사용자 ID',
                            group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                            created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                            updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                            CONSTRAINT                                                      PRIMARY KEY (group_id, user_id),
                            CONSTRAINT fk_user_hide_groups_users                            FOREIGN KEY (user_id)
                                                                                            REFERENCES otl_users(id) ON DELETE CASCADE,
                            CONSTRAINT fk_user_hide_groups_groups                           FOREIGN KEY (group_id)
                                                                                            REFERENCES otl_groups(id) ON DELETE CASCADE

) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '숨김 모임 정보';


CREATE TABLE otl_connection_histories (
                                             id                             BIGINT   AUTO_INCREMENT     NOT NULL                            COMMENT '사용자 접속 ID',
                                             user_email                     VARCHAR(256)                NOT NULL                            COMMENT '사용자 Email',
                                             connection_type                VARCHAR(32)                 NOT NULL                            COMMENT '접속 유형 [LOGIN | LOGOUT]',
                                             os_type                        VARCHAR(256)                NOT NULL                            COMMENT '접속 OS [TYPE | UNKNOWN]',
                                             os_version                     VARCHAR(256)                NOT NULL                            COMMENT '접속 OS 버전 [VERSION | UNKNOWN]',
                                             browser_type                   VARCHAR(256)                NOT NULL                            COMMENT '접속 브라우저 [TYPE | UNKNOWN]',
                                             browser_version                VARCHAR(256)                NOT NULL                            COMMENT '접속 브라우저 버전 [VERSION | UNKNOWN]',
                                             created_ip                     VARCHAR(64)                 NOT NULL                            COMMENT '접속 IP',
                                             created_datetime               DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                             updated_datetime               DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                             CONSTRAINT                                                 PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '접속 이력';

CREATE TABLE otl_user_email_authentications (
                                             `id`                     BIGINT AUTO_INCREMENT      NOT NULL COMMENT '인증 ID', -- 인증 ID
                                             `user_id`                BIGINT                     NOT NULL COMMENT '사용자 ID', -- 사용자 ID
                                             `email`                  VARCHAR(128)               NOT NULL COMMENT '이메일', -- 인증하려는 이메일
                                             `auth_token`             VARCHAR(64)                NOT NULL COMMENT 'UUID V4', -- 인증코드
                                             `is_expired`             CHAR(1)                    NOT NULL DEFAULT 'N' COMMENT '만료 여부 Y/N', -- 만료 여부
                                             `expire_datetime`        DATETIME                   NULL NULL     COMMENT '데이터 만료일시', -- 만료일시
                                             `created_datetime`       DATETIME                   NOT NULL DEFAULT NOW() COMMENT '데이터 생성일시', -- 데이터 생성일시
                                             `updated_datetime`       DATETIME                   NOT NULL DEFAULT NOW() COMMENT '데이터 갱신일시', -- 데이터 생성일시
                                              CONSTRAINT                                         PRIMARY KEY (id, user_id, email, auth_token),
                                              CONSTRAINT fk_email_authentications_users          FOREIGN KEY (user_id)
                                                                                                 REFERENCES otl_users(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '[사용자] 이메일 인증 정보';

CREATE TABLE otl_group_invite_authentications (
                                                `id`                     BIGINT AUTO_INCREMENT      NOT NULL COMMENT '인증 ID', -- 인증 ID
                                                `group_id`               BIGINT                     NOT NULL COMMENT '모임 ID',
                                                `user_id`                BIGINT                     NOT NULL COMMENT '초대자 ID', -- 사용자 ID
                                                `access_token`           VARCHAR(64)                NOT NULL COMMENT 'UUID', -- 인증코드
                                                `connect_count`          INT                        NULL COMMENT '접속자수(20명 제한)', -- 인증코드
                                                `is_expired`             CHAR(1)                    NOT NULL DEFAULT 'N' COMMENT '만료 여부 Y/N', -- 만료 여부
                                                `expire_datetime`        DATETIME                   NULL NULL     COMMENT '데이터 만료일시', -- 만료일시
                                                `created_datetime`       DATETIME                   NOT NULL DEFAULT NOW() COMMENT '데이터 생성일시', -- 데이터 생성일시
                                                `updated_datetime`       DATETIME                   NOT NULL DEFAULT NOW() COMMENT '데이터 갱신일시', -- 데이터 생성일시
                                                CONSTRAINT                                          PRIMARY KEY (id, auth_token),
                                                CONSTRAINT fk_group_invite_authentications_group_users   FOREIGN KEY (group_id, user_id)
                                                                                                    REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE,
                                                CONSTRAINT fk_group_invite_authentications_users   FOREIGN KEY (user_id)
                                                    REFERENCES otl_users(id) ON DELETE CASCADE,
                                                CONSTRAINT fk_group_invite_authentications_groups   FOREIGN KEY (group_id)
                                                    REFERENCES otl_groups(id) ON DELETE CASCADE

) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '초대 URL 인증 정보';


CREATE TABLE otl_group_join_approvals (
                                                  `id`                     BIGINT AUTO_INCREMENT      NOT NULL COMMENT '가입승인 ID', -- 인증 ID
                                                  `group_id`               BIGINT                     NOT NULL                 COMMENT '모임 ID',
                                                  `user_id`                BIGINT                     NOT NULL                 COMMENT '가입신청 사용자 ID', -- 사용자 ID
                                                  `state`                  VARCHAR(32)                NOT NULL DEFAULT 'Wait'  COMMENT '사용자 상태 [Wait|Joined|Refused]',
                                                  `expire_datetime`        DATETIME                   NULL NULL                COMMENT '데이터 만료일시', -- 만료일시
                                                  `created_datetime`       DATETIME                   NOT NULL DEFAULT NOW()   COMMENT '데이터 생성일시', -- 데이터 생성일시
                                                  `updated_datetime`       DATETIME                   NOT NULL DEFAULT NOW()   COMMENT '데이터 갱신일시', -- 데이터 생성일시
                                                  CONSTRAINT                                          PRIMARY KEY (id),
                                                  CONSTRAINT fk_group_join_approvals_groups   FOREIGN KEY (group_id)
                                                                                              REFERENCES otl_groups(id) ON DELETE CASCADE,
                                                  CONSTRAINT fk_group_join_approvals_users    FOREIGN KEY (user_id)
                                                                                              REFERENCES otl_users(id) ON DELETE CASCADE
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '가입승인 정보';

CREATE TABLE otl_scheduled_deleted_files (
                                 id                                  BIGINT  AUTO_INCREMENT      NOT NULL                            COMMENT '삭제 대기 파일 ID',
                                 file_id                             BIGINT                      NOT NULL                            COMMENT '파일 ID',
                                 group_id                            BIGINT                      NOT NULL                            COMMENT '모임 ID',
                                 posted_type_id                      BIGINT                      NOT NULL                            COMMENT '파일 게시 대상 ID',
                                 posted_type                         VARCHAR(32)                 NOT NULL                            COMMENT '파일 게시 대상 타입',
                                 access_type                         VARCHAR(32)                 NOT NULL                            COMMENT '파일 저장 유형 [DB|AmazonS3|NaverObjectStorage]',
                                 access_url                          VARCHAR(1024)               NOT NULL                            COMMENT '파일 접근 URL',
                                 title                               VARCHAR(128)                NOT NULL                            COMMENT '제목',
                                 name                                VARCHAR(256)                NOT NULL                            COMMENT '파일명',
                                 type                                VARCHAR(256)                NOT NULL                            COMMENT '파일타입',
                                 size                                BIGINT                      NOT NULL                            COMMENT '파일사이즈 (Byte 단위)',
                                 user_id                             BIGINT                      NOT NULL                            COMMENT '업로드 사용자 ID',
                                 created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                 updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                 CONSTRAINT                                                      PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                        COMMENT '완전 삭제 대기 파일';


CREATE TABLE otl_paper_groups (
                                             id                                  BIGINT  AUTO_INCREMENT      NOT NULL                            COMMENT 'Auto increment ID',
                                             paper_group_id                      VARCHAR(64)                 NOT NULL                            COMMENT '서식 ID',
                                             section                             INT                         NOT NULL                            COMMENT '서식 section',
                                             owner                               INT                         NOT NULL                            COMMENT '서식 owner',
                                             book_code                           INT                         NOT NULL                            COMMENT '서식 book code',
                                             page_start                          INT                         NOT NULL                            COMMENT '서식 page start',
                                             page_end                            INT                         NOT NULL                            COMMENT '서식 page end',
                                             title                               VARCHAR(128)                NOT NULL                            COMMENT '서식 title',
                                             tag                                 VARCHAR(128)                NULL                                COMMENT '서식 tag',
                                             group_id                            BIGINT                      NOT NULL                            COMMENT '서식 업로드 그룹 ID',
                                             user_id                             BIGINT                      NOT NULL                            COMMENT '서식 업로드 사용자 ID',
                                             is_public                           CHAR(1)                     NOT NULL                            COMMENT '공개 여부 [Y|N]',
                                             is_deleted                          CHAR(1)                     NOT NULL                            COMMENT '삭제 여부 [Y|N]',
                                             created_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                                             updated_datetime                    DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                                             CONSTRAINT                                                      PRIMARY KEY (id, paper_group_id),
                                             CONSTRAINT fk_paper_groups_groups                               FOREIGN KEY (group_id)
                                                                                                             REFERENCES otl_groups(id),
                                             CONSTRAINT fk_paper_groups_users                                FOREIGN KEY (user_id)
                                                                                                             REFERENCES otl_users(id),
                                             CONSTRAINT fk_paper_groups_group_users                          FOREIGN KEY (group_id, user_id)
                                                                                                             REFERENCES otl_group_users(group_id, user_id)
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                                             COMMENT '스마트펜 서식 데이터';


CREATE TABLE otl_emojis (
                           id                              INT                         NOT NULL  AUTO_INCREMENT            COMMENT '이모지 ID',
                           name                            VARCHAR(256)                NOT NULL                            COMMENT '이모지 이름',
                           image_url                       VARCHAR(1024)               NULL                                COMMENT '이모지 접근 경로',
                           created_datetime                DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 생성일시',
                           updated_datetime                DATETIME                    NOT NULL DEFAULT NOW()              COMMENT '데이터 변경일시',

                           CONSTRAINT                                                      PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                           COMMENT '이모지';

CREATE TABLE otl_comment_emoji_histories (
                            comment_id                      BIGINT                      NOT NULL                           COMMENT '댓글 ID',
                            user_id                         BIGINT                      NOT NULL                           COMMENT '사용자 ID',
                            emoji_id                        INT                         NOT NULL                           COMMENT '이모지 ID',
                            created_datetime                DATETIME                    NOT NULL DEFAULT NOW()             COMMENT '데이터 생성일시',
                            updated_datetime                DATETIME                    NOT NULL DEFAULT NOW()             COMMENT '데이터 변경일시',

                            CONSTRAINT                                                  PRIMARY KEY (comment_id, user_id),
                            CONSTRAINT fk_comment_emoji_histories_comments              FOREIGN KEY (comment_id)
                                                                                        REFERENCES otl_comments(comment_id) ON DELETE CASCADE,
                            CONSTRAINT fk_comment_emoji_histories_users                 FOREIGN KEY (user_id)
                                                                                        REFERENCES otl_users(id) ON DELETE CASCADE,
                            CONSTRAINT fk_comment_emoji_histories_emojis                FOREIGN KEY (emoji_id)
                                                                                        REFERENCES otl_emojis(id)
) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci                           COMMENT '이모지 사용이력';

CREATE TABLE otl_group_invite_members (
                                                  `id`                     BIGINT AUTO_INCREMENT      NOT NULL                 COMMENT '초대 ID', -- 인증 ID
                                                  `group_id`               BIGINT                     NOT NULL                 COMMENT '초대 대상 그룹 ID',
                                                  `invitee_id`             BIGINT                     NOT NULL                 COMMENT '초대를 받은 사용자 ID', -- 사용자 ID
                                                  `host_id`                BIGINT                     NOT NULL                 COMMENT '초대를 한 사용자(주최자) ID', -- 사용자 ID
                                                  `is_notify`              CHAR(1)                    NOT NULL DEFAULT 'N'     COMMENT '알림 여부 Y/N', -- 만료 여부
                                                  `notified_datetime`      DATETIME                   NULL                     COMMENT '알림 확인일시', -- 확인일시
                                                  `state`                  VARCHAR(32)                NOT NULL DEFAULT 'Wait'  COMMENT '초대 승인 상태 [Wait|Agree|Disagree]',
                                                  `stated_datetime`        DATETIME                   NOT NULL DEFAULT NOW()   COMMENT '초대 승인 / 거절 일시', -- 초대 승인 / 거절 일시
                                                  `created_datetime`       DATETIME                   NOT NULL DEFAULT NOW()   COMMENT '데이터 생성일시', -- 데이터 생성일시
                                                  CONSTRAINT                                          PRIMARY KEY (id, group_id, invitee_id, host_id),
                                                  CONSTRAINT fk_group_invite_members_group_users      FOREIGN KEY (group_id, host_id)
                                                                                                      REFERENCES otl_group_users(group_id, user_id) ON DELETE CASCADE,
                                                  CONSTRAINT fk_group_invite_members_users            FOREIGN KEY (invitee_id)
                                                                                                      REFERENCES otl_users(id) ON DELETE CASCADE,
                                                  CONSTRAINT fk_group_invite_members_groups           FOREIGN KEY (group_id)
                                                                                                      REFERENCES otl_groups(id) ON DELETE CASCADE

) ENGINE InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '초대 멤버 정보';



