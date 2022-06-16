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
    ListItemText
} from "@material-ui/core";
import {ReactComponent as ListIcon} from "../../common/images/ListIcon.svg";
import clsx from "clsx";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownTinyIcon.svg";
import {ReactComponent as Funnel} from "../../common/images/Funnel.svg";
const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        padding:'16px 30px 0',
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
    chipBox:{
        margin:'30px 0 14px',
        '& > div':{
            height:25,
            backgroundColor:'#eee',
            color:'#000',
            marginRight: 10,
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
        '&:hover':{
            backgroundColor:'#1a457e',
        }
    }
});
class SearchCategoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "난이도",
            freeStatus:"무료강의여부",
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
            ],
            levelList: [
              "초급" ,"중급", "고급",
            ],
        };
    }

    handleChangeLevel = event => {
        this.setState({ level: event.target.value });
    };

    handleChangeFreeStatus = event => {
        this.setState({ freeStatus: event.target.value });
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
        this.setState({ name: event.target.value });
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





    render() {
        const { classes } = this.props;
        const {anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <Typography variant="h3"> <ListIcon/> 모든강의</Typography>
                <Box className={classes.chipBox}>
                    {this.state.tagList.map((tag, i) => (
                        <Chip
                            key={i}
                            label={tag.tag}
                            className={clsx(this.props.classSelectTag === i && classes.chipActive)}
                            // onClick={() => this.props.handleChangeClassSelectTag(i)}
                        />
                    ))}
                </Box>
                <Box>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                            multiple
                            value={this.state.levelList}
                            onChange={this.handleChange}
                            input={<Input id="select-multiple-checkbox" />}
                            renderValue={selected => selected.join(', ')}
                            className={classes.select}
                            IconComponent={() => <Box className={classes.arrowStyle} ><ArrowDownIcon/> </Box>}
                        >
                            {this.state.levelList.map(levelList => (
                                <MenuItem key={levelList} value={levelList} className={classes.menuItem} disableRipple>
                                    <Checkbox checked={this.state.levelList.indexOf(levelList) > -1} />
                                    <ListItemText primary={levelList} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/*<FormControl variant="outlined" className={classes.formControl}>*/}
                    {/*    <Select*/}
                    {/*        value={this.state.level}*/}
                    {/*        onChange={this.handleChangeLevel}*/}
                    {/*        displayEmpty*/}
                    {/*        name="난이도"*/}
                    {/*        className={classes.select}*/}
                    {/*        renderValue={(selected) => selected.join(', ')}*/}
                    {/*        MenuProps={MenuProps}*/}
                    {/*        IconComponent={() => <Box className={classes.arrowStyle} ><ArrowDownIcon/> </Box>}*/}
                    {/*    >*/}
                    {/*        /!*<MenuItem value="난이도" className={classes.menuText}>난이도</MenuItem>*!/*/}
                    {/*        {names.map((name) => (*/}
                    {/*            <MenuItem key={name} value={name}>*/}
                    {/*                <Checkbox checked={personName.indexOf(name) > -1} />*/}
                    {/*                <ListItemText primary={name} />*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Select>*/}
                    {/*</FormControl>*/}
                    {/*<FormControl variant="outlined" className={classes.formControl}>*/}
                    {/*    <Select*/}
                    {/*        value={this.state.freeStatus}*/}
                    {/*        onChange={this.handleChangeFreeStatus}*/}
                    {/*        displayEmpty*/}
                    {/*        name="무료강의여부"*/}
                    {/*        className={classes.select}*/}
                    {/*        IconComponent={() => <Box className={classes.arrowStyle} ><ArrowDownIcon/> </Box>}*/}
                    {/*    >*/}
                    {/*        <MenuItem value="무료강의여부" className={classes.menuText}>무료강의 여부</MenuItem>*/}
                    {/*    </Select>*/}
                    {/*</FormControl>*/}








                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(SearchCategoryComponent);

