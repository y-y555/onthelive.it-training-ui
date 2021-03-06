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
                {/* ????????? ????????? ???????????? x */}
                {/*<Typography className={classes.textStyle}>?????? ?????? ????????? ???????????????</Typography>*/}
                {/*<Typography className={clsx(classes.textStyle, classes.explanationText)}>?????? ????????? ????????? ?????? ????????? ???????????????</Typography>*/}

                {/* ????????? ????????? ???????????? o (?????? ??????  -> * ) */}
                <Typography className={classes.textStyle} style={{color:'#0d0d0d'}}>????????? ????????? ?????? ?????? ???????????? ???????????? ?????? ?????? ????????? ?????? ??? ??????????????????. <span style={{color:'#FF0000'}}>*</span></Typography>
                <Typography className={clsx(classes.textStyle, classes.explanationText)} style={{color:'#0d0d0d'}}>?????? ????????? ????????? ?????? ????????? ???????????????</Typography>

                {/* ???????????? ????????????*/}
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
                            {/* ?????????o : 50%, ?????????x : 100%*/}
                            <Box style={{width:'50%'}}>
                                <FormControlLabel value="??????1"
                                                  control={
                                                      <Radio
                                                          icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color:'#979797'}}/>}
                                                          checkedIcon={<RadioButtonCheckedIcon className={classes.radioIcon} />}
                                                      />
                                                  }
                                                  label="??????1"
                                                  className={classes.formControlLabel}
                                />
                                {/* ?????????o ??? ?????? ?????? */}
                                <Box className={classes.imgBox} mt={1}>
                                    <img src={Sample1} alt="" style={{width:'100%'}}/>
                                </Box>
                            </Box>

                            {/* ?????????o : 50%, ?????????x : 100%*/}
                            <Box style={{width:'50%'}}>
                                <FormControlLabel value="??????2"
                                                  control={
                                                      <Radio
                                                          icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color:'#979797'}}/>}
                                                          checkedIcon={<RadioButtonCheckedIcon className={classes.radioIcon} />}
                                                      />
                                                  }
                                                  label="??????2"
                                                  className={classes.formControlLabel}
                                />
                                {/* ?????????o ??? ?????? ?????? */}
                                <Box className={classes.imgBox} mt={1}>
                                    <img src={Sample1} alt="" style={{width:'100%'}}/>
                                </Box>
                            </Box>

                            {/* ?????? */}
                            {/* ?????????o : 50%, ?????????x : 100%*/}
                            <Box display='flex' flexDirection='column' style={{width:'50%'}}>
                                <FormControlLabel value="??????"
                                                  control={
                                                      <Radio
                                                          icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color:'#979797'}}/>}
                                                          checkedIcon={<RadioButtonCheckedIcon className={classes.radioIcon}/>}
                                                      />
                                                  }
                                                  label="??????"
                                                  className={classes.formControlLabel}
                                />
                                <Input
                                    placeholder=""
                                    className={clsx(classes.textStyle, classes.inputBoxIn)}
                                    inputProps={{
                                        'aria-label': 'Description',
                                    }}
                                />
                                {/* ?????????o ??? ?????? ?????? */}
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