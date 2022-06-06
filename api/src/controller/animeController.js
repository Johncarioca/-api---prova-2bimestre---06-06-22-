import { consulta, inserirValor } from '../repository/animeRepository.js'

import { Router } from 'express'
const server = Router(); 


server.post('/anime' , async (req, resp) => {

    try {
        const {nome} = req.body

        const resposta = await inserirValor(nome);


        resp.send(resposta)

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

        resp.send()


    } 
    catch (err) {
        
        resp.status(406).send({

            erro: err.message
        
        })

    }
} )