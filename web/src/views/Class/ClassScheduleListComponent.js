import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Select,
    MenuItem,
    FormControl,
    Input,
    Avatar,
    Typography,
    IconButton,
    Tooltip,
    Tabs,
    Tab,
    Popover,
    FormControlLabel,
    Checkbox
} from "@material-ui/core";
import {ReactComponent as RowsListIcon} from "../../common/images/RowsListIcon.svg";
import {ReactComponent as SquaresFourIcon} from "../../common/images/SquaresFourIcon.svg";
import ScheduleCardListItemComponent from "./ScheduleCardListItemComponent";
import ScheduleCardBoardItemComponent from "./ScheduleCardBoardItemComponent";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as CaretRightIcon} from "../../common/images/CaretRightIcon.svg";
import clsx from "clsx";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as Funnel} from "../../common/images/Funnel.svg";


const styles = theme => ({
    root:{
        '& ul, ol':{
            margin:0,
            padding:0,
            listStyle:'none',
        },
        '& h5':{
            fontSize:'1.5rem',
            fontWeight:600,
            marginBottom:30,
        }
    },
    controlBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    buttonBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: '0 0 auto',
        '& .MuiTabs-indicator':{
            display:'none',
            width:0,
        },
        '& button':{
            opacity: 0.5,
            minHeight:'auto',
            minWidth:'auto',
            '& .MuiTab-wrapper':{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
            },
            '& .MuiTab-wrapper > *:first-child':{
                marginBottom:0,
            }
        },
        '& button:hover':{
            backgroundColor:'#fff',
        },
        '& .Mui-selected':{
            fontWeight:700,
        }
    },
    btnActiveStyle:{
        opacity:'1!important',
        fontWeight:700,
    },
    formControl:{
        '&>div':{
            fontSize:'0.75rem',
            fontWeight:600,
            '&:before, &:after':{
                content:'',
                display:'none',
                width:0,
                size:0,
            },
        },
        "& .MuiSelect-select:focus":{
            background:'transparent'
        },
        "& .MuiSelect-select.MuiSelect-select":{
            paddingRight:0
        }
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.875rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
    },
    trigger:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: '30px 0 50px',
        '& .MuiTabs-flexContainer':{
            borderBottom: '3px solid #eeeeee',
            width: 400
        },
        '& button':{
            minWidth:90,
            minHeight:40,
            position:'relative',
            opacity:1,
            fontSize:'0.938rem',
            '&:hover':{
                fontWeight: 600,
            }
        },
        '& button.Mui-selected':{
            minWidth:90,
            minHeight:40,
            backgroundColor:'#fff',
            color:'#000',
            fontWeight:600,
            borderRadius:50,
            overflow:'inherit',
            boxSizing:'border-box'
        },
    },
    checkBoxStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color: '#656565',
        fontSize:'0.875rem',
        cursor:'pointer',
        '& svg':{
            width:20,
            height:20,
            marginRight:4,
            color:'#656565',
        }
    },
    checkBoxStyleOn:{
        color:'#0097FF',
    },
    filterBox:{
        padding:'13px 20px',
        width:200,
        '& .MuiTypography-subtitle2':{
            color:'rgba(0, 0, 0, 0.6)',
            fontSize:'0.75rem',
            // marginBottom:14,
        },
        '& ul':{
            listStyle: 'none',
            padding:0,
            margin:0,
        },
        '& li':{
            fontSize:'0.875rem',
            color:'#303030',
            fontWeight:400,
            '& .MuiTypography-body1':{
                fontFamily:'NanumSquareRoundOTF',
            },
            '& .MuiCheckbox-colorSecondary.Mui-checked':{
                color:'#1a457e'
            },
            '& svg':{
                // color:'#868686',
                width:20,
                height:20,
            }
        },
        '& .MuiIconButton-colorSecondary:hover':{
            background:'transparent'
        }
    },
    iconButton:{
      '&:hover':{
          background:'transparent',
      }
    },
    buttonStyle:{
        fontSize:'0.938rem',
        color:'#fff',
        fontWeight:600,
        borderRadius: 7,
        backgroundColor:'#1a457e',
        padding:'9px 13px',
        width:'100%',
        marginTop:30,
        '&:hover':{
            backgroundColor:'#1a457e',
        }
    }
});

const StyledTabs = withStyles(theme => ({
    root: {

    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: 3,
        '& > span': {
            width: '70%',
            background:'#1664f5'
        },
    },
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);



class ClassScheduleListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            situation: "전체",
            filter:"최근 등록순",
            value:0,
            classTab: 0,
            checkBox:true,
            anchorEl: null,
            layoutA: false,
            layoutB: false,
            video: false,
            live: false,
            training: false,
            evaluation: false,
            assignment: false,
        };
    }


    handleLayoutChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    handleChangeList = event => {
        this.setState({ situation: event.target.value });
    };

    handleChangeFilter = event => {
        this.setState({ filter: event.target.value });
    };

    handleListTabChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeTabs = (event, classTab) => {
        this.setState({ classTab });
    };

    filterClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    filterClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
        const { classes } = this.props;
        const { classTab, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>

                <StyledTabs value={classTab} onChange={this.handleChangeTabs} className={classes.trigger}>
                    <Tab
                        label='전체 (15)'
                        disableRipple
                    />
                    <Tab
                        label='진행중 (10)'
                        disableRipple
                    />
                    <Tab
                        label='예정 (2)'
                        disableRipple
                    />
                    <Tab
                        label='종료 (3)'
                        disableRipple
                    />
                </StyledTabs>

                {/*<Box className={classes.controlBox}>*/}
                {/*    <FormControl className={classes.formControl}>*/}
                {/*        <Select*/}
                {/*            value={this.state.situation}*/}
                {/*            onChange={this.handleChangeList}*/}
                {/*            displayEmpty*/}
                {/*            name="상황"*/}
                {/*            className={classes.select}*/}
                {/*            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}*/}
                {/*        >*/}
                {/*            <MenuItem value="전체" className={classes.menuItem}>전체</MenuItem>*/}
                {/*            <MenuItem value="종료" className={classes.menuItem}>종료</MenuItem>*/}
                {/*            <MenuItem value="예정" className={classes.menuItem}>예정</MenuItem>*/}
                {/*        </Select>*/}
                {/*    </FormControl>*/}
                {/*</Box>*/}

                <Box display='flex' alignItems='center' justifyContent='flex-end'>
                <Box onClick={this.handleChangeCheckBox}
                     className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                    {this.state.checkBox ?
                        <CheckCircleAgreeOffIcon/> :
                        <CheckCircleAgreeOnIcon/>
                    }
                    비공개 강의만
                </Box>

                <Box style={{marginLeft:20}}>
                    <IconButton
                        aria-owns={open ? 'simple-popper' : undefined}
                        aria-haspopup="true"
                        variant="contained"
                        onClick={this.filterClick}
                        disableRipple
                        className={classes.iconButton}
                    >
                        <Funnel/>
                    </IconButton>
                    <Popover
                        id="simple-popper"
                        open={open}
                        anchorEl={anchorEl}
                        onClose={this.filterClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <Box className={classes.filterBox}>
                            <Typography variant={'subtitle2'}>레이아웃</Typography>
                            <ul>
                                <li>
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.layoutA}
                                            onChange={this.handleLayoutChange('layoutA')}
                                            value="layoutA"
                                            disableRipple
                                        />
                                    }
                                    label="1단 세로형"
                                /></li>
                                <li>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.layoutB}
                                                onChange={this.handleLayoutChange('layoutB')}
                                                value="layoutB"
                                                disableRipple
                                            />
                                        }
                                        label="2단 세로형"
                                    /></li>
                            </ul>
                        </Box>
                        <hr style={{opacity:0.5, margin:'0 8px 10px 8px'}}/>
                        <Box className={classes.filterBox}>
                            <Typography variant={'subtitle2'}>콘텐츠 유형</Typography>
                            <ul>
                                <li>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.video}
                                                onChange={this.handleLayoutChange('video')}
                                                value="video"
                                                disableRipple
                                            />
                                        }
                                        label="동영상"
                                    /></li>
                                <li>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.live}
                                                onChange={this.handleLayoutChange('live')}
                                                value="live"
                                                disableRipple
                                            />
                                        }
                                        label="라이브"
                                    /></li>
                                <li>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.training}
                                                onChange={this.handleLayoutChange('training')}
                                                value="training"
                                                disableRipple
                                            />
                                        }
                                        label="실습"
                                    /></li>
                                <li>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.evaluation}
                                                onChange={this.handleLayoutChange('evaluation')}
                                                value="evaluation"
                                                disableRipple
                                            />
                                        }
                                        label="평가"
                                    /></li>
                                <li>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.assignment}
                                                onChange={this.handleLayoutChange('assignment')}
                                                value="assignment"
                                                disableRipple
                                            />
                                        }
                                        label="과제"
                                    /></li>
                            </ul>
                        <Button className={classes.buttonStyle} disableRipple onClick={this.filterClose}>적용하기</Button>
                        </Box>
                    </Popover>
                </Box>
                </Box>

                <ScheduleCardListItemComponent/>

            </div>
        );
    }
}

export default withStyles(styles)(ClassScheduleListComponent);