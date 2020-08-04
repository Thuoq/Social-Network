import styled from 'styled-components';


export const ChattingMainContainer = styled.div`
    background-color: #F3F3F3;
	border: 1px solid #B7B7B7;
	border-radius: 0 4px 4px 0;
	/*padding: 15px;*/
	box-shadow: 4px 1.5px 5px #999999;
	width:65%;
	box-sizing: border-box;
	float: right;
	height: 540px;
	border-left: 1px solid black;
	position: relative;
`
export const ChattingUserContainer = styled.div`
        height: 50px;
        background-color: #009688;
        width: 100%;
        img {
            width: 40px;
            height: 40px;
            float: left;
            margin-left: 10px;
            margin-top: 5px;
            border-radius: 50%;
        }
        p{
            display: inline-block;
            margin-top: 15px;
            font-size: 18px;
            margin-left: 12px;
            color: white;
            font-family: verdana;
        }
`

export const SendMessageContainer = styled.div`
    textarea {
        width: 83%;
        height: 40px;
        position: absolute;
        bottom: 0;
        left: 1px;
        resize: none;
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,0.4);
        outline: 0px;
        padding: 5px;
        font-size: 14px;
    }
    p {
        position: absolute;
        /*bottom: 2px;*/
        bottom: -4px;
        right: -1px;
        margin: 0px;
        padding: 0px;
        font-size: 48px;
        color: #43E954;
        font-weight: bold;
        /*color: #009688;*/
        cursor: pointer;
        transition : all 0.4s ease;
        &:hover { 
            color: #009688;
        }
    }

`
export const ChatMessageContainer = styled.div`
    width: 100%;
    height: 433px;
    background-color: #79CFA2;
    box-shadow: 0px 4px 8px #79CFA2;
    overflow: auto;
    .received, .send {
        display: none;
        overflow: hidden;
        position: relative;
    }
    p {
        padding: 6px;
        margin: 10px;
        /*border: 1px solid #43E954;*/
        border: none;
        max-width: 260px;
        /*width:100%;*/
        font-size: 14px;
    }
    .received {
        p { 
            float: left;
            background-color: #F3F3F3;
            margin-left: 15px;
            border-radius: 0px 5px 5px 5px;
        }
        &:before {
            content: " ";
            height: 0;
            position: absolute;
            top: 10px;
            width: 0;
            z-index: 1;
            left: 0px;
            border: medium solid white;
            border-width: 0px 15px 15px 0;
            border-color: transparent #F3F3F3 transparent transparent;
        }
    }
    .send {
        p{
            float: right;
            background-color: #DCF8C6;
            margin-right: 15px;
            border-radius: 5px 0px 5px 5px;
        }
        &::before {
            content: " ";
            height: 0;
            position: absolute;
            top: 10px;
            width: 0;
            z-index: 1;
            right: 0px;
            border: medium solid white;
            border-width: 0px 0px 15px 15px;
            border-color: transparent transparent transparent #DCF8C6;
        }
    }

`
