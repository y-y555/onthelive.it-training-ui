import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Chip,
    FormControl,
    Menu,
    MenuItem,
    Select,
    Tab,
    TablePagination,
    Tabs,
    Typography
} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";

const styles = theme => ({
    root:{
        padding:'40px 30px',
        margin:'0 auto',
        '& .MuiButton-root':{
            padding:0,
            minWidth:'auto',
        }
    },
    flexCenter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
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
    formControl:{
        display:'flex',
        alignItems:'flex-end',
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
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        }
    },
    listStyle:{
        position:'relative',
        boxShadow:'none',
        margin:'0!important',
        '&:last-child':{
            marginBottom: 0,
        },
        '& h5': {
            borderBottom: '1px solid #d3d7db',
            fontSize:'0.875rem',
            fontWeight:700,
            paddingBottom:8,
        },
        '& .MuiAccordionDetails-root':{
            position:'relative',
            backgroundColor:'#f8f8f8',
            padding:'42px 50px 38px 23px',
            // borderBottom:'1px solid #e1e1e1',
            '& p':{
                fontSize:'0.875rem',
            }
        },
        '& .MuiAccordionSummary-content':{
            justifyContent:'space-between',
        },
        '& .MuiAccordionSummary-content.Mui-expanded, & .MuiAccordion-root.Mui-expanded':{
            margin:0,
        },
        '&:before':{
            opacity:'1!important',
        }
    },
    detailStyle:{
        flexDirection:'column',
        padding:'14px 50px 38px 23px!important',
    },
    detailTitle:{
        marginBottom:34,
        display:'flex',
        alignItems:'center',
        '& .MuiTypography-root':{
            fontSize:'0.75rem',
            color:'#666',
            marginLeft:8,
        }
    },
    listItemStyle:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottom: '1px solid #d3d7db',
        padding:'17px 0 17px 23px',
        cursor:'pointer',
        '&:first-child':{
            borderTop: '1px solid #d3d7db',
        }
    },
    avatar:{
        marginRight: 10,
        backgroundColor:'#a3a8af',
        '& svg path':{
            fill:'#fff'
        }
    },
    name:{
        fontSize:'0.875rem',
        fontWeight:600,
        display:'flex',
        alignItems: 'center',
    },
    groupInfo:{
        fontSize:'0.75rem',
        color:'#666666',
        marginTop:7,
    },
    tableBtnStyle:{
        marginLeft:24,
        '&:hover':{
            background: 'transparent',
        }
    },
    tagBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:7,
    },
    tag:{
        fontSize:'0.76rem',
        color:'#fff',
        fontWeight: 600,
        borderRadius:3,
        padding:'3px 6px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:6,
    },
    freeTxt:{
        fontSize:'0.875rem',
        color:'#1664f5',
        marginRight:12,
    },
    levelTxt:{
        display:'flex',
        alignItems:'center',
        fontSize:'0.875rem',
        fontWeight:600,
    },
    selectBadge:{
        fontSize:'0.75rem',
        marginLeft: 14,
        display:'flex',
        alignItems: 'center',
    },
    captionText:{
        fontSize:'0.75rem',
        fontWeight:600,
        paddingTop: 2,
        color:'#fff',
        width:30,
        height:16,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 14,
    },
    captionLive:{
        backgroundColor:'#FB4A59',
        '& svg':{
            width: 5,
            height: 5
        }
    },
    captionVod:{
        backgroundColor:'#000',
        '& svg':{
            width: 9,
            height: 9
        }
    },
    captionGreen:{
        backgroundColor:'#00c880',
    },
    captionPrivate:{
        width: 60,
        backgroundColor:'transparent',
    },
    captionTextPrivate:{
        fontSize:'0.875rem',
        fontWeight:600,
        paddingTop: 2,
        color:'#0d0d0d'
    },
    captionEnd:{
        backgroundColor:'#1a5177'
    },
    btnStyle:{
        border:'1px solid #bfbfbf',
        padding:'2px 8px',
        marginLeft:20,
    },
    buttonStyle:{
        border:'1px solid #bfbfbf',
        padding:'4px 10px!important',
        fontSize:'1rem',
    },
    downloadBox:{
        border:'1px solid #bfbfbf',
        minWidth:33,
        height:28,
        padding:0,
        display:'flex',
        alignItems:'center',
        marginLeft:20,
        '& svg':{
            width:18,
            height:18,
            '& path':{
                stroke:'#000',
            }
        },
        '&:hover':{
            background:'transparent'
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
            zIndex:1,
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
            width:'90px!important',
            zIndex: 2,
        }
    },
    btnGroup:{
        position:'absolute',
        right:18,
        top:10,
        color:'#666',
        '& button':{
            fontSize:'0.75rem',
            color:'#666',
            '&:hover':{
                background:'transparent'
            }
        }
    },
    chipBox:{
        marginTop: 28,
        marginBottom:40,
        '& div':{
            marginRight:12,
            fontSize:'0.938rem'
        }
    },
    chipGreen:{
        backgroundColor:'#dcf8ed',
        color:'#00824f'
    },
    chipYellow:{
        backgroundColor:'#fef5e4',
        color:'#c38700'
    },
    chipRed:{
        backgroundColor:'#ffe8e9',
        color:'#dc3a42'
    },
});

class CourseInquiryHistoryManagementComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "최근가입일순",
            filterAnswer:"최근등록일순",
            checkBox:true,
            anchorEl: null,
            answerTableTd:[
                {
                    userName:'기업 서비스 가입 및 이용 절차가 궁금합니다.',
                    className:'강의실명',
                    writer:'(수강생) 아이유',
                    date:'2021.12.01.',
                    detail:'유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는',
                    answer:'답변완료',
                },
                {
                    userName:'무료 이용(체험)은 무엇인가요?',
                    className:'강의실명',
                    writer:'(수강생) 아이유',
                    date:'2021.12.02.',
                    detail:'유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는',
                    answer:'답변작성',
                },
                {
                    userName:'엔터프라이즈 비용은 얼마인가요?',
                    className:'강의실명',
                    writer:'(예비 수강생) 아이유',
                    date:'2021.12.03.',
                    detail:'유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는',
                    answer:'답변완료',
                },
                {
                    userName:'정기결제는 어떻게 하나요?',
                    className:'강의실명',
                    writer:'(수강생) 아이유',
                    date:'2021.12.04.',
                    detail:'유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는',
                    answer:'답변완료',
                },

            ],

            tableTd:[
                {
                    userName:'기업 서비스 가입 및 이용 절차가 궁금합니다.',
                    className:'강의실명',
                    date:'2021.12.01.',
                    detail:'유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는',
                },
                {
                    userName:'무료 이용(체험)은 무엇인가요?',
                    className:'강의실명',
                    date:'2021.12.02.',
                    detail:'유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는',
                },
                {
                    userName:'엔터프라이즈 비용은 얼마인가요?',
                    className:'강의실명',
                    date:'2021.12.03.',
                    detail:'유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는',
                },
                {
                    userName:'정기결제는 어떻게 하나요?',
                    className:'강의실명',
                    date:'2021.12.04.',
                    detail:'유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야하므로 사용 인원에 맞는 플랜을 선택하세요. 엔터프라이즈는',
                },

            ],
            page: 0,
            rowsPerPage: 5,
            classTabs:0,
        };
    }
    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    clickMore = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    clickMoreClose = () => {
        this.setState({ anchorEl: null });
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    handleChangeTabs = (event, classTabs) => {
        this.setState({ classTabs });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl,  classTabs} = this.state;

        return (
            <div className={classes.root}>

                    <Tabs value={classTabs} onChange={this.handleChangeTabs} className={classes.tabStyle}>
                        <Tab label="자주 묻는 질문" disableRipple />
                        <Tab label="문의/답변 내역" disableRipple />
                    </Tabs>


                {classTabs === 0 &&
                <Box style={{marginTop:40}}>

                    <Box display='flex' alignItems='center' justifyContent='flex-end' style={{borderBottom:'1px solid #e1e1e1'}}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={this.state.filter}
                                onChange={this.handleChangeSort}
                                displayEmpty
                                IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem value="최근가입일순" className={classes.menuItem}>최근 가입일 순</MenuItem>
                                <MenuItem value="최근제출일순" className={classes.menuItem}>최근 제출일 순</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box style={{borderBottom:'1px solid #e1e1e1'}}>
                        {this.state.tableTd.map((td, i) => (
                        <Accordion className={classes.listStyle}>
                            <AccordionSummary
                                // expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className={classes.flexCenter}
                            >
                                <Box display='flex' flexDirection='column'>
                                        <Typography className={classes.name}>Q. {td.userName} </Typography>
                                        <span className={classes.groupInfo}>{td.className}  |  {td.date} 등록</span>
                                    </Box>
                                <Box display='flex'>
                                    <Button disableRipple className={classes.tableBtnStyle}
                                            aria-owns={anchorEl ? 'simple-menu' : undefined}
                                            aria-haspopup="true"
                                            onClick={this.clickMore}
                                            disableTouchRipple
                                            disableFocusRipple
                                    >
                                        <MoreIcon/>
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={this.clickMoreClose}
                                        className={classes.menuBox}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                    >
                                        <MenuItem onClick={this.clickMoreClose} className={classes.menuItem}>강의실 바로가기</MenuItem>
                                    </Menu>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box className={classes.btnGroup}>
                                    <Button disableRipple>수정</Button> | <Button disableRipple>삭제</Button>
                                </Box>
                                <Typography>
                                    {td.detail}
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                            ))}
                    </Box>


                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={this.state.tableTd.length}
                            rowsPerPage={this.state.rowsPerPage}
                            page={this.state.page}
                            backIconButtonProps={{
                                'aria-label': '페이지당 행 수',
                            }}
                            nextIconButtonProps={{
                                'aria-label': '다음 페이지',
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />


                </Box>}
                {classTabs === 1 &&
                <Box>
                    <Box className={classes.chipBox}>
                        <Chip label="수강생" className={classes.chipGreen}/>
                        <Chip label="예비 수강생" className={classes.chipYellow}/>
                        <Chip label="강사" className={classes.chipRed}/>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='flex-end' style={{borderBottom:'1px solid #e1e1e1'}}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={this.state.filterAnswer}
                                onChange={this.handleChangeSortAnswer}
                                displayEmpty
                                IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem value="최근등록일순" className={classes.menuItem}>최근 등록일 순</MenuItem>
                                <MenuItem value="최근제출일순" className={classes.menuItem}>최근 제출일 순</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box style={{borderBottom:'1px solid #e1e1e1'}}>
                        {this.state.answerTableTd.map((td, i) => (
                            <Accordion className={classes.listStyle}>
                                <AccordionSummary
                                    // expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={classes.flexCenter}
                                >
                                    <Box display='flex' flexDirection='column'>
                                        <Typography className={classes.name}>{td.userName} </Typography>
                                        <span className={classes.groupInfo}>{td.className}  |  작성자 :{td.writer}  |  {td.date} 등록</span>
                                    </Box>
                                    <Box display='flex' alignItems='center'>
                                        {td.answer ==='답변완료' ?
                                            <Typography style={{fontSize:'1.5rem'}}>답변완료</Typography>
                                            :
                                            (td.answer ==='답변작성' ?
                                            <Button disableRipple className={classes.buttonStyle}>답변 작성</Button>
                                                    :null
                                            )
                                        }
                                        <Button disableRipple className={classes.tableBtnStyle}
                                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                                aria-haspopup="true"
                                                onClick={this.clickMore}
                                                disableTouchRipple
                                                disableFocusRipple
                                        >
                                            <MoreIcon/>
                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={this.clickMoreClose}
                                            className={classes.menuBox }
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                        >
                                            <MenuItem onClick={this.clickMoreClose} className={classes.menuItem}>강의실 바로가기</MenuItem>
                                        </Menu>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails className={classes.detailStyle}>
                                    <Box className={classes.btnGroup}>
                                        <Button disableRipple>수정</Button> | <Button disableRipple>삭제</Button>
                                    </Box>
                                    <Box className={classes.detailTitle}>
                                        <Chip label="강사" className={classes.chipRed}/> <Typography>2022.06.23.</Typography>
                                    </Box>
                                    <Typography>
                                        {td.detail}
                                    </Typography>
                                </AccordionDetails>

                            </Accordion>
                        ))}
                    </Box>


                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={this.state.tableTd.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        backIconButtonProps={{
                            'aria-label': '페이지당 행 수',
                        }}
                        nextIconButtonProps={{
                            'aria-label': '다음 페이지',
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />


                </Box>

                }



            </div>
        );
    }
}

export default withStyles(styles)(CourseInquiryHistoryManagementComponent);

