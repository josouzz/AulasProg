"""
Programa que calcula reajuste salarial
"""

n = float(input("Qual o salário do funcionário? $ "))
r = float(input("digite o reajuste em porcentagem: "))

a = n * (1+(r/100))

print('Com o reajuste de {:.2f}%, o salário do funcionário passa ser: $ {:.2f}'.format(r,a))
