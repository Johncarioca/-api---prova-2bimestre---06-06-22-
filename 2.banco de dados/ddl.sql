create table tb_animes (
    id_animes        int primary key auto_increment,
    id_anime        int,
    nm_anime        varchar(200),
    FOREIGN KEY (id_anime) REFERENCES tb_anime (id_anime)

);


select * from tb_animes;


INSERT INTO tb_animes (id_anime, nm_anime)
            VALUES (3, 'digimon');