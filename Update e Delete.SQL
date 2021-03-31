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

update cursos
set nome = 'PHP', ano = '2015'
where idcurso=4;

update cursos
set nome = 'JAVA', carga = '40', ano = '2015'
where idcurso = '5'
limit 1;

delete from cursos
where ano = '2018'
limit 3;

select * from cursos;