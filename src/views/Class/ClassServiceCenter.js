import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, IconButton, Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
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


class ClassServiceCenter extends Component {
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
                <Accordion expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} className={clsx(classes.accordionBox, classes.accordionBoxTop)}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Q. ?????? ????????? ?????? ??? ?????? ????????? ???????????????.</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. ?????? ????????? ??? ??????????????? ????????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????????.</Typography>
                        <Typography>?????? ????????? ?????? ?????? ????????? ????????????????????? ?????? ????????? ?????? ????????? ???????????????.</Typography>
                        <Typography>????????????????????? ?????? ????????? 2,500??? ????????? ?????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ???????????????.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>Q. ?????? ??????(??????)??? ????????????????</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. ?????? ????????? ??? ??????????????? ????????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????????.</Typography>
                        <Typography>?????? ????????? ?????? ?????? ????????? ????????????????????? ?????? ????????? ?????? ????????? ???????????????.</Typography>
                        <Typography>????????????????????? ?????? ????????? 2,500??? ????????? ?????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ???????????????.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>Q. ?????????????????? ????????? ????????????????</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. ?????? ????????? ??? ??????????????? ????????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????????.</Typography>
                        <Typography>?????? ????????? ?????? ?????? ????????? ????????????????????? ?????? ????????? ?????? ????????? ???????????????.</Typography>
                        <Typography>????????????????????? ?????? ????????? 2,500??? ????????? ?????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ???????????????.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. ??????????????? ????????? ??????????</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. ?????? ????????? ??? ??????????????? ????????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????????.</Typography>
                        <Typography>?????? ????????? ?????? ?????? ????????? ????????????????????? ?????? ????????? ?????? ????????? ???????????????.</Typography>
                        <Typography>????????????????????? ?????? ????????? 2,500??? ????????? ?????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ???????????????.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. ??????????????? 500 ~ 2,500 ??? ????????????????????? ????????? ????????????????</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. ?????? ????????? ??? ??????????????? ????????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????????.</Typography>
                        <Typography>?????? ????????? ?????? ?????? ????????? ????????????????????? ?????? ????????? ?????? ????????? ???????????????.</Typography>
                        <Typography>????????????????????? ?????? ????????? 2,500??? ????????? ?????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ???????????????.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. ?????? ?????? ??? ???????????? ?????? ?????? ???????????? ??????????????? ????????? ?????? ??????????</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. ?????? ????????? ??? ??????????????? ????????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????????.</Typography>
                        <Typography>?????? ????????? ?????? ?????? ????????? ????????????????????? ?????? ????????? ?????? ????????? ???????????????.</Typography>
                        <Typography>????????????????????? ?????? ????????? 2,500??? ????????? ?????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ???????????????.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. ??????????????? ?????? ?????? ?????? ???????????? ????????????.</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. ?????? ????????? ??? ??????????????? ????????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????????.</Typography>
                        <Typography>?????? ????????? ?????? ?????? ????????? ????????????????????? ?????? ????????? ?????? ????????? ???????????????.</Typography>
                        <Typography>????????????????????? ?????? ????????? 2,500??? ????????? ?????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ???????????????.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. ?????? ????????? ?????? ????????????.</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. ?????? ????????? ??? ??????????????? ????????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????????.</Typography>
                        <Typography>?????? ????????? ?????? ?????? ????????? ????????????????????? ?????? ????????? ?????? ????????? ???????????????.</Typography>
                        <Typography>????????????????????? ?????? ????????? 2,500??? ????????? ?????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ???????????????.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel9'} onChange={this.handleChange('panel9')} className={classes.accordionBox}>
                    <AccordionSummary
                        expandIcon={<ArrowDownIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Q. ??????????????? ?????? ?????? ?????? ???????????? ????????????.</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>A. ?????? ????????? ??? ??????????????? ????????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????????.</Typography>
                        <Typography>?????? ????????? ?????? ?????? ????????? ????????????????????? ?????? ????????? ?????? ????????? ???????????????.</Typography>
                        <Typography>????????????????????? ?????? ????????? 2,500??? ????????? ?????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ???????????????.</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

export default withStyles(styles)(ClassServiceCenter);