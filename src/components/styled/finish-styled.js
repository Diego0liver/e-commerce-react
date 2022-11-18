import styled from 'styled-components';


export const Finiish = styled.div`
text-align:center;
img{
    width: 500px;
}
button{
    background-color:  #A61414;
    color: white;
    border: none;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
}
@media only screen and (max-width: 600px){
    img{
    width: 300px;
    margin-left: -100px;
}
h1{
    text-align: left;
}
}
`