import styled from 'styled-components';


export const PostNewContainer = styled.div`

    background-color: #FFFFFF;
    border: 1px solid #B7B7B7;
    /*position: fixed;*/
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 4px 1.5px 5px #999999;
    background-color: #FFFFFF;
	border: 1px solid #B7B7B7;
	/*position: fixed;*/
	border-radius: 4px;
	padding: 15px;
	box-shadow: 4px 1.5px 5px #999999;
	margin-bottom: 5px;
`
export const UserImageContainer = styled.div`
    img {
        width: 45px;
        height: 45px;
        /*padding-bottom: 30px;*/ 
        float: left;
    }

`
export const UserNameContainer = styled.p`
    display: inline;
	padding-left: 8px;
	font-size: 16px;
	position: relative;
    top: 4px;
    text-transform: capitalize;
	font-weight: bold;
`

export const QuotesContainer = styled.p`
    margin: 12px 4px 8px 4px;
    font-size: 14px;
    /*letter-spacing: 0.5px;*/
    font-family: sans-serif;
    text-align: justify;
    padding: 5px;
    
    & textarea {
        margin-top: 8px;
        width: 100%;
        height: 70px;
        outline: 0px;
        padding: 5px;
        border: 1px solid #D1D1D1;
        font-size: 14px;
        font-family: sans-serif;
        text-align: justify;
        resize: none;
        box-sizing: border-box;
    }

`
export const PostBarContainer = styled.div`
    padding: 10px 10px 1px 10px;
    .imgbttn{
        display: inline;
        /*float: left;*/
        font-size: 15px;
        background-color: white;
        border: 3px solid #615D5E;
        border-radius: 4px;
        outline: 0px;
        /*position: absolute;
        left: 10px;*/
        box-shadow: 3px 3px 5px #999999;
        
    }
    .postmypost {
        display: inline;
        float: right;
        font-size: 16px;
        padding: 6px 9px 4px 9px;
        background-color: #43d854;
        outline: 0px;
        border: 0px;
        border-radius: 4px;
        box-shadow: 3px 3px 5px #999999;
        transition: all 0.4s ease;
        &:hover { 
            background-color: #009688;
	        color: white;
        }
        &:active {
            background-color: #4CAF50;
            box-shadow: 0 5px 4px #666;
            transform: translateY(5px);
        }
    }
    .chooseimg {
        width: 90px;
        /*float: left;*/
        height: 28px;
        font-size: 12px;
        position:absolute;
        opacity: 0;
    }
`