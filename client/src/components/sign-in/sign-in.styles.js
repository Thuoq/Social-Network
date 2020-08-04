import styled from 'styled-components';

export const WrapperContainer = styled.div`
    margin: 0 auto;
	width: 1200px;
    height: 100%;
    
`
export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: #009688;
    svg {
        fill : ghostwhite;
    }
`

export const FormContainer  = styled.form`
    float:right;
	margin-top: 8px;
	color: white;
    font-size: 14px;
    
`
export const TableContainer = styled.table`
    & tr td .inputtext {
        border: 1px solid black;
        width: 145px;
        height: 18px;
   }
   & tr td {
        border: 0px;
        padding: 0px;
        padding-left: 8px;
   }
`
export const ButtonLogin = styled.button`
    border: 0px;
    background-color: cornflowerblue;
    height: 22px;
    color:white;
    font-size:16px;
    
    transition : all ease 0.2s;
    &:hover {
        background-color: #009688;
        box-shadow: 0px 0px 4px rgba(0,0,0,0.5);
        font-weight : 400;  
        cursor: pointer;
    }
    &:active { 
        transform: translateX(8px);
	    box-shadow: 4px 5px 4px #666;
    }
`