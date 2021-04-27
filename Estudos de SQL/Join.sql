use cadastro;

desc gafanhotos;

alter tables gafanhotos
add column cursopreferido int;

alter table gafanhotos
add foreign key(cursopreferido)
references cursos(idcurso);

update gafanhotos 
set cursoprefiro = '6'
where id = '1';

select * from gafanhotos;

delete from cursos 
where idcurso = '6';

delete from cursos
where idcurso = '28';

select * from cursos;

select gafanhotos.nome, gafanhotos.cursopreferido, cursos.nome, cursos.ano
from gafanhotos join cursos
on cursos.idcursos = gafanhotos.cursopreferido;

select g.nome, c.nome, c.ano
from gafanhotos as g inner join cursos as cursos
on c.idcurso = g.cursopreferido
order by g.nome;

select g.nome, c.nome, c.ano
from gafanhotos as g left outer join cursos as c
on c.idcurso = g.cursopreferido
order by g.nome;

select g.nome, c.nome, c.ano
from gafanhotos as g right join cursos as c 
on c.idcurso = g.cursopreferido
order by c.nome;