import styled from 'styled-components';

export const Admincss = styled.div`
h1{
    background-color: #061440;
    color: white;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}
img{
    background-color: #061440;
    padding: 10px;
    width: 30px;
}
ul{
   display: flex;
   justify-content: center;
   margin: 30px;
   list-style: none;
}
li{
    padding: 5px;
}
.form{
    display:flex;
    flex-direction: column;
    height: 330px;
    width: 500px;
    padding: 20px;
    box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
    margin-left: auto;
    margin-right: auto; 
    @media only screen and (max-width: 600px){
        width: 290px;
        height: 350px;
  }
    input{
        margin: 5px;
        border: none;
        background-color: #09061440;
        border-left: 4px solid  #061440;
        padding: 5px;
    }
    button{
        background-color: #061440;
        color: white;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        border-style:none;
        font-size: 17px;
        transition: .3s;
        :hover{
            border: 2px solid #061440;
            color: black;
            background-color: white;
            transition: .3s;
        }
    }
}
.conteiner-cart{
    display: flex;
    justify-content: space-between;
    width: 500px;
    background-color: #061440;
    border-radius: 5px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto; 
    margin-bottom: 50px;
    @media only screen and (max-width: 600px){
        width: 300px;
  }
}
.navProd{
    display: flex;
    flex-direction: row;
    p{
        margin: 5px;
        border: 2px solid #061440;
        color: black;
        padding: 5px;
        border-radius: 5px;
    }
    a{
        text-decoration: none;
    }
    .done{
        background-color: #061440;
        color: white;
    }
}
`