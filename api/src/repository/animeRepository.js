import {con} from './connection.js';

export async function InserirAnime(Anime) {
    const comando =
    `
    INSERT INTO tb_animes (nm_anime)
                 VALUES  (?)
    `

    const [resposta] = await con.query(comando, [Anime.nome]);
    Anime.id = resposta.insertId;

    return Anime;
}

export async function ListarAnimes() {
    const comando = 
    `
    SELECT id_anime    id,
    nm_anime           nome
    FROM tb_animes
    `

    const [linhas] = await con.query(comando);
    return linhas;

}