'''
Programa que sorteia ordem de apresentação para
6 alunos
'''

from random import shuffle

print('Digite o nome dos 6 alunos que irão apresentar trabalhos')

a = str(input("Primeiro nome: "))
b = str(input("Segundo nome: "))
c = str(input("Terceiro nome: "))
d = str(input("Quarto nome: "))
e = str(input("Quinto nome: "))
f = str(input('sexto nome: '))

v = [a, b, c, d, e, f]
shuffle(v)

print(f'A ordem de apresentação será: ', v)
