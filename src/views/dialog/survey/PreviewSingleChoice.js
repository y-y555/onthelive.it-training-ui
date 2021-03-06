import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {
    Box,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio, Input
} from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import Sample1 from "../../../common/images/Sample1.jpg";

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
        fontSize: '1.125rem',
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
        fontSize: '1.125rem',
        color:'#0097ff'
    },
    inputBoxIn:{
        fontSize: '0.875rem',
        color: '#0d0d0d',
        fontWeight: 500,
        borderBottom:'1px solid #979797',
        marginLeft:25,
        boxSizing:'border-box'
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

class PreviewSingleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes, survey } = this.props;

        return (
            <div className={classes.root}>
                {/* 객관식 단일형 제목입력 x */}
                {/*<Typography className={classes.textStyle}>좌측 질문 제목이 노출됩니다</Typography>*/}
                {/*<Typography className={clsx(classes.textStyle, classes.explanationText)}>좌측 설문지 질문에 대한 설명이 노출됩니다</Typography>*/}

                {/* 객관식 단일형 제목입력 o (필수 체크  -> * ) */}
                <Typography className={classes.textStyle} style={{color:'#0d0d0d'}}>온라인 강의를 듣기 위해 사용하는 플랫폼은 어떤 것이 있는지 한개 만 선택해주세요. <span style={{color:'#FF0000'}}>*</span></Typography>
                <Typography className={clsx(classes.textStyle, classes.explanationText)} style={{color:'#0d0d0d'}}>좌측 설문지 질문에 대한 설명이 노출됩니다</Typography>

                {/* 이미지가 있는경우*/}
                {/*<Box className={classes.titleImgBox} mb={2}>*/}
                {/*    <img src={Sample1} alt="" style={{width:'100%'}} />*/}
                {/*</Box>*/}

                <Box style={{marginTop: 28}}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            row
                            aria-label="imageExample"
                            name="imageExample"
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            {/* 이미지o : 50%, 이미지x : 100%*/}
                            <Box style={{width:'50%'}}>
                                <FormControlLabel value="보기1"
                                                  control={
                                                      <Radio
                                                          icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color:'#979797'}}/>}
                                                          checkedIcon={<RadioButtonCheckedIcon className={classes.radioIcon} />}
                                                      />
                                                  }
                                                  label="보기1"
                                                  className={classes.formControlLabel}
                                />
                                {/* 이미지o 일 때만 표시 */}
                                <Box className={classes.imgBox} mt={1}>
                                    <img src={Sample1} alt="" style={{width:'100%'}}/>
                                </Box>
                            </Box>

                            {/* 이미지o : 50%, 이미지x : 100%*/}
                            <Box style={{width:'50%'}}>
                                <FormControlLabel value="보기2"
                                                  control={
                                                      <Radio
                                                          icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color:'#979797'}}/>}
                                                          checkedIcon={<RadioButtonCheckedIcon className={classes.radioIcon} />}
                                                      />
                                                  }
                                                  label="보기2"
                                                  className={classes.formControlLabel}
                                />
                                {/* 이미지o 일 때만 표시 */}
                                <Box className={classes.imgBox} mt={1}>
                                    <img src={Sample1} alt="" style={{width:'100%'}}/>
                                </Box>
                            </Box>

                            {/* 기타 */}
                            {/* 이미지o : 50%, 이미지x : 100%*/}
                            <Box display='flex' flexDirection='column' style={{width:'50%'}}>
                                <FormControlLabel value="기타"
                                                  control={
                                                      <Radio
                                                          icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color:'#979797'}}/>}
                                                          checkedIcon={<RadioButtonCheckedIcon className={classes.radioIcon}/>}
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
                                <Box className={classes.imgBox} mt={1}>
                                    <img src={Sample1} alt="" style={{width:'100%'}}/>
                                </Box>
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>

            </div>
        );
    }
}

export default withStyles(style)(PreviewSingleChoice);