import { con } from './connection.js'

export function inserirValor(nome){

    const comando = 

    `
    INSERT INTO tb_anime (nm_anime)
     VALUES (?);
    `
    const resposta = await con.query(comando [nome.anime]);
    nome.anime = resposta
    return resposta;
}

export function consulta( anime){

    const comando = 

    `
        SELECT id_anime			id,
	         nm_anime			nome
      
        FROM tb_anime;
    `
    const [linhas] = await con.query(comando);
    return linhas;
}
