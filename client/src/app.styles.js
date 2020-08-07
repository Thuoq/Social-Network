import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
	height: 100%;
	margin:0px;
	padding:0px;
	font-family: Helvetica, Arial, sans-serif;
}
.logoletter
{
	margin-top:7px;
	margin-bottom:5px;

}
.wrapperContainer {
	margin: 4%  auto 0 auto;
    width: 1100px;
    height: 100%;
}
@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0);} 
    to {-webkit-transform: scale(1);}
}
    
@keyframes animatezoom {
    from {transform: scale(0);} 
    to {transform: scale(1);}
}
.deanimate
{
	animation: animatezoomout 0.6s;
}
@keyframes animatezoomout
{
	from{transform: scale(1);}
	to{transform: scale(0);}
}

`