import styled from 'styled-components';


export const FooterContainer = styled.div`
    background-color: white;
	text-align: center;
	position: relative;
    top: -10px;
    ul {
        padding: 5px;
        list-style-type: none;
        text-align: center;
        margin: 5px;
        border-radius: 5px;
        li {
            display: inline-block;
            padding: 3px;
            a {
                text-decoration: underline;
                color: #615D5E;
                font-size: 13px;
                padding: 2px;
                transition : all 0.4s ease;
                &:hover {
                    color: #009688;
                    font-size: 14px;
                    background-color: #ccc;
                    transform : scale(1.02) translateY(-3px);
                    cursor: pointer;
                    text-decoration: none;
                }
            }
        }
    }
    p{
        color: #666666;
        text-align: center;
        font-size: 12px;
        padding-top: 6px;
        padding-bottom: 1%;
    }
    svg {
        width: 50px;
        height: 40px;
        display: block;
        margin: 0 auto;
        transition : all 0.4s ease;
        &:hover{
            fill: #009688;
            cursor: pointer;
        }
    }
`