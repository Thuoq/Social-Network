import styled from 'styled-components';


export const SuggestFixedContainer = styled.div`
    float: right;
	width: 290px;
	height: 300px;
	clear: right;
`

export const SuggestContainer = styled.div`
    position: fixed;
    p{
        margin: 0px;
        padding: 0px;
        position: relative;
        float: left;
        top: -18px;
        left: 2px;
        text-decoration: underline;
        color: #666666;
        font-size: 14px;
        height: 300px;
    }

`
export const SidebarRightContainer  = styled.div`
    position: fixed;
	/*float: right;*/
	width: 250px;
	/*height: 240px;*/
	background-color: #FFFFFF;
	border: 1px solid #B7B7B7;
	border-radius: 4px;
	box-shadow: 2px 6px 6px #999999;
    padding: 20px;
    hr {
        border: 0.5px solid #B7B7B7;
        outline: 0px;
        width: 80%;
        box-shadow: 1px 1px 5px #999999;
        margin-bottom: 12px;
        position: relative;
    }
`
export const RightContentContainer = styled.div`
    padding-bottom: 5px;
    margin-bottom: 5px;
    height: 40px;
    img {
        display: inline;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        float: left;
    } 
    p {
        display: block;
        width: 120px;
        margin: auto auto;
        margin-left: 15px;
        margin-top: 12px;
        float: left;
        text-align: left;
        font-size: 14px;
    }
    a {
        display: block;
        float: right;
        width: 68px;
        font-size: 13px;
        margin-top: 7px;
        text-decoration: none;
        text-align: center;
        color: rgba(0,0,0,.85);
        height: 19px;
        padding: 1px;
        border: 2px solid #B7B7B7;
        border-radius: 4px;
        transition : all 0.4s ease ;
        &:hover {
            background-color: #009688;
            width: 70px;
            height: 21px;
            border: none;
            color: white;
        }
    }
`