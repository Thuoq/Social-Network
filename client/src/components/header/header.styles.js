import styled from 'styled-components';

export const WrapperContainerHeader = styled.div`
    margin: 0 auto;
	width: 1100px;
    height: 100%;
    a {
        svg {
            
            &:hover{
                fill: white;
            }
        }
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
	height: 50px;
	background-color: #009688;
	position: fixed;
	z-index: 9999;
`

export const HeaderFixedContainer =styled.div`
    width: 100%;
    height: 50px;

`
export const FormContainer =styled.form`
    display: inline;
    input {
        width: 220px;
        // background-image: url('../images/login/search.png');
        background-position: 5px 4px;
        background-size: 30px 30px;
        background-repeat: no-repeat;
        border-radius: 8px;
        font-size: 16px;
        padding: 10px 20px 10px 40px;
        background-color: #E1E9EE;
        border: 0px;
        position : absolute;
        top: 5px;
        /*margin-left: 100px;*/
        margin-left: 50px;
        transition: width 1.5s ease-in-out;
        &:focus {
            width: 420px;
	        outline: 0px
        }
    }
`

export const IconBarContainer = styled.div`
    float: right;
    /*width: 420px;*/
    width: 450px;
    height: 45px;
    position:relative;
    ul {
        margin:0px;
        margin-top: 3px;
        height: 42px;
        padding-left: 40px;
        li {
            display: inline-block;
            /*margin-left: 20px;
            padding: 0px 10px;*/
            height: 42px;
            padding-left: 10px;
            width: 70px;
            svg {
                width: 34px;
                height: 35px;
                padding-left:20px;
                transition: all 0.4s ease;
                &:hover {
                    fill: white;
                }
            }
            
            &:hover #notify {
                display: block;
            }
        }
    }
    
    a {
        width: 52px;
        height: 50px;
        position: relative;
        p {
            display: inline;
        position: absolute;
        left: 20px;
        top: 10px;
        color: black;
        font-size: 13px;
        margin-bottom: 0px;
        }
    }
    & ul li:hover #notify{
        display: block;
    }
`

export const NotificationContainer = styled.div`
    position: absolute;
    width: 80%;
    height: 370px;
    background-color: rgba(0,0,0,0.7);
    right: -4px;
    top:112%;
    display:none;
    animation: notifyzoom 0.5s;
    @keyframes notifyzoom
    {
        0%
        {
            transform: scaleY(0);
        }
        100%
        {
            transform: scaleY(1);
        }
    }
    p {
        color:white;
        font-size: 14px;
        font-family: sans-serif;
        font-weight: bold;
        text-align: center;
    }

`