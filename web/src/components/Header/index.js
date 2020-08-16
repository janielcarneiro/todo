import React, {useState, useEffect} from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

import api  from '../../services/api'
import isConnected from '../../utils/isConnected';

function Header({clickNotication}) {

  //nome do estado  funcao que atualizar estado
  const [lateCount, setLateCount] = useState(false);

  async function lateVerify(){

    await api.get(`task/filter/late/${isConnected}`).then(response => {

        setLateCount(response.data.length);

    }).catch(error => {

        console.log("ERROR: ", error);

    });

  }

  useEffect(()=> {
    lateVerify();
  });

  async function Logout(){

    localStorage.removeItem('@todo/macaddress');
    window.location.reload();

  }

  return (
      <S.Conteiner>

        <S.LeftSide>
            <img src={logo} alt="Logo" />
        </S.LeftSide>

        <S.RightSide>
            <Link to="/">INICIO</Link>
            <span className="dividir"></span>
            <Link to="/task">NOVA TEREFA</Link>
            <span className="dividir"></span>
            {!isConnected ?
                <Link to="/qrcode">SINCRONIZAR O CELULAR</Link>
              :
            <button type="button" onClick={Logout}>SAIR</button>
            }

            { lateCount && 
            <>
            <span className="dividir"></span>
            <button onClick={clickNotication} id="notification">
              <img src={bell} alt="NOTIFICATION" ></img>
              <span>{lateCount}</span>
            </button> 
            </>
            }
        </S.RightSide>

      </S.Conteiner>
  )
}

export default Header;
