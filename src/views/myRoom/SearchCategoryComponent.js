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
    ListItemText, InputBase
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
            tagList: [
                {tag:"수업"},
                {tag:"스터디"},
                {tag:"노트필기"},
                {tag:"기술문서"},
                {tag:"아카데미"},
                {tag:"서비스"},
                {tag:"마케팅"},
                {tag:"렌딩페이지"},
                {tag:"노출"},
                {tag:"도달률"},
                {tag:"타겟팅광고"},
                {tag:"이탈률"},
                {tag:"시즈널키워드"},
                {tag:"연관검색어"},
                {tag:"수업"},
                {tag:"스터디"},
                {tag:"노트필기"},
                {tag:"기술문서"},
                {tag:"아카데미"},
                {tag:"서비스"},
                {tag:"마케팅"},
                {tag:"렌딩페이지"},
                {tag:"노출"},
                {tag:"도달률"},
                {tag:"타겟팅광고"},
                {tag:"이탈률"},
                {tag:"시즈널키워드"},
                {tag:"연관검색어"},
            ],
            levelList: [
                // "초급" ,"중급", "고급",
            ],
            freeStatus:[

            ],

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





    render() {
        const { classes } = this.props;
        const {anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <Box>
                <Typography variant="h3"> <ListIcon/> 모든강의</Typography>
                <Box className={classes.chipBox}>
                    {/*{this.state.tagList.map((tag, i) => (*/}
                    {/*    <Chip*/}
                    {/*        key={i}*/}
                    {/*        label={tag.tag}*/}
                    {/*        className={clsx(this.props.classSelectTag === i && classes.chipActive)}*/}
                    {/*        // onClick={() => this.props.handleChangeClassSelectTag(i)}*/}
                    {/*    />*/}
                    {/*))}*/}

                    <CarouselProvider
                        naturalSlideWidth={1000}
                        totalSlides={this.state.tagList.length}
                        isIntrinsicHeight
                        visibleSlides={'auto'}
                        // hasMasterSpinner='true'
                    >
                        <Slider>
                            {this.state.tagList.map((tag, i) => (
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

