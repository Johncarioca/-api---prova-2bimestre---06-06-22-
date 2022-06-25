import { InserirAnime, ListarAnimes }  from '../repository/animeRepository.js'

import { Router } from "express";
const server = Router();


server.post('/anime' , async (req,resp) =>{
    try {
        const anime = req.body;
        const colocaranime = await InserirAnime(anime)
        resp.send(colocaranime)
    } catch (err) {
       resp.status(400).send({
           erro:err.message
       }) 
    }
})

server.get('/anime' , async (req, resp) => {
    try {
        const resposta = await ListarAnimes();
        resp.send(resposta)
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;