import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";

const styles = theme => ({
    root:{
        width:870,
        padding:'88px 0 55px',
        margin:'0 auto'
    },
    titleText:{
        fontSize:'1.875rem',
        color:'#000',
        paddingBottom:14
    },
    accordionBox:{
        borderTop: '1px solid #c0c2c3',
        boxShadow: 'none',
        margin:'0 auto',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        "&.Mui-expanded":{
            marginBottom:0
        },
        "& .MuiAccordionSummary-content":{
            margin:'20px 0',
            "& p":{
                fontSize:'1.063rem',
                color:'#000',
                fontWeight:600
            }
        },
        "& .MuiAccordionSummary-root":{
            padding:0
        },
        "&:last-child":{
            borderRadius:0
        }
    },
    accordionBoxTop:{
        borderTop: '3px solid #000',
    },
    accordionDetails:{
        padding:22,
        flexDirection:'column',
        background:'#f8f8f8',
        marginTop:30,
        "& p":{
            fontSize:'1.063rem',
            color:'#333',
        },
    }
});


class ServiceCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
        };
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                <Box>
                    <Typography className={classes.titleText}>고객센터</Typography>
                </Box>
                <Accordion expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} className={clsx(classes.accordionBox, classes.accordionBoxTop)}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Q. 기업 서비스 가입 및 이용 절차가 궁금합니다.</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다.</Typography>
                        <Typography>조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요.</Typography>
                        <Typography>엔터프라이즈는 사용 인원이 2,500명 이상일 경우 최적화된 환경을 제공해드리기 위해 상담이 필요한 플랜입니다.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>Q. 무료 이용(체험)은 무엇인가요?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다.</Typography>
                        <Typography>조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요.</Typography>
                        <Typography>엔터프라이즈는 사용 인원이 2,500명 이상일 경우 최적화된 환경을 제공해드리기 위해 상담이 필요한 플랜입니다.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>Q. 엔터프라이즈 비용은 얼마인가요?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다.</Typography>
                        <Typography>조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요.</Typography>
                        <Typography>엔터프라이즈는 사용 인원이 2,500명 이상일 경우 최적화된 환경을 제공해드리기 위해 상담이 필요한 플랜입니다.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. 정기결제는 어떻게 하나요?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다.</Typography>
                        <Typography>조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요.</Typography>
                        <Typography>엔터프라이즈는 사용 인원이 2,500명 이상일 경우 최적화된 환경을 제공해드리기 위해 상담이 필요한 플랜입니다.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. 온더라이브 500 ~ 2,500 과 엔터프라이즈의 차이는 무엇인가요?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다.</Typography>
                        <Typography>조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요.</Typography>
                        <Typography>엔터프라이즈는 사용 인원이 2,500명 이상일 경우 최적화된 환경을 제공해드리기 위해 상담이 필요한 플랜입니다.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. 유료 이용 중 사용자수 변경 또는 요금제를 변경하려면 어떻게 해야 하나요?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다.</Typography>
                        <Typography>조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요.</Typography>
                        <Typography>엔터프라이즈는 사용 인원이 2,500명 이상일 경우 최적화된 환경을 제공해드리기 위해 상담이 필요한 플랜입니다.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. 정기결제를 잠시 중지 또는 해지하고 싶습니다.</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다.</Typography>
                        <Typography>조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요.</Typography>
                        <Typography>엔터프라이즈는 사용 인원이 2,500명 이상일 경우 최적화된 환경을 제공해드리기 위해 상담이 필요한 플랜입니다.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. 회원 탈퇴를 하고 싶습니다.</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다.</Typography>
                        <Typography>조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요.</Typography>
                        <Typography>엔터프라이즈는 사용 인원이 2,500명 이상일 경우 최적화된 환경을 제공해드리기 위해 상담이 필요한 플랜입니다.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel9'} onChange={this.handleChange('panel9')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. 정기결제를 잠시 중지 또는 해지하고 싶습니다.</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다.</Typography>
                        <Typography>조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요.</Typography>
                        <Typography>엔터프라이즈는 사용 인원이 2,500명 이상일 경우 최적화된 환경을 제공해드리기 위해 상담이 필요한 플랜입니다.</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

export default withStyles(styles)(ServiceCenter);