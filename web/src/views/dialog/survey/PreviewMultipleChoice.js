import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, Input, Typography} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const style = theme => ({
    root:{
        width:'100%',
        border: '1px solid #c4c9de',
        borderRadius: 8,
        marginBottom: 40,
        padding:'30px 20px 25px',
        boxSizing:'border-box'
    },
    textStyle:{
        fontSize: '1..125rem',
        color: '#a3a8af',
        fontWeight: 600,
    },
    explanationText:{
        fontSize: '0.75rem',
        fontWeight: 400,
        marginTop:12
    },
    formControl:{
        width:'100%',
        "& .MuiInput-underline:after, .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before ":{
            borderBottom:0
        },
        "& label + .MuiInput-formControl":{
            marginTop:0
        }
    },
    formControlLabel:{
        "& .MuiFormControlLabel-label":{
            fontSize: '0.875rem',
            color: '#0d0d0d',
            fontWeight: 400,
        }
    },
    radioIcon:{
        fontSize:'1.125rem',
        color:'#0097ff'
    },
    inputBoxIn:{
        fontSize: '0.875rem',
        color: '#0d0d0d',
        fontWeight: 500,
        borderBottom:'1px solid #979797',
        marginLeft:25,
    },
    titleImgBox:{
        width: 241,
        height: 181,
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
    },
    imgBox:{
        width: 192,
        height: 144,
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
        marginLeft:25,
    },
});

class PreviewMultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            example1: false,
            example2: false,
            example3: false,
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { example1, example2, example3 } = this.state;

        return (
            <div className={classes.root}>
                {/* 객관식 단일형 제목입력 x */}
                <Typography className={classes.textStyle}>좌측 질문 제목이 노출됩니다</Typography>
                <Typography className={clsx(classes.textStyle, classes.explanationText)}>좌측 설문지 질문에 대한 설명이 노출됩니다</Typography>

                {/* 객관식 단일형 제목입력 o (필수 체크  -> * ) */}
                {/*<Typography className={classes.textStyle} style={{color:'#0d0d0d'}}>온라인 강의를 듣기 위해 사용하는 플랫폼은 어떤 것이 있는지 한개 만 선택해주세요. <span style={{color:'#FF0000'}}>*</span></Typography>*/}
                {/*<Typography className={clsx(classes.textStyle, classes.explanationText)} style={{color:'#0d0d0d'}}>좌측 설문지 질문에 대한 설명이 노출됩니다</Typography>*/}

                {/* 이미지가 있는경우*/}
                {/*<Box className={classes.titleImgBox} mb={2}>*/}
                {/*    <img src={Sample1} alt="" style={{width:'100%'}}/>*/}
                {/*</Box>*/}

                <Box style={{marginTop: 28}}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup
                            row
                            aria-label="imageExample"
                            name="imageExample"
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            {/* 이미지o : 50%, 이미지x : 100%*/}
                            <Box style={{width:'100%'}}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={example1}
                                            onChange={this.handleChange('example1')}
                                            value="example1"
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon className={classes.radioIcon} style={{color:'#979797'}}/>}
                                            checkedIcon={<CheckBoxIcon className={classes.radioIcon} />}
                                        />
                                    }
                                    label="보기1"
                                    className={classes.formControlLabel}
                                />
                                {/* 이미지o 일 때만 표시 */}
                                {/*<Box className={classes.imgBox} mt={1}>*/}
                                {/*    <img src={Sample1} alt="" style={{width:'100%'}}/>*/}
                                {/*</Box>*/}
                            </Box>
                            {/* 이미지o : 50%, 이미지x : 100%*/}
                            <Box style={{width:'100%'}}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={example2}
                                            onChange={this.handleChange('example2')}
                                            value="example2"
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon className={classes.radioIcon} style={{color:'#979797'}}/>}
                                            checkedIcon={<CheckBoxIcon className={classes.radioIcon} />}
                                        />
                                    }
                                    label="보기2"
                                    className={classes.formControlLabel}
                                />
                                {/* 이미지o 일 때만 표시 */}
                                {/*<Box className={classes.imgBox} mt={1}>*/}
                                {/*    <img src={Sample1} alt="" style={{width:'100%'}}/>*/}
                                {/*</Box>*/}
                            </Box>

                            {/* 기타 */}
                            {/* 이미지o : 50%, 이미지x : 100%*/}
                            <Box display='flex' flexDirection='column' style={{width:'100%'}}>
                                <FormControlLabel value="기타"
                                                  control={
                                                      <Checkbox
                                                          checked={example3}
                                                          onChange={this.handleChange('example3')}
                                                          value="example3"
                                                          color="primary"
                                                          icon={<CheckBoxOutlineBlankIcon className={classes.radioIcon} style={{color:'#979797'}} />}
                                                          checkedIcon={<CheckBoxIcon className={classes.radioIcon} />}
                                                      />
                                                  }
                                                  label="기타"
                                                  className={classes.formControlLabel}
                                />
                                <Input
                                    placeholder=""
                                    className={clsx(classes.textStyle, classes.inputBoxIn)}
                                    inputProps={{
                                        'aria-label': 'Description',
                                    }}
                                />
                                {/* 이미지o 일 때만 표시 */}
                                {/*<Box className={classes.imgBox} mt={1}>*/}
                                {/*    <img src={Sample1} alt="" style={{width:'100%'}}/>*/}
                                {/*</Box>*/}
                            </Box>
                        </FormGroup>
                    </FormControl>
                </Box>
            </div>
        );
    }
}

export default withStyles(style)(PreviewMultipleChoice);