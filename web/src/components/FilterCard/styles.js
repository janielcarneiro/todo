import styled from 'styled-components';

export const Conteiner = styled.div`

    width: 200px;
    height: 45px;
    background: ${props => props.actived ? '#EE6B26' : '#20295F'};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    cursor: pointer;

    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover{
        background: #EE6B26;
    }
`;