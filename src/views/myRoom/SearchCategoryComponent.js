import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box, Button, Checkbox,
    Chip,
    FormControl,
    FormControlLabel,
    IconButton,
    MenuItem,
    Popover,
    Select,
    Typography,
    Input,
    ListItemText, InputBase, Icon
} from "@material-ui/core";
import {ReactComponent as ListIcon} from "../../common/images/ListIcon.svg";
import clsx from "clsx";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownTinyIcon.svg";
import {ReactComponent as Funnel} from "../../common/images/Funnel.svg";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {ButtonBack, ButtonNext, CarouselProvider, Dot, DotGroup, Slide, Slider} from "pure-react-carousel";
import {ReactComponent as ArrowLeftIcon} from "../../common/images/ArrowIcon.svg";
import {ReactComponent as ArrowRightIcon} from "../../common/images/CaretRightIcon.svg";
import {ReactComponent as Close} from "../../common/images/Close.svg";
import {ReactComponent as ArrowCounterClockwise} from "../../common/images/ArrowCounterClockwise.svg";
const styles = theme => ({
    root:{
        padding:'50px 0 50px 33px',
        border:'0 solid #c0c2c3',
        borderWidth: '1px 0 ',
        '& > div':{
            '@media all and (min-width: 1500px)': {
                width:1440,
            },
            width:1200,
            margin:'0 auto',
            boxSizing:'border-box',
            '&>h3':{
                fontSize:'1.125rem',
                marginBottom:40,
                fontWeight: 600,
                display:'flex',
                alignItems:'center',
                '& svg':{
                    marginRight:6,
                }
            }
        },
    },
    titleStyle:{
        fontSize:'1.125rem',
        fontWeight: 600,
        display:'flex',
        alignItems:'center',
        margin:'0 6px'
    },
    titleStyleDefault:{
        opacity:0.4,
    },
    chipBox:{
        // margin:'30px 0 14px',
        // display:'flex',
        position:'relative',
        '& .MuiChip-root':{
            height:25,
            // backgroundColor:'#eee',
            marginRight: 10,
            color:'#000',
            fontSize: '0.938rem',
            cursor:'pointer',
            '&:hover':{
                backgroundColor:'#1664f5!important',
                color:'#fff!important',
                fontWeight:600,
            },
            "&:focus":{
                backgroundColor:'#eee',
                color:'#656565',
            }
        },
        "& .MuiChip-label":{
            paddingLeft:10,
            paddingRight:10
        }
    },
    btnGroup:{
        '& > button':{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
            top:'50%',
            transform: 'translate(0px, -50%)',
            backgroundColor:'#fff',
            border:'0 none',
            width:40,
            height:40,
            borderRadius: 40,
            boxShadow: '0 1px 7px 0 rgb(0 0 0 / 20%)',
            '&:hover svg':{
                opacity:'0.3'
            }
        }
    },
    btnLeftStyle:{
        left:-16,
    },
    btnRightStyle:{
        right:-16,
    },
    formControl:{
        border:'1px solid #bfbfbf',
        borderRadius: 4,
        width:190,
        color:'#a3a8af',
        '& .MuiOutlinedInput-root, .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor:'#bfbfbf',
            borderWidth:1
        },
        '& .MuiOutlinedInput-input':{
            padding:'4px 10px',
        },
        '&>div':{
            fontSize:'0.813rem',
            fontWeight:400,
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
            paddingRight:10,
            paddingLeft:10,
        },
    },
    arrowStyle:{
        width:16,
        height:16,
        marginLeft:5,
        marginRight:5,
        display:'flex',
        alignItems:'center',
        '& svg path':{
            stroke:'#666',
        }
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.875rem',
        color:'#0d0d0d',
        '& .MuiButtonBase-root':{
            padding:0,
            marginRight:4,
        },
        '& .MuiCheckbox-colorSecondary.Mui-checked':{
            color: '#1a457e'
        },
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
    placeholder:{
        fontSize:'0.813rem',
        color:'#a3a8af',
    },
    iconButton:{
        '&:hover':{
            background:'transparent',
        }
    },
    iconBtn:{
      padding:0,
    },
    buttonStyle:{
        fontSize:'0.938rem',
        color:'#fff',
        fontWeight:600,
        borderRadius: 7,
        backgroundColor:'#1a457e',
        padding:'9px 13px',
        margin:'10px 20px',
        width:'calc(100% - 40px)',
        '&:hover':{
            backgroundColor:'#1a457e',
        }
    },
    buttonStyle2:{
        display:'flex',
        width:200,
        fontSize:'0.938rem',
        color:'#fff',
        fontWeight:600,
        borderRadius: 7,
        backgroundColor:'#1a457e',
        padding:'9px 13px',
        margin:'10px 0 10px auto',
        '&:hover':{
            backgroundColor:'#1a457e',
        }
    },
    search: {
        width:360,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background: '#fff',
        border:'1px solid #bfbfbf',
        paddingLeft:12,
        borderRadius:4,
        "& .MuiInputBase-input::placeholder":{
            opacity:1,
            fontSize:'0.813rem',
            color:'#a3a8af'
        },
        '& .MuiInputBase-root':{
            width:'100%',
        },
        "& .MuiInputBase-input":{
            fontSize:'0.813rem',
            // padding:'6px 7px 4px'
        },
        '& .MuiIconButton-root':{
            padding:8,
            '& svg':{
                width:16,
                height:16,
                '& path':{
                    stroke:'#a3a8af',
                }
            }
        },
    },
    formControlPopover:{
        '&>div':{
            fontSize:'0.875rem',
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
    menuItemPopover:{
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
    popover:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        padding:30,
        boxSizing: 'border-box',
        position:'relative',
    },
    popoverClose:{
        position:'absolute',
        right:30,
        top:30,
        padding:0,
        '& svg':{
            width:32,
            height:32,
        },
        '&:hover':{
            background:'transparent',
        },
    },
    popovertitle:{
        marginBottom:20,
          '& h5':{
              fontSize:'1.125rem',
              fontWeight:600,
              marginBottom: 10,
          },
        '& p':{
         fontSize:'0.938rem',
            color:'#656565'
        }

    },
    refreshIcon:{
        color:'#1664f5',
        marginRight:26,
        padding:0,
        '&:hover':{
            background:'transparent',
        },
        '& svg' :{
            marginRight:4,
            '& path':{
            fill:'#1664f5'
            },
        }
    },
    chipBoxCont:{
        margin:'30px 0 14px',
        '& > div':{
            height:25,
            backgroundColor:'#eee',
            color:'#656565',
            margin:'0 6px 10px 0',
            fontSize: '0.938rem',
            border:'1px solid #eee',
            cursor:'pointer',
            '&:hover':{
                border:'1px solid #dbf0ff',
                backgroundColor:'#dbf0ff!important',
                color:'#0097ff!important',
                fontWeight:600,
            },
            "&:focus":{
                border:'1px solid #eee',
                backgroundColor:'#eee',
                color:'#656565',
            }
        },
        "& .MuiChip-label":{
            paddingLeft:10,
            paddingRight:10
        }
    },
    chipActive:{
        backgroundColor:'#dbf0ff!important',
        color:'#0097ff!important',
        fontWeight:600,
    },
});

const levelList = [
    "초급" ,"중급", "고급",
];

const freeStatus = [
    "전체" ,"무료강의",
];

class SearchCategoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "난이도",
            tagListItem: [
                {tag:"수업"},
                {tag:"스터디"},
                {tag:"노트필기"},
                {tag:"기술문서"},
                {tag:"아카데미"},
            ],
            levelList: [
            ],
            freeStatus:[
            ],
            searchOpen: null,
            filter: "가나다순",
        };
    }

    handleChangeLevel = event => {
        this.setState({ level: event.target.value });
    };

    filterClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleLayoutChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    filterClose = () => {
        this.setState({
            anchorEl: null,
        });
    };


    handleChange = event => {
        this.setState({ levelList: event.target.value });
    };

    handleChangeFreeStatus = event => {
        this.setState({ freeStatus: event.target.value });
    };



    handleChangeMultiple = event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({
            levelList: value,
        });
    };

    handleChangeMultipleFree = event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({
            freeStatus: value,
        });
    };


    searchOpen = event => {
        this.setState({
            searchOpen: event.currentTarget,
        });
    };

    searchOpenClose = () => {
        this.setState({
            searchOpen: null,
        });
    };

    handleChangeFilter = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { classes, tagList } = this.props;
        const {anchorEl, searchOpen} = this.state;
        const open = Boolean(anchorEl, searchOpen);
        // const open = Boolean(searchOpen);

        return (
            <div className={classes.root}>
                <Box>
                <Box display='flex' alignItems='center' mb={5}>
                        <IconButton
                            // aria-owns={open ? 'simple-popper' : undefined}
                            aria-haspopup="true"
                            onClick={this.searchOpen}
                            disableRipple
                            className={clsx(classes.iconButton, classes.iconBtn)}
                        ><ListIcon/>
                        </IconButton>
                    <Typography variant="h3">
                    <span className={this.state.searchOpen === null ? classes.titleStyle : clsx(classes.titleStyle, classes.titleStyleDefault)}>
                        {this.props.title}</span>
                    </Typography>
                    {/*<Typography>| 파이썬문법 <span style={{fontSize:'0.75rem'}}>(15)</span></Typography>*/}
                </Box>
                    <Popover
                        id="simple-popper"
                        open={searchOpen}
                        anchorEl={searchOpen}
                        onClose={this.searchOpenClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        style={{

                        }}
                    >
                        <Box className={classes.popover}>
                            <IconButton className={classes.popoverClose} onClick={this.searchOpenClose} disableRipple><Close/></IconButton>
                            <Box className={classes.popovertitle}>
                                <Typography variant={'h5'} >모든 강의</Typography>
                                <Typography variant={'body1'}>개설된 모든 강의의 주제입니다.  주제 태그를 선택하거나 검색하여 원하는 강의를 찾을 수 있습니다.</Typography>
                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                <Box className={classes.search}>
                                    <InputBase
                                        placeholder='태그 검색'
                                        className={classes.inputRoot}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                    <IconButton className={classes.searchIcon} disableRipple>
                                        <SearchIcon />
                                    </IconButton>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Button className={classes.refreshIcon} disableRipple><ArrowCounterClockwise/> 초기화</Button>
                                    <FormControl className={classes.formControlPopover}>
                                        <Select
                                            value={this.state.filter}
                                            onChange={this.handleChangeFilter}
                                            displayEmpty
                                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                                        >
                                            <MenuItem value="가나다순" className={classes.menuItemPopover}>가나다순</MenuItem>
                                            <MenuItem value="최신순" className={classes.menuItemPopover}>최신순</MenuItem>
                                            <MenuItem value="등록순" className={classes.menuItemPopover}>등록순</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box className={classes.chipBoxCont}>
                                {this.state.tagListItem.map((tag, i) => (
                                <Chip
                                    key={i}
                                    label={tag.tag}
                                    className={clsx(this.props.classSelectTag === i && classes.chipActive)}
                                    // onClick={() => this.props.handleChangeClassSelectTag(i)}
                                />
                                ))}
                            </Box>
                            <Button className={classes.buttonStyle2} disableRipple onClick={this.searchOpenClose}>적용하기</Button>
                        </Box>
                    </Popover>


                <Box className={classes.chipBox}>
                    <CarouselProvider
                        naturalSlideWidth={1000}
                        totalSlides={tagList.length}
                        isIntrinsicHeight
                        visibleSlides={'auto'}
                        // hasMasterSpinner='true'
                    >
                        <Slider>
                            {tagList.map((tag, i) => (
                                <Slide index={i}>
                                    <Chip
                                        key={i}
                                        label={tag.tag}
                                        className={clsx(this.props.classSelectTag === i && classes.chipActive)}
                                        // onClick={() => this.props.handleChangeClassSelectTag(i)}
                                    />
                                </Slide>
                            ))}
                        </Slider>
                        <Box className={classes.btnGroup}>
                            <ButtonBack className={classes.btnLeftStyle}><ArrowLeftIcon/></ButtonBack>
                            <ButtonNext className={classes.btnRightStyle}><ArrowRightIcon/></ButtonNext>
                        </Box>
                    </CarouselProvider>

                </Box>

                <Box display='flex' alignItems='center' justifyContent='center' style={{margin:'33px 0 0'}}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                            multiple
                            value={this.state.levelList}
                            onChange={this.handleChange}
                            input={<Input id="select-multiple-checkbox" />}
                            className={classes.select}
                            IconComponent={() => <Box className={classes.arrowStyle} ><ArrowDownIcon/> </Box>}
                            renderValue={selected => {
                                if (selected.length === 0) {
                                    return <Typography className={classes.placeholder} >난이도</Typography>;
                                }
                                return selected.join(', ');
                            }}
                            displayEmpty
                        >
                            {levelList.map(levelList => (
                                <MenuItem key={levelList} value={levelList} className={classes.menuItem} disableRipple>
                                    <Checkbox checked={this.state.levelList.indexOf(levelList) > -1} />
                                    <ListItemText primary={levelList} />
                                </MenuItem>
                            ))}
                                <Button className={classes.buttonStyle} disableRipple onClick={this.filterClose}>적용하기</Button>
                        </Select>
                    </FormControl>


                    <FormControl variant="outlined" className={classes.formControl} style={{margin:'0 26px'}}>
                        <Select
                            multiple
                            value={this.state.freeStatus}
                            onChange={this.handleChangeFreeStatus}
                            input={<Input id="select-multiple-checkbox" />}
                            className={classes.select}
                            IconComponent={() => <Box className={classes.arrowStyle} ><ArrowDownIcon/> </Box>}
                            renderValue={selected => {
                                if (selected.length === 0) {
                                    return <Typography className={classes.placeholder} >무료강의 여부</Typography>;
                                }
                                return selected.join(', ');
                            }}
                            displayEmpty
                        >
                            {freeStatus.map(levelList => (
                                <MenuItem key={freeStatus} value={freeStatus} className={classes.menuItem} disableRipple>
                                    <Checkbox checked={this.state.freeStatus.indexOf(levelList) > -1} />
                                    <ListItemText primary={levelList} />
                                </MenuItem>
                            ))}
                            <Button className={classes.buttonStyle} disableRipple onClick={this.handleChangeFreeStatus}>적용하기</Button>
                        </Select>
                    </FormControl>

                    <Box className={classes.search}>
                        <InputBase
                            placeholder='강의명, 강의 소개, 태그 검색'
                            className={classes.inputRoot}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton className={classes.searchIcon} disableRipple>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(SearchCategoryComponent);

