"""
Sabendo que uma marca de tinta pinta 2m quadrodo por l,
faça um programa que calcula quantos litros de tinta são
necessários para pintar uma parede qualquer.
"""

L = float(input('insira a largura da parede em metros: '))
a = float(input('insira a altura da parede em metros:'))
A = L * a
T = A/2

print('Você utilizará {}l de tinta para pintar essa parede'.format(T))
