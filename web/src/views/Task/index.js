import React, {useState, useEffect} from 'react';
import * as S from './styles';
import {format} from 'date-fns';
import {Redirect} from 'react-router-dom';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';
import isConnected from '../../utils/isConnected';

function Task({match}){
    const [redirect, setredirect] = useState(false);
    const [type, setType] = useState();

    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();

    async function LoadTaskDetails(){

        await api.get(`/task/${match.params.id}`).then(response => {

            setType(response.data.type);
            setTitle(response.data.title);
            setDone(response.data.done);
            setDescription(response.data.description);
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
            setHour(format(new Date(response.data.when), 'HH:mm'));

        }).catch(error => {

            console.log("ERROR AO CARREGAR AS INFORMAÇOẼS: ", error);

        })

    }

    async function Save(){
        //VALIDAÇÃO DOS CAMPOS

        if(!title){
            return alert("Você precissa informar o titulo da tarefa");
        }else if(!description){
            return alert("Você percissa informar a descrição da tarefa");
        }else if(!type){
            return alert("Você precissa informar o tipo da tarefa");
        } else if(!date){
            return alert("Você precissa informar a data da tarefa");
        } else if(!hour)
            return alert("Você precissa informar a hora da tarefa");
        

        if(match.params.id){
            await api.put(`/task/${match.params.id}`,{
            macaddress: isConnected,
            done,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`

        }).then(()=> {
            setredirect(true)
        })

        }else{
            await api.post('/task', {

                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`

            }).then(() =>{

                setredirect(true);

            }).catch(() => {

                alert("Error ao cadastrar a tarefa");

            })
    }

    }

    async function Remove(){

        const res = window.confirm("Deseja realmente excuir esta mensagem");
        if(res == true){
            await api.delete(`/task/${match.params.id}`).then(() => {
                setredirect(true);
            }).catch(()=> {
                alert("Error ao apagar a tarefa tente mais tarde");
            })
        }else{
            alert("Apagar tarefa cancelada");
        }

    }

    useEffect(()=> {

        LoadTaskDetails();
        if(!isConnected){
            setredirect(true);
        }

    }, []);

    return(
        <S.Conteiner>

            {redirect && <Redirect to="/"/>}
            <Header />
            <S.Form>

                <S.TypeIcons>

                    {
                        TypeIcons.map((icon, index) =>(
                          index > 0 &&
                          <button type="button" onClick={()=> setType(index)}>
                            <img src={icon} alt="tipo do icone da terefa"
                            className={type && type != index && 'inative'}></img>
                          </button>
                        ))
                    }

                </S.TypeIcons>

                <S.Input>
                    <span>Titulo</span>
                    <input type="text" placeholder="Titulo da tarefa"
                     onChange={e => setTitle(e.target.value)} value={title}/>
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Digete os detalhes da tarefa" 
                    onChange={e => setDescription(e.target.value)} value={description}/>
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Digete a data da Tarefa"
                    onChange={e => setDate(e.target.value)} value={date}/>
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Digete o hora da Terefa"
                    onChange={e => setHour(e.target.value)} value={hour}/>
                </S.Input>


                <S.Options>
                    <div>
                        <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                        <span>CONCLUIDO</span>
                    </div>

                  { match.params.id && <button type="button" onClick={Remove}>EXCLUIR</button> }
                </S.Options>

                <S.Save>
                    <button type="button" onClick={Save}>SALVAR</button>
                </S.Save>

            </S.Form>

            <Footer />

        </S.Conteiner>
    )

}

export default Task;