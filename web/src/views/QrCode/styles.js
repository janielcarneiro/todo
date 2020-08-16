import styledComponents from 'styled-components';
import styled from 'styled-components';

export const Conteiner = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Content = styled.div`

    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: #EE6B26;
    }
    p{
        color: #20295F;
    }
`;

export const QrCodeArea = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ValidationCode = styled.div`

    display: flex;
    flex-direction: column;
    margin: 10px;

    span{
        padding-top: 10px;
        text-transform: uppercase;
        font-weight: bold;
    }

    input{
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button{
        font-weight: bold;
        background: #EE6B26;
        color: #FFF;
        font-size: 19px;
        padding: 10px;
        cursor: pointer;
        border: 0;
        margin-top: 15px;
        border-radius: 25px;
        margin-bottom: 60px;

        &:hover{
            background-color: #20295F;
        }
    }
`;