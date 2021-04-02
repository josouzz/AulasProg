-- Lista de exercícios select - database pessoas
-- 1) Uma lista com o nome de todos as pessoas do sexo F.

select nome from pessoas
where sexo = 'F';

-- 2) Uma lista com os dados de todos aqueles que nasceram entre 1/Jan/2000 e 31/Dez/2015.

select * from pessoas
where nascimento between '2000-01-01' and '2015-12-31';

-- 3) Uma lista com o nome de todos os homens que trabalham como programadores.

select * from pessoas
where sexo = 'M' and profissao = 'Programador';

-- 4) Uma lista com os dados de todas as mulheres que nasceram no Brasil e que têm seu nome iniciando com a letra J.

select * from pessoas
where sexo = 'F' and nacionalidade = 'Brasil' and nome like 'j%';

-- 5) Uma lista com o nome e nacionalidade de todos os homens que têm Silva no nome, não nasceram no Brasil e pesam menos de 100 Kg.

select nome, nacionalidade from pessoas
where sexo = 'M' and nome like '%silva%' and peso < 100 and nacionalidade <> 'brasil';

-- 6) Qual é a maior altura entre Homens que moram no Brasil?

select max(altura), nome from pessoas
where sexo = 'M';

-- 7) Qual é a média de peso das pessoas cadastradas?

select avg(peso) from pessoas;

-- 8) Qual é o menor peso entre Mulheres que nasceram fora do Brasil e entre 01/Jan/1990 e 31/Dez/2000?

select min(peso) from pessoas
where sexo = 'F' and nacionalidade <> 'Brasil' and nascimento between '1990-01-01' and '2000-12-30';


-- 9) Quantas Mulheres tem mais de 1.90cm de altura?

select count(nome) from pessoas
where sexo = 'F' and altura > 1.90;
