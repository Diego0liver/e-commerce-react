import styled from 'styled-components';



export const EditCss = styled.div`
h1, h3{
    text-align: center;
}
ul{
    list-style: none;
    box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
    padding: 10px;
    height:80px;
    width: 200px;
    display:flex;
    flex-direction: row;
    margin: 5px;
    border-radius: 3px;
    margin-left: auto;
    margin-right: auto; 
    button{
        background-color: #A61414;
        border: none !important;
        border-radius: 5px;
        img{
            width: 30px;
            cursor: pointer;
        }
    }
    li{
        margin: 5px;
        
    }

}
.card-edit{
        display:flex;
        flex-direction: row;
        flex-wrap:wrap ;

    }

`