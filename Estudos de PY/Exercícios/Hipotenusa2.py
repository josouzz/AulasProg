#Hipotenusa para qualquer triângulo

import math

print("Olá, eu sou uma calculadora de hipotenusa para qualquer triângulo")
co = float(input("Digite o valor do cateto oposto: "))
ca = float(input("Digite o valor do cateto adjacente: "))
angulo: float(input("digite o ângulo"))
hp = math.sqrt((co ** 2) + (ca ** 2))

print(f'A hipotenusa desse triangulo mede {hp}')
