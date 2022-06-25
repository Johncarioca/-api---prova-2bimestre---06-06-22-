import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function CadastrarAnime(nome) {
const resposta = await api.post('/anime', {
    nome:nome
})
  return resposta.data;  
}


export async function ConsultarAnime() {
    const resposta = await api.get('/animes')
    return resposta.data;
}