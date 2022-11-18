import styled from 'styled-components';

export const Logincss = styled.div`
text-align:center;
h1{
     background-image: linear-gradient(to bottom, rebeccapurple, steelblue, #A61414);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card-login{
    display: flex;
    flex-direction:column;
    height: 150px;
    width: 300px;
    padding: 20px;
    box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
    margin-left: auto;
    margin-right: auto; 
    input{
        margin: 5px;
        border: none;
        background-color: #09061440;
        border-left: 4px solid  #061440;
        padding: 5px;
    }
}
button{
    text-decoration: none;
    color: white;
    background-color:  #061440;
    margin: 7px;
    padding: 5px;
}

`