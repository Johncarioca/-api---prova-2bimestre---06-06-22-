import { CadastrarAnime } from '../../api/anime'

import './index.scss'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'


export default function Index () {
  const [nome, SetNome] = useState('');
  const [id, SetId] = useState();


    const {IdParam} = useParams();


 async function SalvarClick() {
     try {
             const novoPedido= await CadastrarAnime(nome);
             
             SetId(novoPedido);
             alert('sucesso');
     } catch (err) {
         toast.error(err.response.data.erro);
     }
     
 }
 
 return(
     <main className='pai'>
      
        <h1 className='bemvindo'> Olá, Bem vindo </h1>
        <p className='nome'> escreva um nome de anime desejado</p>

        <input type='text' className='escreve' value={nome} onChange={e => SetNome(e.target.value)} />
        
        <div className='botao'>

            <button onClick={SalvarClick}> Salvar </button>

        </div>

        <a href='/anime'>
            <button>Consuta de animes</button>
        </a>

     </main>
 );
 

}

