import styled from 'styled-components';


export const Navs = styled.div` 
   text-align: center;
   background-color:#A61414;
   color: white;
   margin: auto 0;
   padding: 30px;
   .conteiner-cart{
    display: flex;
    justify-content: space-between;
    width: 500px;
    background-color:#A61414;
    border-radius: 5px;
    box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
    padding: 5px;
    margin-left: auto;
    margin-right: auto; 
    @media only screen and (max-width: 600px){
        width: 300px;
  }
   img{
   width: 50px;
 }
 button{
  border-radius: 100%;
  padding: 5px;
  width: 20px;
  height: 20px;
  border:none;
  background-color:red;
  color: #f8f8f8;
  margin-left: -15px;
 }
 }

`