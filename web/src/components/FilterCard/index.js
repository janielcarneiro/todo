import React from 'react';
import * as S from './styles';
import Filter from '../../assets/sport.png';

function FilterCard({title, actived}){

    return(

        <S.Conteiner actived={actived}>
            <img src={Filter} alt="Filtro" ></img>
            <span>{title}</span>
        </S.Conteiner>

    )

}

export default FilterCard;