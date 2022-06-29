import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    Menu,
    MenuItem,
    Select,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tabs,
} from '@material-ui/core';
import {ReactComponent as FolderPlusIcon} from "../../common/images/FolderPlusFillIcon.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import {ReactComponent as FileIcon} from "../../common/images/FileIcon.svg";
import {ReactComponent as ClipboardTextIcon} from "../../common/images/ClipboardTextIcon.svg";
import {ReactComponent as CaretRightIcon} from "../../common/images/CaretRightIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import SurveyDialogComponent from "../dialog/SurveyDialogComponent";

const styles = _theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70,
        '& table button.MuiButton-root':{
            minWidth:'unset',
            padding:0,
        }
    },
    optionBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
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
    tabStyle:{
        display: 'inline-flex',
        position: 'relative',
        '&:after':{
            content:'""',
            width: '100%',
            height:3,
            backgroundColor:'#eee',
            display:'block',
            position:'absolute',
            bottom:0,
            left:0,
            zIndex:-1,
        },
        '& button':{
            minWidth: 100,
            fontSize:'0.938rem',
            '&.Mui-selected':{
                fontWeight:700,
                color:'#000'
            },
        },
        '& .MuiTabs-indicator':{
            height:3,
            backgroundColor:'#1664f5',
            margin:'0 15px',
            width:'70px!important',
        }
    },
    menuBox:{
        "& .MuiPopover-paper":{
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.08)',
            borderRadius:7,
            border:'1.5px solid #d4d4d6'
        }
    },
    btnStyle:{
        border: '1px solid #bfbfbf',
        borderRadius:4,
        marginLeft:10,
        color:'#000',
        padding:'3px 10px',
        fontWeight:400,
        fontSize:'0.875rem',
        '&:hover':{
            background: 'transparent',
        }
    },
    btnStyle1:{
        border: '1px solid #0097ff',
        borderRadius:7,
        marginLeft:10,
        color:'#0097ff',
        padding:'7px 23px',
        fontWeight:600,
        '&:hover':{
            background: 'transparent',
        }
    },
    fileInfo:{
        fontSize:'0.75rem',
        color:'#979797',
        marginTop:7,
    },
    tableBtnStyle:{
        '&:hover':{
            background: 'transparent',
        }
    },
    downloadBtn:{
        "& p":{
            marginTop:3,
            fontSize:'0.75rem',
            color:'#4d5a69',
        },
        "& svg":{
            marginRight:6
        }
    },
    menuItem:{
        fontSize:'0.875rem',
        fontFamily: 'NanumSquareRoundOTF' ,
        color:'#000',
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
    textField:{
        padding:'5px 3px',
        border:'1px solid #c4c4c4',
        borderRadius:3,
    },
});

let id = 0;
function createData(fileName, date, userName, size, state ) {
    id += 1;
    return { id, fileName, date, userName, size, state};
}
const rows = [
    createData('Working', '2021.12.01', '김온더', '10M', '시작하기'),
    createData('Working2', '2021.12.01', '김온더', '20M', '작성중'),
    createData('Working3', '2021.12.01', '김온더', '20M', '제출완료'),
];


class ReferenceRoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 0,
            anchorEl: null,
            filter: "전체",
            inputChange:true,
            surveyDialogOpen:false
        };
    }


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleTabChange = (event, tabs) => {
        this.setState({ tabs });
    };


    handleChangeSort = event => {
        this.setState({ filter: event.target.value });
    };

    handleClickInputChange= () => {
        this.setState({ inputChange: true });
    };

    handleChangeSurveyDialogOpen= () => {
        this.setState({ surveyDialogOpen: true });
    };

    handleCloseSurveyDialogOpen= () => {
        this.setState({ surveyDialogOpen: false });
    };


    render() {
        const { classes } = this.props;
        const { anchorEl, tabs} = this.state;

        return (
            <div className={classes.root}>
                <Tabs value={tabs} onChange={this.handleTabChange} className={classes.tabStyle}>
                    <Tab label="파일" disableRipple/>
                    <Tab label="설문조사" disableRipple/>
                </Tabs>

                {tabs === 0 &&
                <div>
                    <Box className={classes.optionBox}>
                        <IconButton disableRipple><FolderPlusIcon/></IconButton>
                        <Button className={classes.btnStyle} disableRipple>+ 파일올리기</Button>
                    </Box>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell><Button className={classes.tableBtnStyle} disableRipple>TOP</Button></TableCell>
                                <TableCell colspan="3"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row" align="center" width={20}>
                                        <Button disableRipple className={classes.tableBtnStyle}
                                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                                aria-haspopup="true"
                                                onClick={this.handleClick}
                                        >
                                            <MoreIcon width='28px' height="28px"/>
                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={this.handleClose}
                                            className={classes.menuBox}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>이름 바꾸기</MenuItem>
                                        </Menu>
                                    </TableCell>
                                    <TableCell align="center" width={20}><FileIcon/></TableCell>
                                    <TableCell>
                                        <div onClick={this.handleClickInputChange}>
                                            {this.state.inputChange === true ?
                                                <div>{row.fileName}</div> :
                                                <div>
                                                    <input type="text"
                                                           className={classes.textField}></input>
                                                </div>
                                            }
                                        </div>
                                        <div className={classes.fileInfo}>{row.date} | {row.size} | {row.userName}</div>
                                    </TableCell>
                                    <TableCell align="right"  >
                                        {/*<Button className={clsx(classes.tableBtnStyle, classes.downloadBtn)} disableRipple style={{fontSize:'0.75rem'}}><DownloadSimpleIcon/> <Typography>다운로드</Typography></Button>*/}
                                    </TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>

                </div>}
                {tabs === 1 &&
                <div>
                    <Box className={classes.optionBox}>
                        <IconButton disableRipple><FolderPlusIcon/></IconButton>
                        <Button className={classes.btnStyle} onClick={this.handleChangeSurveyDialogOpen} disableRipple>+ 설문조사 만들기</Button>
                    </Box>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell><Button className={classes.tableBtnStyle} disableRipple>TOP</Button></TableCell>
                                <TableCell colspan="2">Work <CaretRightIcon style={{marginBottom:'-2px'}}/> <b>기획팀</b> </TableCell>
                                <TableCell align="right" style={{paddingRight:0}}>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            value={this.state.filter}
                                            onChange={this.handleChangeSort}
                                            displayEmpty
                                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                                        >
                                            <MenuItem value="전체" className={classes.menuItem}>전체</MenuItem>
                                            <MenuItem value="시작하기" className={classes.menuItem}>시작하기</MenuItem>
                                            <MenuItem value="작성중" className={classes.menuItem}>작성중</MenuItem>
                                            <MenuItem value="제출완료" className={classes.menuItem}>제출완료</MenuItem>
                                        </Select>
                                    </FormControl>

                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row" align="center" width={20}>
                                        <Button disableRipple className={classes.tableBtnStyle}
                                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                                aria-haspopup="true"
                                                onClick={this.handleClick}
                                        >
                                            <MoreIcon/>
                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={this.handleClose}
                                            className={classes.menuBox }
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>공유 링크 복사</MenuItem>
                                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>포함 일정 바로보기</MenuItem>
                                        </Menu>
                                    </TableCell>
                                    <TableCell align="center" width={20}><ClipboardTextIcon/></TableCell>
                                    <TableCell>
                                        {row.fileName}
                                        <div className={classes.fileInfo}>{row.date} | {row.size} | {row.userName}</div>
                                    </TableCell>
                                    <TableCell align="right" style={{fontSize:'0.75rem'}}>
                                        {row.state === "시작하기" ?
                                            <span style={{color:'#dc524f'}}>시작하기</span>
                                        :
                                            (row.state === "작성중") ?
                                            <span style={{color:'#0097ff'}}>작성중</span>
                                                :
                                                (row.state === "제출완료") ?
                                                    <span style={{color:'#a0a7ab'}}>제출완료</span>
                                                    :
                                                    null
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>}

                <SurveyDialogComponent handleCloseSurveyDialogOpen={this.handleCloseSurveyDialogOpen} surveyDialogOpen={this.state.surveyDialogOpen}/>
            </div>
        );
    }
}

export default withStyles(styles)(ReferenceRoomComponent);