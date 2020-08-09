import styled from 'styled-components';



export const TimeLineContainer = styled.div`
    width: 700px;
	padding: 45px;
	/*height: 400px;*/
	position: relative;
	top: -58px;
	background-color: #474e5d;
    font-family: Helvetica, sans-serif;
    margin-bottom: 45px;
    &:after {
        content:'';
        position: absolute;
        left: 50%;
        width: 6px;
        background-color: white;
        /*height: 100%;*/
        top: 0px;
        bottom: 0px;
        margin-left: -3px;
    }
`

export const ContainerLeft = styled.div`
    background-color: white;
	padding: 10px 30px;
	position:relative;
    width: 35%;
    p {
        margin: 4px;
    }
    &::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -61px;
        background-color: white;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }
    left: 0px;
    &::before{
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: -10px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
    }
    h2 {
        color: #009688;
    }
    h4 {
        margin: 4px;
    }
    
    .slideEdit2 {
        cursor: pointer;
        position: absolute;
        transform: scaleX(-1);
        font-size: 24px;
        color: blue;
        right: 5px;
        top: -4px;
        transition : color 0.2s ease;
        &:hover {
            color: black;
        }   
    }
`
export const ContainerRight = styled.div`
    background-color: white;
	padding: 10px 30px;
	position:relative;
    width: 35%;
    p {
        margin: 4px;
    }
    &::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -61px;
        background-color: white;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        left: -61px;
        background-color: white;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }
    left: 56.34%;
    &::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: -10px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }
    h2 {
        color: #009688;
    }
    h4 {
        margin: 4px;
    }
    
    .slideEdit2 {
        cursor: pointer;
        position: absolute;
        transform: scaleX(-1);
        font-size: 24px;
        color: blue;
        right: 5px;
        top: -4px;
        transition : color 0.2s ease;
        &:hover {
            color: black;
        }   
    }
`

export const TContent = styled.div`
    p {
        font-size: 15px;
        margin: 4px;
        text-transform: capitalize;
    }

`