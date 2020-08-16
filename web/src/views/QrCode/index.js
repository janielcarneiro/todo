import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Qr from 'qrcode.react';

function QrCode(){
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function Save(){
        if(!mac)
            alert("Por favor digitar a senha gerada pelo QRCODE");
        else{
            await localStorage.setItem('@todo/macaddress', mac);
            setRedirect(true);
            window.location.reload();
        }
    }
    return (
        <S.Conteiner>
            {redirect && <Redirect to="/"/>}
            <Header/>
            
                <S.Content>
                    <h1>CAPTURE O QRCODE PELO APP</h1>
                    <p>Suas Atividades serão sincronizadas com a do seu celular</p>

                    <S.QrCodeArea>
                        <Qr value="Janiel Carneiro Lima" size={280}/>
                    </S.QrCodeArea>

                    <S.ValidationCode>
                        <span>Digete a numeração que apareceu no seu celular</span>
                        <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                        <button type="button" onClick={Save}>Sincronizar com o celular</button>
                    </S.ValidationCode>

                </S.Content>

            <Footer/>
        </S.Conteiner>
    )

}

export default QrCode;