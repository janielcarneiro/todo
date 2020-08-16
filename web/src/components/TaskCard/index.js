import React, {useMemo} from 'react';
//useMemo = obter informaçoẽs separadas
import {format} from 'date-fns';
import * as S from './styles';
import typeIcons from '../../utils/typeIcons';

function TaskCard({type, title, when, done}){


    const date = useMemo(()=> format(new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(()=> format(new Date(when), 'HH:mm'));

    return(
        <S.Conteiner done={done}>

            <S.TopCard>
                <img src={typeIcons[type]} alt="Icone da minha tarefa"></img>
                <h3>{title}</h3>
            </S.TopCard>


            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard>

        </S.Conteiner>
    )

}

export default TaskCard;
