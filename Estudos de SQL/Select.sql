-- Destrinchando select

select * from cursos 
order by nome desc;
-- A estrutura básica do select é: você seleciona a tabela na primeira linha e na segunda você faz a request

select * from cursos
order by carga asc;
-- Nesse comando o a request foi: order by carga asc - ordernar os dado com base na carga de forma ascendente(crescente)

select nome, carga, ano from cursos
order by nome desc;
-- O desc organiza dado de formas decrescentes, como nomes são strings, essa organização será feita de Z-A

select ano, nome, carga from cursos
order by ano asc;

select ano, nome, carga from cursos
order by ano, nome;
-- Nesse caso usamos dois parâmetros para ordenação, primeiro a ordem será por ano e depois por nome 

select * from cursos
where ano = '2016'
order by nome;
-- O where faz com que seja selecionado apenas os registros onde o valor na coluna ano seja 2016, esses dados
-- serão organizado pelo nome em ordem alfabética A-Z

select nome, carga from cursos
where ano = '2016'
order by ano;

select nome, descricao, ano from cursos
where ano >= 2015
order by ano, nome;


select nome, ano from cursos
where ano between 2014 and 2016
order by ano desc, nome asc;

select nome, ano from cursos
where ano in (2014, 2016)
order by nome;

select * from cursos
where carga > 35 and totaulas < 30
order by ano, nome;

use cadastro; 

select * from cursos
where nome = 'PHP';

select * from cursos
where nome like 'a%';

select * from cursos
where nome like 'p%';

select * from cursos
where nome like '%a';

select * from cursos
where nome like '%a%';

select * from cursos
where nome not like '%A%';

select * from cursos
where nome like 'ph%p';

select * from cursos
where nome like 'ph%p%';

select * from cursos
where nome like 'ph%p%_';

select * from gafanhotos
where nome like '%silva';

select distinct nacionalidade from gafanhotos
order by nacionalidade;

select count(*) from cursos;

select count(*) from cursos
where carga > 40;

select count(*) from gafanhotos
where nacionalidade = 'Brasil'; 

select max(totaulas) from cursos 
where ano = 2016;

select nome, min(totaulas) from cursos
where ano = 2016;

select sum(totaulas) from cursos 
where ano = 2016;

select avg(totaulas) from cursos
where ano = 2016;

select avg(totaulas) from cursos;

/*
    O select é um DML, porém alguns ja o classifcam como um DQL = Data Query language, ou seja, o select
serve para fazer request e actions com os dados, seja filtros ou combinações de dados, de certa forma, o 
select serve para visualizações da informações
*/
