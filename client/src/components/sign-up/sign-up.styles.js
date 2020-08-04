import  styled  from 'styled-components';



export const MainContainer = styled.div`
    width: 100%;
	height: 100%;
	
	padding-bottom: 7%;
	clear: right;
`

export const LogoTopic = styled.image`
    position: relative;
    margin-top: 5%;
    width: 500px;
    height: 400px;
    opacity: 1.0;
    transition: opacity 1s ease;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`   

export const SignUpContainer = styled.div`
    float:right;
    font-size: 18px;
    h1{ 
        font-size: 45px;
        margin: 0px;
        padding-top: 10%;
        padding-bottom: 4%;
    }
    & .inputtext2 {
        width: 250px;
        height: 32px;
        font-size: 18px;
        border-radius: 5px;
        border: 1px solid #bdc7d8;
        padding-left: 8px 10px;
    }
    
`

export const TableSignUpContainer = styled.table`
    & tr td { 
        padding-bottom: 10px;
        padding-right: 10px;
        text-align: right;
    }
    & .pwd { 
        font-size:32px;
    }
    & .fm td {
        text-align: left;
    }
    & .joinbut {
        height: 130px;
    }
    
` 
export const ButtonSignUpContainer = styled.button`
    border:0px;
    width: 100%;
    height: 34px;
    font-size: 18px;
    background-color: darkcyan;
    color:white;
    box-shadow: 0 6px 4px #999;
    transition : all ease 0.2s;
    &:hover { 
        background-color: #4F82C3;
        cursor: pointer;
        opacity: 0.9;

    }
    &:active{ 
        background-color: #2196F3;
        box-shadow: 0 5px 4px #666;
        transform: translateY(8px);
    }

`