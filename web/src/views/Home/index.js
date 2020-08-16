import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
//useState = para guardar o estado de uma variavel =>
//o estado notificar todos os elementos da pagina quando estado muda
//useEffect = para toda vez que a tela recarregar chamar uma função
//importar o arquivo de estilização
import * as S from './styles'
//MEUS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

function Home() {
  //nome do estado  funcao que atualizar estado
  const [filterActived, setFilterActived] = useState('all');
  //nome do estado  funcao que atualizar estado
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadTask(){

    api.get(`task/filter/${filterActived}/${isConnected}`).then(response => {

        setTasks(response.data);
        //console.log(response.data);

    }).catch(error => {

        console.log("ERROR: ", error);

    })

  }

  

  function Notification(){

    setFilterActived('late');

  }

  useEffect(()=> {

    loadTask();
    
    if(!isConnected){
      setRedirect(true);
    }

  }, [filterActived]);

  return (
    <S.Conteiner>
      {redirect && <Redirect to="/qrcode"/>}
        <Header  clickNotication={Notification}/>
        <S.FilterArea>

          <button type="button"  onClick={()=> setFilterActived("all")}>
              <FilterCard title="Todos" actived={filterActived == 'all'}/>
          </button>

          <button type="button" onClick={()=> setFilterActived("today")}>
              <FilterCard title="Hoje" actived={filterActived == 'today'}/>
          </button>

          <button type="button"  onClick={()=> setFilterActived("week")}>
              <FilterCard title="Semana" actived={filterActived == 'week'}/>
          </button>

          <button type="button"  onClick={()=> setFilterActived("month")}>
              <FilterCard title="Mês" actived={filterActived == 'month'}/>
          </button>

          <button type="button"  onClick={()=> setFilterActived("year")}>
              <FilterCard title="Ano" actived={filterActived == 'year'}/>
          </button>

        </S.FilterArea>

        <S.Title>
            <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
        </S.Title>

        <S.Content>

        {
            tasks.map(t => (
              <Link to={`/task/${t._id}`}>
                  <TaskCard type={t.type} title={t.title} when={t.when} done={t.done}/>
              </Link>
            ))
        }

        </S.Content>
      
        <Footer/>

    </S.Conteiner>
  )
}

export default Home;
