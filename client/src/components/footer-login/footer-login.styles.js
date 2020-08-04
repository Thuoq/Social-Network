import styled from 'styled-components';


export const FooterContainer = styled.div`
    background-color: #ccc;
    text-align: center;
    height: 214px; 
    padding-top: 100px;
    & ul {
        padding: 5px;
        list-style-type: none;
        text-align: center;
        margin: 10px;
        border-radius: 5px;
        li {
            display: inline;
            a{
                text-decoration: none;
                padding: 10px;
                color: #615D5E;
                font-size: 16px;
                display: inline-block;
                transition : all ease 0.5s; 
                &:hover { 
                    color: white;
                    background-color: #009688;
                    transform: scale(1.05) translateY(-10px); 
                }
            }
        }
    }
    p {
        color: #666666;
        text-align: center;
        padding-bottom: 2%;
        padding-top: 8px;
        font-size: 14px;
    }

`