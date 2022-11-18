import styled from 'styled-components';


export const Homes = styled.div`

h1{
   text-align: center;
   color: #656A73;
   margin: 15px;
}
.list{
   margin-left: auto;
    margin-right: auto; 
}
 ul{
    list-style: none;
    background-color: #f8f8f8;
   width: 700px;
   box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
   padding: 10px;
   margin-left: auto;
    margin-right: auto; 
    @media only screen and (max-width: 600px){
        width: 300px;
  }
   :hover{
      padding: 12px;
      transition: .2s;
   }
 }

 .preco{
    display: flex !important;
    justify-content: flex-end !important;
    button{
      margin: 5px;
      border: none;
      background-color: #A61414;
      color: white;
      font-size: 17px;
      cursor: pointer;
    }
 }
`;