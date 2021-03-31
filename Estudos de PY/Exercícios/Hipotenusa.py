"""
Calculadora de Hipotenusa
"""
import math

print("Olá, eu sou uma calculadora de hipotenusa para triângulos retângulos")
co = float(input("Digite o valor do cateto oposto: "))
ca = float(input("Digite o valor do cateto adjacente: "))
hp = math.sqrt((co ** 2) + (ca ** 2))

print(f'A hipotenusa desse triangulo mede {hp}')
