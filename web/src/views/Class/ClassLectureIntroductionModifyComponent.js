import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button,Typography} from "@material-ui/core";
import introImg from "../../common/images/introImg.jpg";
import clsx from "clsx";

const styles = _theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70,
    },
    btnStyle:{
        width:280,
        height:60,
        textAlign:'center',
        color:'#fff',
        backgroundColor:'#c2c2c2',
        fontSize:'1.125rem',
        fontWeight:600,
        borderRadius:7,
        '&:hover':{
            backgroundColor:'#c2c2c2',
        }
    },
    btnConfirm:{
        backgroundColor:'#1a457e',
        marginLeft:28,
        '&:hover':{
            backgroundColor:'#1a457e',
        }
    },
    titleStyle:{
        borderBottom:'1px solid #ddd',
        paddingBottom:30,
        marginBottom: 30,
        '& h3':{
            fontSize: '1.75rem',
            fontWeight: 600,
            marginTop: 30,
        }
    },
    paragraph:{
        marginBottom:60,
        '& h5':{
            marginTop:20,
        },
        '& p':{
            marginBottom:'1rem',
        },
        '& li':{
            marginBottom:6,
        }
    }
});
class ClassLectureIntroductionModifyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box className={classes.titleStyle}>
                <Typography variant='h3'>악성코드 분석</Typography>
                </Box>
                <Box className={classes.paragraph}>
                    <Typography>
                        최근 공격자들은 자바스크립트, 오피스 문서파일, PDF 문서파일, HWP 문서파일, SWF 파일, RTF 파일 등을 악성코드로 사용하여 공격을 전개 합니다.
                        이러한 악성 파일들은 사회공학 관점에서 정교하게 제작된 메일에 첨부된 후 공격 대상에게 전달 됩니다.
                    </Typography>
                    <Typography>
                        오늘날의 침해사고 대응 현장에는 다양한 악성코드 유입 경로가 존재 합니다.
                        그 중 가장 빈번하게 악용되는 경로가 이메일(악성 문서를 첨부 시킨) 입니다.
                        침해사고 대응 전문가는 이렇게 이메일을 통해 전달된 악성 문서를 식별/확보한 후
                        임베드된 코드들을 분석할 수 있어야 공격자의 의도를 이해하고 제어시스템(C2)도 추적할 수 있습니다.
                    </Typography>
                    <Typography>
                        본 과목은 문서 파일에 대한 악성 여부를 식별하는(Triage) 방법을 포함하여 임베드된 악성 스크립트 및 쉘코드 등을 추출하여 분석하는 방법을 다룹니다.
                        교육에 사용되는 대부분의 악성코드는 실제 침투 공격에 사용된 것들을 유형별로 다종 활용 합니다.
                        교육 대상은 실무의 악성코드 분석가들이 가져야할 지식과 기술 함양을 목표로 교육을 받을 수 있습니다.
                    </Typography>
                    {/*<Typography>*/}
                    {/*※유닉스 혹은 리눅스 사용 및 관리 경험이*/}
                    {/*반드시 있어야 본 과정을 무난하게 학습 가능합니다.*/}
                    {/*</Typography>*/}
                    <Typography variant='h5'>

                    학습목표
                    </Typography>
                    <ul>
                        <li>
                            악성 MS 오피스 문서 파일을 판별하기 위해서는 기본적으로 악성 MS 오피스 문서 파일이 가진 이상 징후의 특징을 파악하고 특징이 관찰될 수 밖에 없는 기술적 배경에 대해서 이해하는 것이 가장 중요합니다.
                            해당 동영상은 분석 대상 MS 오피스 문서에 대한 이상징후식별(Triage)의 대한 전체적인 내용을 담고 있습니다.
                            예를 들어 OLEDUMP 등의 도구를 활용하여 파일의 내부에 있는 스토리지 및 스트림의 구조적 이상징후를 식별 하거나 악성 데이터 패턴의 존재 여부를 확인할 수 있습니다.
                        </li>
                        <li>
                            악성 HWP 문서 파일을 판별하기 위해서는 기본적으로 악성 HWP 문서 파일이 가진 이상 징후의 특징을(약 5가지 이상) 파악하고 특징이 관찰될 수 밖에 없는 기술적 배경에 대해서 이해하는 것이 가장 중요합니다.
                            해당 동영상은 분석 대상 MS 오피스 문서에 대한 이상징후식별(Triage)의 대한 전체적인 내용을 담고 있습니다. 예를 들어 OLEDUMP 등의 도구를 활용하여 파일의 내부에 있는 스토리지 및
                            스트림의 구조적 이상징후를 식별 하거나 악성 데이터 패턴의 존재 여부를 확인할 수 있습니다.
                        </li>
                        <li>
                            MS 오피스 문서 내에 선언되어 있는 DDEAUTO 명령어의 존재 여부와 해당 명령어를 통해 실행되는 코드 루틴을 식별하여 별도로 추출할 수 있습니다.
                            DDEAUTO 명령어를 통해 실행되는 루틴은 일반적으로 윈도우의 CMD 혹은 파워쉘 스크립트와 관련 있습니다.
                            DDE를 통해 실행되는 공격자의 프로시저를 분석하여 최종 공격자의 행위를 식별합니다.
                        </li>
                        {/*<li>*/}
                        {/*    칼리 리눅스와 오픈소스 기반 보안 Tool을 활용하여, 불법 침입 및 침해 사고에 대한 처리를 할 수 있다.*/}
                        {/*</li>*/}
                    </ul>
                    <Typography variant='h5'>
                    학습대상
                    </Typography>
                    <ul>
                        <li>
                            악성코드 분석가
                        </li>
                        <li>
                            보안실무 담당자
                        </li>
                        {/*<li>*/}
                        {/*    유닉스/리눅스 경험자로서 시스템 보안업무를 담당하여야 하는 분 */}
                        {/*</li>*/}
                    </ul>
                </Box>
                {/*<img src={introImg} alt=''/>*/}
                {/*<Box display='flex' alignItems='center' justifyContent='flex-end'>*/}
                {/*    <Button className={classes.btnStyle} disableRipple>취소</Button>*/}
                {/*    <Button className={clsx(classes.btnStyle, classes.btnConfirm)} disableRipple>저장</Button>*/}
                {/*</Box> */}
            </div>
        );
    }
}

export default withStyles(styles)(ClassLectureIntroductionModifyComponent);
