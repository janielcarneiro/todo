import styled from 'styled-components';

export const Conteiner = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.div`

    width: 60%;
    padding-bottom: 70px;
`;

export const TypeIcons = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.7;
    }

    button{
        border: none;
        background: none;
    }

    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

`;

export const Input = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;  

    span{
        color: #707070;
        margin: 5px 0;
    }

    input{
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }

`;

export const TextArea = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
   

    span{
        color: #707070;
        margin-bottom: 10px;
    }

    textarea{
        font-size: 16px;
        padding: 15px;
        border: 1px solid #EE6B26;
        border-radius: 8px;
    }
`;

export const Options= styled.div`

    display: flex;
    justify-content: space-between;

    button{
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;
    }

`;

export const Save = styled.div`

    width: 100%;
    padding-top: 10px;

    button{
        width: 100%;
        background-color: #EE6B26;
        border: 0;
        padding: 10px 0;
        font-size: 16px;
        font-weight: bold;
        color: #FFF;
        border-radius: 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.9;
        }
    }

`;