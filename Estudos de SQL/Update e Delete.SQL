-- Usando os comando DML - Update e Delete

use cadastros;

create table if not exists cursos (
idcurso int not null auto_increment, 
nome varchar(30) not null unique,
descricao text,
carga int unsigned,
totaulas int,
ano year default '2016',
primary key(idcurso)
) default charset = utf8;

desc cursos;

alter table cursos
add column idcurso int first;

alter table cursos
add primary key (idcurso);

describe cursos;

insert into cursos values
(DEFAULT, 'HTML4', 'CURSO DE HTML5', '40', '37', '2014'),
(DEFAULT, 'ALGORITMOS', 'LÓGICA DE PROGRAMAÇÃO', '20', '15', '2014'),
(DEFAULT, 'PHOTOSHOP',' DICAS DE PHOTOSHOP CC','10','8', '2014'),
(DEFAULT, 'PGP', 'CURSO DE PHP PARA INICIANTES','40','20','2010'),
(DEFAULT, 'JARVA', 'INTRODUÇÃO A LINGUAGEM JAVA','10','29','2000'),
(DEFAULT, 'MYSQL', 'BANCOS DE DADOS MYSQL', '30', '15', '2016'),
(DEFAULT, 'WORD', 'CURSO COMPLETO DE WORD', '40', '30', '2016'),
(DEFAULT, 'SAPATEADO', 'DANÇAS RITMICAS', '40', '30', '2018'),
(DEFAULT, 'COZINHA ÁRABE', 'APRENDA A FAZER KIBE', '40', '30', '2018'),
(DEFAULT, 'YOUTUBER','GERAR POLEMICA E GANHAR INSCRITO','5','2','2018');


select * from cursos;

update cursos
set nome = 'HTML5'
where idcurso = 1;
-- Estrutura base do update


update cursos
set nome = 'PHP', ano = '2015'
where idcurso=4;
-- Usando update pra alterar duas colunas ao mesmo tempo


update cursos
set nome = 'JAVA', carga = '40', ano = '2015'
where idcurso = '5'
limit 1;
-- Usando update para mudar trÊs colunas ao mesmo tempo e o limit = 1 limita as alterações a apenas uma linha


delete from cursos
where ano = '2018'
limit 3;
-- Como usei um where presente em diversas linhas, usei o limit = 3 para só 3 linhas sofrerem alterações


select * from cursos;

/*
    O comando update é muito importante, é um comando de DML, você o utiliza para manipular os dados da tabela e 
não sua estrutura, por exemplo: update cursos, set nome = 'HTML5', where idcurso = 1 - esse comando sinaliza que 
há um upgdate a se fazer na tablea cursos, na coluna nome haverá uma mudança de um nome para 'HTML5' na linha com
idcurso é 1. 
    Where define o parâmetro que será o filtro de linhas para sofrer alterações, você pode associar com o "limit"
e limitar o número de linhas que sofrerão alterações.
*/