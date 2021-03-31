/*
Criar uma base de dados de Cadastros, uma tabela relacionada a cadastros. Usar alter table para: add column,
drop column, change column e modify column
*/
create database cadastros
default character set utf8
default collate utf8_general_ci;
-- Criei a base de dados nomeada de cadastros e defini para caractéres brasileiros

use cadastros;
create table clientes(
    id int not null auto_increment,
    nome varchar(30) not null,
    nascimento date,
    sexo enum('M','F'),
    peso decimal(5,2),
    altura decimal(3,2),
    nacionalidade  varchar(15) default 'Brasil',
    primary key (id)
) default charset = utf8
/* Antes de criar o table, é preciso selecionar a database, por isso o "use cadastros"
   Dados que decidi coletar para tabela clientes: nome, nascimento, sexo, peso, altura e nacionalidade
*/

desc clientes;
-- Esse comando me mostra as colunas da minha base de dados e quais são os tipos primitivos que atribuí


insert into clientes values
(default, 'Pedro', '1997-02-31', 'M', '69', '1.65', 'Argentina'),
(default, 'Angeline', '1989-11-11', 'F', '55', '1.7', 'França'),
(default,'Carolina', '1970-01-08', 'F', '63.23', '1,65', default),
(default, 'Jorge', '1987-12-31', 'M', '89', '1.85', 'Argentina'),
(default, 'Angelica', '1970-05-11', 'F', '55', '1.6', 'EUA'),
(default,'Carol', '1970-01-08', 'F', '63.23', '1,75', default),
(default, 'Carlos', '1997-02-31', 'M', '79', '1.65', 'Argentina'),
(default, 'Angelo', '1999-11-11', 'M', '100', '2', 'Italia'),
(default,'Rosana', '1977-07-08', 'F', '63.23', '1,65', default),
(default, 'Iolanda', '1987-045-24', 'F', '69', '1.65', 'Brasil'),
(default, 'José', '1987-11-11', 'F', '55', '1.7', 'Portugal'),
(default,'Igor', '1975-01-28', 'F', '63.23', '1.75', default),
(default, 'Giuseppe', '1990-10-16', 'M', '100.00', '1.85', default),
(default, 'Carola', '1998-11-02', 'F', '67.3', '1.59', default),
(default, 'Ricardo', '1973-09-09', 'M', '86', '1.83', default);
/*
Insert into é o comando para fazer os inputs na base de dados */

select * from clientes;
-- comando para visualizar os dados da databaseos dados da tabela cliente
alter table clientes 
add column profissão varchar (10);
--Comando para alterar a tabela, aqui eu adicionei uma coluna

alter table clientess
drop column profissão;
-- Nesse alter table eu apaguei a coluna antes adicionada

alter table clientes
add column profissao varchar(15) after nome;
-- Readicionei a coluna profissão e a posicionei após a coluna nome

alter table clientes 
modify profissao varchar (20) not null default ' ';
--Modifiquei o valor da constraint varchar para 25 e defini que não podia receber valores nulos

alter table clientes 
change column profissao profissão varchar (25);
--Minha última alteração foi usando o comando change para alterar o nome da coluna

select * from clientes;
