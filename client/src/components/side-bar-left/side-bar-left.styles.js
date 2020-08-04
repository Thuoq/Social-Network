import styled from 'styled-components';


export const SideBarFixedContainer = styled.div`
    width: 200px;
	height: 500px;
	float: left;
	margin-right: 20px; 

`
export const SideBarContainer = styled.div`
    width: 200px;
	/*height: 100px;*/
	background-color: #FFFFFF;
	position: fixed;
	border: 1px solid #B7B7B7;
	border-radius: 4px;
    box-shadow: 2px 6px 6px #999999;
    img {
        width: 150px;
        height: 150px;
        padding: 25px;
        /*padding-bottom: 10px;*/
        border-radius: 50%;
    }
    .sidename{
        text-align: center;
        position: relative;
        top: -25px;
        margin: 0px;
        font-size: 16px;
        font-family: "Comic Sans MS";
        font-weight: bold;
        padding-left: 10px;
        padding-right: 10px;
    }
    p{
        text-align: center;
        margin: 0px;
        font-size: 12px;
        font-family: "verdana";
        padding-left: 10px;
        padding-right: 10px;
        color: #525252;
    }
    .ssn{
        position: relative;
        top: -8px;
    }
    .country{
        margin-bottom: 13px;
    }
    .viewall {
        display: block;
        /*margin-left: 75px;*/
        margin: 0 auto;
        font-size: 13px;
        border-radius: 5px;
        border: 0px;
        outline: 0px;
        background-color: #00aeef;
        color: white;
        text-decoration: none;
        width: 55px;
        text-align: center;
        padding: 2px;
        margin-bottom: 15px;
        transition : all 0.4s ease;
        &:hover {
            background-color: #4F82C3;
        }
    }
    hr{
        width: 80%;
        border: 0.8px solid #B7B7B7;
        margin-bottom: 15px;
    }
    .nosociety {
        color: #E91E63;
        font-size: 24px;
        font-family: "Comic Sans MS";
        font-weight: bold;
    }
    .societyname{
        a{
            color: black;
            transition : all 0.4s ease;
            &:hover {
                color: #E91E63;
            }
        }
    }
    .logout {
        color: #009688;
        margin: 2px;
        margin-top: 18px;
        text-align: center;
        background-color: #009688;
        a{
            display: block;
            color: white;
            font-size: 14px;
            text-decoration: none;
            font-weight: bold;
            padding: 4px;
            transition : all 0.4s ease;
            &:hover {
                
                color:black;
            }
        }
    }
`