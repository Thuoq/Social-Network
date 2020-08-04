import styled from 'styled-components';



export const SideBarLeftProfile = styled.div`

    width: 200px;
    /*height: 100px;*/
    background-color: transparent;
    /*border: 1px solid #B7B7B7;*/
    /*	border-radius: 4px;*/
    /*	box-shadow: 2px 6px 6px #999999;*/
    margin: 0px auto;
    position: relative;
    top: -80px;
    img {
        width: 150px;
        height: 150px;
        /*padding: 15px;*/
        /*padding-bottom: 10px;*/
        border-radius: 50%;
        display: block;
        margin: 4px auto 25px auto;
    }
    p {
        text-align: center;
        margin: 0px;
        font-size: 12px;
        font-family: "verdana";
        padding-left: 10px;
        padding-right: 10px;
        color: #525252;
    }
    .sidename {
        text-align: center;
        position: relative;
        top: -10px;
        margin: 0px;
        font-size: 16px;
        font-family: "Comic Sans MS";
        font-weight: bold;
        padding-left: 10px;
        padding-right: 10px;
        
        a{
            color: black;
            transition : all 0.4s ease;
            &:hover{
                color: #E91E63;
            }
        }
    }
    .nosociety{
        color: #E91E63;
        font-size: 24px;
        font-family: "Comic Sans MS";
        font-weight: bold;
    }
    .societyname {
        a {
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
        a {
            display: block;
            color: white;
            font-size: 14px;
            text-decoration: none;
            font-weight: bold;
            padding: 4px;
            transition : all 0.4s ease;
            &:hover {
                color: black;
            }
        }
    }
    input {
        position: absolute;
        top: 38%;
        right: 15px;
        z-index:7777;
        width: 20px;
        opacity: 0;
        &:hover ~ .slideEdit1 {
            color: black;
        }
    }
    .slideEdit1{
        cursor: pointer;
	    transform: scaleX(-1);
        position:absolute;
        top: 35%;
        right: 13px;
        font-size: 26px;
        padding: 0px;
        margin: 0px;
        z-index: 7666;
        color: blue;
    }
    
`