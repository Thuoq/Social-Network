import styled from 'styled-components';


export const SidebarLeftContainer = styled.div`
    background-color: #F3F3F3;
	border: 1px solid #B7B7B7;

	border-radius: 4px 0 0 4px;
	/*padding: 15px;*/
	box-shadow: 4px 1.5px 5px #999999;
	width: 35%;
	box-sizing: border-box;
	float: left;
	height: 540px;
	border-right: 1px solid black;

`

export const HeadingMessage = styled.div`

    height: 50px;
	background-color: #009688;
    width: 100%;
    p {
        margin: 0px;
        color: white;
        font-family: verdana;
        font-size: 20px;
        padding-top: 12px;
        text-align: center;
    }
`
export const LeftContentContainer = styled.div`
    width: 100%;
	padding: 2px;
    padding-top: 4px;   
    form {
        margin-bottom: 4px;
        input {
            // background-image: url('../images/login/search.png');
            background-position: 5px 4px;
            background-size: 20px 20px;
            background-repeat: no-repeat;
            padding:8px;
            padding-left:30px;
            border-radius: 8px;
            font-size: 14px;
            width:98%;
            border:0px;
            outline: 0px;
            box-sizing: border-box;
            border: 1px solid rgba(0,0,0,0.3);
        }
    }

`
export const ContactContainer = styled.div`
    overflow: auto;
	height: 440px;
    width: 99%;
    
    
`