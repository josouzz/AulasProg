/*
ALTER TABLE E DROP TABLE

Criar uma tabela, adicionar uma primary key por alter table
excluir a tabela usando o comando drop table
*/


use cadastros;

create table if not exists cursos (
    nome varchar(30) not null unique;
    descrição text,
    carga int unsigned,
    totaulas int,
    ano year default '2016'
    ) defaul charset = utf8;
-- Criei uma tabela de cursos, as variáveis, são: nome, carga horária, total de aulas, ano do curso.

    desc cursos;

    alter table cursos
    add column idcurso int first;
-- adicionei a coluna idcurso(identificação numérica) para depois definir como chave primária

    alter table cursos 
    add primary key (idcurso);
-- Definindo a coluna idcurso como primary key

    insert into cursos values 
       ( '0', 'informática', 'curso de informatica básico', '60', '20', default),
       ('1','Manicure', 'curso de tintura de unhas', '15', '3', '2018'),
       ('2','Excel', 'curso focado em funções de excel', '45', '10', default );

       select * from cursos;

       drop table cursos;
-- Uso do comando drop table para apagar essa tabela de cursos.