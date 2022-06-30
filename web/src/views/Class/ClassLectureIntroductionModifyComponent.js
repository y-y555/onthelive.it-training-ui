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
                <Typography variant='h3'>UNIX/Linux 보안 실무반</Typography>
                </Box>
                <Box className={classes.paragraph}>
                    <Typography>
                    본 과정에서는 서버용 시스템으로 많이 활용되고 있는
                    유닉스와 리눅스 보안에 대해 다각도로 살펴보고,
                        보다 안전한 서버 운영을 위한 보안 설정 방법을 학습합니다.</Typography>
                    <Typography>
                    실무에서 바로 활용할 수 있도록 Unix/Linux 취약점
                    점검 리스트를 통한 점검 조치 방법을 학습하여 시스템을
                    강화 할 수 있는역량을 키울 수 있습니다.
                    </Typography>
                    <Typography>
                    가상머신 프로그램을 활용하여 칼리 리눅스를 이용한
                    시스템 공격의 예를 실습 하여
                    시스템 운영 관리자, 시스템 보안 관리자 입장에서
                    보안을 이해할 수 있도록 한 과정입니다.
                    </Typography>
                    <Typography>
                    ※유닉스 혹은 리눅스 사용 및 관리 경험이
                    반드시 있어야 본 과정을 무난하게 학습 가능합니다.
                    </Typography>
                    <Typography variant='h5'>

                    학습목표
                    </Typography>
                    <ul>
                        <li>
                    UNIX/Linux 시스템의 보안설정을 통하여, UNIX/Linux 시스템을 안전하게 관리할 수 있다.
                        </li><li>
                    UNIX/Linux 시스템의 보안 취약점을 파악하고, 적절한 보안책을 실제 작업을 통하여 적용 및 수립할 수 있다. </li><li>
                    UNIX/Linux 취약점 분석 및 조치 가이드라인을 활용하여 보안 작업을 수행할 수 있다. </li><li>
                    칼리 리눅스와 오픈소스 기반 보안 Tool을 활용하여, 불법 침입 및 침해 사고에 대한 처리를 할 수 있다. </li>
                    </ul>
                    <Typography variant='h5'>
                    학습대상
                    </Typography>
                    <ul>
                        <li>
                    유닉스/리눅스 서버 관리 실무자(관리 엔지니어) </li><li>
                    보안 실무자로서 유닉스/리눅스 시스템 보안 담당자 </li><li>
                    유닉스/리눅스 경험자로서 시스템 보안업무를 담당하여야 하는 분 </li></ul>
                </Box>
                <img src={introImg} alt=''/>
                {/*<Box display='flex' alignItems='center' justifyContent='flex-end'>*/}
                {/*    <Button className={classes.btnStyle} disableRipple>취소</Button>*/}
                {/*    <Button className={clsx(classes.btnStyle, classes.btnConfirm)} disableRipple>저장</Button>*/}
                {/*</Box> */}
            </div>
        );
    }
}

export default withStyles(styles)(ClassLectureIntroductionModifyComponent);
