import { consulta, inserirValor } from '../repository/animeRepository.js'

import { Router } from 'express'
const server = Router(); 


server.post('/anime' , async (req, resp) => {

    try {

        const {name} = req.body;
        if(!name.nome){   throw new Error(' Nome do filme é obrigatório! ')}; 
        
        const resposta = await inserirValor(name)


        resp.send(resposta);

    } 
    catch (err) {
        
        resp.status(406).send({

            erro: err.message
        })
    }
} )

server.get('/anime' , async (req, resp) => {

    try {
        const {anime} = req.params

        const reposta = await consulta(anime);

        resp.send(reposta)
    } 
    catch (err) {
        
        resp.status(406).send({
            erro: err.message
        })
    }
} )