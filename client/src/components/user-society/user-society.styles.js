import styled from 'styled-components';

export const ConnectionContainer = styled.div`
    width:122px;
	/*height: 140px;*/
	float: left;
	background-color: slategrey;
	display:inline-block;
    margin:15px 10px 20px 10px;
    color: white;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    transition : all 0.4s ease;
    img {
        width: 100%;
	    
    }
    h5{
        text-align: center;
	    margin: 4px;
    }
    p {
        font-size: 12px;
        text-align: center;
        padding: 0px;
        margin: 0px;
        margin-bottom: 5px;
    }
    a {
        display: block;
        width: 68px;
        font-size: 13px;
        margin: 10px auto;
        text-decoration: none;
        text-align: center;
        color: white;
        height: 19px;
        padding: 1px;
        border: 2px solid #B7B7B7;
        border-radius: 4px;
        box-shadow: 2px 8px 6px rgba(0,0,0,0.4);
        transition: box-shadow 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
            box-shadow: 1px 4px 2px rgba(0,0,0,0.5);
        }
        background-color: darkgray;
        
    }
    
    &:hover {
        transform: translateY(-5px);
    }

`