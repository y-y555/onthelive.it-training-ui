import React from 'react';
import clsx from 'clsx';
import {
    Typography,
    Box,
    Select,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        "& .MuiFormGroup-root":{
            flexDirection:'row'
        },
        "& .MuiIconButton-root":{
            width:35
        },
        "& .MuiFormControlLabel-label":{
            fontFamily:'NanumSquareRoundOTF',
            fontSize:14,
            color:'#1f1f1f'
        }

    },
    titleStyle:{
        fontFamily:'NanumSquareRoundOTF',
        color:'#000',
        fontSize:14,
        fontWeight:600,
    },
    formControlBox:{
        width:'100%',
        "& .MuiOutlinedInput-input":{
            padding:'12px 14px',
            width:60
        },
    },
    selectBox: {
        width:"100%",
        fontFamily: 'NanumSquareRoundOTF',
        fontSize: 14,
        borderRadius:4,
        "& :focus":{
            outline:'none',
        },
    },
    optionStyle: {
        fontFamily: 'NanumSquareRoundOTF',
        fontSize: 14,
        color:'#303030',
    },

    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
    radioBox:{
        "& .MuiFormControlLabel-root":{
            marginRight:28
        },
        "& .MuiButtonBase-root":{
            width:16,
            padding:0,
            marginRight:5
        }
    }
});

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}


export default function StartTime() {
    const classes = useStyles();
    const [time, setTime] = React.useState('');
    const [minute, setMinute] = React.useState('');

    const handleTimeSelect = event => {
        setTime( event.target.value);
    }
    const  handleMinuteSelect = event => {
        setMinute(event.target.value);
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.titleStyle}>시작 시간</Typography>

            <Box display='flex' alignItems='center' pt={1} pb={1}>
                <FormControl variant={'outlined'} className={classes.formControlBox}>
                    <Select
                        native
                        value={time}
                        onChange={handleTimeSelect}
                        className={classes.selectBox}
                    >
                        <option value="" className={classes.optionStyle}>시간</option>
                        <option value="1" className={classes.optionStyle}>1</option>
                        <option value="2" className={classes.optionStyle}>2</option>
                        <option value="3" className={classes.optionStyle}>3</option>
                        <option value="4" className={classes.optionStyle}>4</option>
                        <option value="5" className={classes.optionStyle}>5</option>
                        <option value="6" className={classes.optionStyle}>6</option>
                        <option value="7" className={classes.optionStyle}>7</option>
                        <option value="8" className={classes.optionStyle}>8</option>
                        <option value="9" className={classes.optionStyle}>9</option>
                        <option value="10" className={classes.optionStyle}>10</option>
                        <option value="11" className={classes.optionStyle}>11</option>
                        <option value="12" className={classes.optionStyle}>12</option>
                    </Select>
                </FormControl>
                <Typography style={{paddingLeft:10,paddingRight:10}}> : </Typography>
                <FormControl variant={'outlined'} className={classes.formControlBox}>
                    <Select
                        native
                        value={minute}
                        onChange={handleMinuteSelect}
                        className={classes.selectBox}
                    >
                        <option value="" className={classes.optionStyle}>분</option>
                        <option value="00" className={classes.optionStyle}>00</option>
                        <option value="05" className={classes.optionStyle}>05</option>
                        <option value="10" className={classes.optionStyle}>10</option>
                        <option value="15" className={classes.optionStyle}>15</option>
                        <option value="20" className={classes.optionStyle}>20</option>
                        <option value="25" className={classes.optionStyle}>25</option>
                        <option value="30" className={classes.optionStyle}>30</option>
                        <option value="35" className={classes.optionStyle}>35</option>
                        <option value="40" className={classes.optionStyle}>40</option>
                        <option value="45" className={classes.optionStyle}>45</option>
                        <option value="50" className={classes.optionStyle}>50</option>
                        <option value="55" className={classes.optionStyle}>55</option>
                    </Select>
                </FormControl>
            </Box>
            <FormControl component="div" style={{marginLeft:15, marginTop:10}}>
                <RadioGroup defaultValue="morning" aria-label="time radio button" name="customized-radios" className={classes.radioBox}>
                    <FormControlLabel value="morning" control={<StyledRadio />} label="오전"  />
                    <FormControlLabel value="afternoon" control={<StyledRadio />} label="오후" />
                </RadioGroup>
            </FormControl>

        </div>
    );
}