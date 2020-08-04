import styled from 'styled-components'

export const BubbleContainer = styled.div`
    left: 46%;
	top: 12px;
	position: absolute;
	z-index: 8888;

`
export const  DotContainer = styled.span`
    background-color: #bbb;
    border-radius: 50%;
    height: 15px;
    width:15px;
    margin:0 4px;
    display: inline-block;
    transition : all 0.4s ease;
    &:hover {
        background-color: #717171;
    }

`
export const SlideShowContainer = styled.div`
    position: relative;
	margin: 0px;
	padding: 0px;
    height: 360px;
    input {
        position: absolute;
        right: 14px;
        top: 7px;
        z-index:7777;
        width: 20px;
        opacity: 0;
    }
    p {
        cursor: pointer;
        transform: scaleX(-1);
        position:absolute;
        right: 10px;
        font-size: 26px;
        padding: 0px;
        margin: 0px;
        z-index: 7666;
        color: blue;
        transition : all 0.5s ease;
    }
    & input:hover ~ p {
        color: black;
	    opacity: 1;
    }
`

export const SingleSlide = styled.div`
    width: 100%;
    display:block;
    animation: 1s fade;
    img {
        width: 100%;
        height: 360px;
        position: absolute;
        font-size: 18px;
        font-family: verdana;
        color: rgba(0,0,0,0.5);
    }

`