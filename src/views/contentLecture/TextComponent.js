import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";

const styles = theme => ({
    root:{
        display:'flex',
        position:'relative'
    },
    textBox:{
        width:42,
        height: 14,
        boxSizing:'border-box',
        background:'#0F3271',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:'0.625rem',
        color:'#fff'
    },
    textareaBox:{
        fontSize: '2.125rem',
        '&:focus':{
            outline:'none'
        },
        '&::placeholder':{
            color:'#000'
        }
    },
    fontSizeBox:{
        position: 'absolute',
        width: 160,
        borderRadius: 4,
        boxShadow:'0px 4px 16px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.24)',
        marginTop: 14,
        background: '#fff',
        '& ul':{
            listStyle:'none',
            paddingLeft: 0,
            margin:'10px 0',
            cursor:'pointer',
            '& li':{
                height: 40,
                paddingLeft: 15,
                display:'flex',
                alignItems: 'center',
                '&:hover':{
                    background:'#D3D7DB'
                }
            }
        }
    },
    text1:{
        fontSize: '2.125rem'
    },
    text2:{
        fontSize: '1.875rem'
    },
    text3:{
        fontSize: '1.625rem'
    },
    text4:{
        height: '35px !important',
        fontSize: '1.375rem'
    },
    text5:{
        height: '35px !important',
        fontSize: '1.25rem'
    },
    text6:{
        height: '30px !important',
        fontSize: '1.125rem'
    },
    text7:{
        height: '30px !important',
        fontSize: '1rem',
    },
    text8:{
        height: '30px !important',
        fontSize: '0.75rem',
    },
    text9:{
        height: '30px !important',
        fontSize: '0.625rem'
    },
});

class TextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textareaHeight : 0
        };
    }

    checkItemChangeHandler = (event) => {
        this.setState({
            textareaHeight:event.target.value.split('\n').length - 1
        });

    }

    render() {
        const { classes } = this.props;
        const { textareaHeight } = this.state;

        // const element = document.getElementById('container');
        // const textareaWidth = element.clientWidth + 2;

        return (
            <div className={classes.root}>
                <Box>
                    <Box className={classes.textBox}>
                        <Typography className={classes.textStyle}>텍스트</Typography>
                    </Box>
                    <textarea
                        id="container"
                        type='text'
                        placeholder={'제목 1'}
                        onChange={this.checkItemChangeHandler}
                        className={classes.textareaBox}
                        style={{height: ((textareaHeight + 1) * 40) + 'px'}}
                    />
                </Box>

                <Box
                    className={classes.fontSizeBox}
                    style={{left: 370,}}
                     // style={{left:textareaWidth}}
                >
                    <ul>
                        <li className={classes.text1}>제목1</li>
                        <li className={classes.text2}>제목2</li>
                        <li className={classes.text3}>제목3</li>
                        <li className={classes.text4}>제목4</li>
                        <li className={classes.text5}>제목5</li>
                        <li className={classes.text6}>제목6</li>
                        <li className={classes.text7}>본문1</li>
                        <li className={classes.text8}>본문2</li>
                        <li className={classes.text9}>본문3</li>
                    </ul>
                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(TextComponent);