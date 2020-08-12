import styled from 'styled-components';



export const ContactUserContainer = styled.div`
        width: 100%;
        padding: 4px 2px 4px 2px;
        overflow: hidden;
        margin-bottom: 10px;
        box-sizing: border-box;
        cursor: pointer;
        transition : border 0.4s ease;
        &:hover {
            border-bottom: 8px solid #009688;
        }
        img {
            display: inline;
            width: 35px;
            height: 35px;
            float: left;
            border-radius: 50%; 
            
        }
        p {
            display: inline;
            position: relative;
            top: 10px;
            left: 15px;
            font-size: 15px;
            text-transform: capitalize;
        }


`