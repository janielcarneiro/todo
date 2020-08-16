import styled from 'styled-components';

export const Conteiner = styled.div`

    width: 100%;
      
`;

export const FilterArea = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    button{
        background: none;
        border: none;
    }

`;

export const Content = styled.div`

    width: 100%;
    display: flex;
    margin-bottom: 50px;
    flex-wrap: wrap;
    justify-content: center;

    a{
        text-decoration: none;
        color: #000;
    }
`;

export const Title = styled.div`

    width: 100%;
    border-bottom: 1px solid #707070;
    display: flex;
    justify-content: center;
    margin-bottom: 26px;

    h3{
        color: #707070;
        position: relative;
        top: 30px;
        background-color: #FFF;
        padding: 0 20px;
    }

`