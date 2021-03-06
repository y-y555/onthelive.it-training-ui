import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {
    Box,
    Typography,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Input
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
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
                {/* ????????? ????????? ???????????? x */}
                <Typography className={classes.textStyle}>?????? ?????? ????????? ???????????????</Typography>
                <Typography className={clsx(classes.textStyle, classes.explanationText)}>?????? ????????? ????????? ?????? ????????? ???????????????</Typography>

                {/* ????????? ????????? ???????????? o (?????? ??????  -> * ) */}
                {/*<Typography className={classes.textStyle} style={{color:'#0d0d0d'}}>????????? ????????? ?????? ?????? ???????????? ???????????? ?????? ?????? ????????? ?????? ??? ??????????????????. <span style={{color:'#FF0000'}}>*</span></Typography>*/}
                {/*<Typography className={clsx(classes.textStyle, classes.explanationText)} style={{color:'#0d0d0d'}}>?????? ????????? ????????? ?????? ????????? ???????????????</Typography>*/}

                {/* ???????????? ????????????*/}
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
                            {/* ?????????o : 50%, ?????????x : 100%*/}
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
                                    label="??????1"
                                    className={classes.formControlLabel}
                                />
                                {/* ?????????o ??? ?????? ?????? */}
                                {/*<Box className={classes.imgBox} mt={1}>*/}
                                {/*    <img src={Sample1} alt="" style={{width:'100%'}}/>*/}
                                {/*</Box>*/}
                            </Box>
                            {/* ?????????o : 50%, ?????????x : 100%*/}
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
                                    label="??????2"
                                    className={classes.formControlLabel}
                                />
                                {/* ?????????o ??? ?????? ?????? */}
                                {/*<Box className={classes.imgBox} mt={1}>*/}
                                {/*    <img src={Sample1} alt="" style={{width:'100%'}}/>*/}
                                {/*</Box>*/}
                            </Box>

                            {/* ?????? */}
                            {/* ?????????o : 50%, ?????????x : 100%*/}
                            <Box display='flex' flexDirection='column' style={{width:'100%'}}>
                                <FormControlLabel value="??????"
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