import styled from "styled-components";

const TYPES = {
  ACTIVE: "#4CAF50",
  PASIVE: "#5e5e5e"
}

export default {
  BackgroundDiv: styled.div`
float:left; 
width:200px; 
height:200px;
margin: 2px;
margin-top: 13px;
`,
  GlobalDiv: styled.div`
float:left; 
`,
  Buttons: styled.button`
margin-top: 20px;
margin-left: 3px;
display: inline-block;
padding: 15px 25px;
font-size: 24px;
cursor: pointer;
text-align: center;
outline: none;
color: #fff;
background-color: ${((props) => {
      return props.type && TYPES[props.type]
    })}
border-radius: 15px;
box-shadow: 0 9px #999;
`,
  loader: styled.div`
    position: absolute;
    left: 50%;
    top: 30%;
    z-index: 1;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
  `,
  octo: styled.div`
  margin-top: 5rem;
  margin-left: 3rem;
  font-size: 20px;

`
}
