import styled from 'styled-components';


export const Carts = styled.div` 
  text-align: center;
  h1, h4{
    color: #656A73;
  }
ul{
    list-style: none;
    background-color: #f8f8f8;
   width: 500px;
   box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
   padding: 5px;
   margin-left: auto;
    margin-right: auto; 
    @media only screen and (max-width: 600px){
        width: 300px;
  }
 }
 .btn-carts{

    button{
      margin: 3px;
      background-color: blue;
      color: white;
      border: none;
      cursor:pointer;
    }
    .remove{
      background-color: #A61414;
      color: white;
      border: none;
    }
   
 }
 .clear{
    border: none;
      background-color: #A61414;
      color: white;
      font-size: 17px;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      margin-bottom: 30px;
   }
   h2{
    background-color: #04bf8a8c;
    color: #025940;
    width: 500px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto; 
    @media only screen and (max-width: 600px){
        width: 350px;
  }
   }
`