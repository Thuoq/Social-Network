import styled from 'styled-components';


export const ModalContainer = styled.div`

    display: none;
    position: fixed; /* Stay in place */
    z-index: 999998;
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
    padding-top: 60px
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s;
`

export const EditContainer = styled.div`
    background-color: #fefefe;
    margin: 10% auto 10% auto;
    border: 1px solid #888;
    width: 50%;
    position: relative;
    form {
        margin: 20px auto;
        width: 40%;
        button {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 25px 0 6px 0;
            border: none;
            cursor: pointer;
            width: 100%;
            transition : opacity 0.4s ease;
            &:hover { 
                opacity: 0.8
            }
        }
        & .cancelbtn {
            margin-top: 13px;
            background-color: #f44336;
        }
    }
    & form input[type=text] ,
      form input[type=password],
      form input[type=date],

      form input[type=number],
      form input[type=email] {
        width: 100%;
        padding: 10px 16px;
        margin: 12px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 14px;
    }
`
export const CloseIconContainer = styled.span`
    position: absolute;
    right: 15px;
    top: 5px;
    color: #000;
    font-size: 35px;
    font-weight: bold;
    transition : all 0.2s ease;
    &:hover,&:focus{ 
        color: red;
        cursor: pointer;
    }

`