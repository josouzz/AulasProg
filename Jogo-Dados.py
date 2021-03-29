#Jogo de dado

from random import randint  

print('Vamos jogar um jogo de dados?? faça sua aposta!')

n = int(input('Digite o numero da sua aposta(entre 2 e 12): '))

dado = randint(2, 12)

print('rolando os dados')

if n == dado:
    print('{} UAU!! VOCê GANHOU!! PARABENS!!'.format(dado))
else:
    print('{} ERROOOOOOOOOOOOOOOOOOOOOOOOOU! Você perdeu'.format(dado))
