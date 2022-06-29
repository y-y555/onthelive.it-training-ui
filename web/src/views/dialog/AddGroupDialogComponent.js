import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Dialog, FormControl, IconButton, OutlinedInput, TextField, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import clsx from "clsx";
import Autocomplete from "@material-ui/lab/Autocomplete";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:500,
            padding:24,
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleBox:{
        marginBottom:30,
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600
    },
    boxStyle:{
        padding:'30px 0 0'
    },
    nameText:{
        fontSize:'1.5rem',
        color:'#0d0d0d',
        fontWeight:600,
        marginTop:15
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    buttonStyle:{
        marginTop:26,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        padding:'12px 0',
        borderRadius:7,
        "&:hover":{
            background:'#0097ff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
    input: {
        display: 'none',
    },
    textField:{
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #d9dbde'
        },
        "& .MuiOutlinedInput-root":{
            borderRadius:7,
            "&:hover":{
                borderColor:'#d9dbde'
            }
        },
        "& .MuiOutlinedInput-input":{
            padding:'12px 10px',
            color:'#333',
            fontSize:'1rem',
            "&::placeholder":{
                color:'#a3a8af',
                opacity:1,
                fontWeight: 300,
            },
        },
    },
    textFieldMargin:{
        margin:'0 10px'
    },
    textareaStyle: {
        width:'100%',
        height:140,
        margin:'20px 0',
        border:'1px solid #d9dbde',
        borderRadius:7,
        padding: '10px 10px',
        overflowY: 'auto',
        resize: 'none',
        boxSizing:'border-box',
        fontSize:'1rem',
        '& li':{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            '& svg':{
                width:16,
                height: 16,
                '& path':{
                    stroke:'#bbb'
                }
            }
        }
    },
    boxMargin:{
        marginBottom:30,
        "& .MuiFormControlLabel-root":{
            marginLeft: 0,
            marginRight:0
        }
    },
    marginBottom:{
        marginBottom: 15
    },
    textStyle:{
        fontWeight:600,
        fontSize:'1.125rem',
        color:'#333',
    },
    textStyleRequired:{
        '&:after':{
            content:'"*"',
            color:'#ff0000',
        }
    },
    textBold:{
        fontWeight:600,
        textDecoration:'underline'
    },
    autoCompleteBox:{
        marginBottom:10,
        "& .MuiInputBase-root":{
            padding:'2.5px 6px',
            backgroundColor:'#f2f3f7',
            color:'#b6b6b6',
        },
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #f2f3f7'
        },
        "& .MuiAutocomplete-input":{
            color:'#333',
            fontSize:'1rem',
            "&::placeholder":{
                color:'#a3a8af',
                opacity:1,
                fontWeight: 300,
            },
        },
        "& .MuiAutocomplete-popupIndicator":{
            display:'none'
        }
    },
    searchBtn:{
        padding:'6px 10px',
        borderRadius:4,
        fontSize:'0.875rem',
        "&:hover":{
            backgroundColor:'transparent',
        },
    },
});

class AddGroupDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberGroupSearch:false,
        };
    }

    handleChangeMemberGroupSearch = () => {
        this.setState({ memberGroupSearch: true });
    };

    handleClose = () => {
        this.setState({ memberGroupSearch:false});
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.AddGroupDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>그룹 추가</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <Box display='flex' flexDirection='column' className={classes.boxMargin}>
                        <Typography className={clsx(classes.textStyle, classes.marginBottom,classes.textStyleRequired)}>그룹 명</Typography>
                        <FormControl className={classes.textField} variant="outlined">
                            <OutlinedInput
                                inputProps={{'aria-label': 'title input box'}}
                                id="outlined-title"
                                labelWidth={0}
                                placeholder='일정 제목 (최대 50자 이내)'
                            />
                        </FormControl>
                    </Box>
                    <Box className={classes.boxMargin}>
                        <Typography className={clsx(classes.textStyle,classes.textStyleRequired)}>그룹 멤버</Typography>
                        <Box className={classes.textField}>
                            <ul className={classes.textareaStyle}>
                               <li>
                                  <Typography>김온더</Typography>
                                   <IconButton className={classes.iconButton} disableRipple>
                                       <DialogCloseIcon/>
                                   </IconButton>
                               </li>
                                <li>
                                    <Typography>영희</Typography>
                                    <IconButton className={classes.iconButton} disableRipple>
                                        <DialogCloseIcon/>
                                    </IconButton>
                                </li>
                            </ul>
                        </Box>

                        <Autocomplete
                            freeSolo
                            id="multiple-limit-tags"
                            options={memberList}
                            classes={{
                                option: classes.option,
                            }}
                            getOptionLabel={(option) => {
                                if(option.type === 'member') return `${option.title}`;
                            }}
                            filterSelectedOptions
                            size='small'
                            renderInput={(params) => (
                                <TextField
                                    disabled
                                    inputProps={{'aria-label': 'search name input box'}}
                                    className={classes.textField}
                                    {...params}
                                    variant="outlined"
                                    label=""
                                    placeholder="이름을 입력 또는 선택해주세요."
                                />
                            )}
                            className={classes.autoCompleteBox}
                        />
                        <Button className={classes.searchBtn} variant="outlined" onClick={this.props.handleChangeMemberGroupSearch} disableRipple>멤버 목록에서 검색</Button>
                    </Box>
                    <Button className={classes.buttonStyle} disableRipple>
                        추가
                    </Button>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(AddGroupDialogComponent);
const memberList = [
    { title: '김영희', type: 'member'},
    { title: '김철수', type: 'member' },
    { title: '아이유', type: 'member'},
    { title: '홍길동', type: 'member'},
    { title: '유관순', type: 'member'},
    { title: '세종대왕', type: 'member'},
];