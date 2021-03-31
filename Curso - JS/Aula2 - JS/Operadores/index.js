

/**
 * OPERADORES MATEMÁTICOS:
 * ADIÇÃO: +
 * SUBTRAÇÃO: -
 * MULTIPLICAÇÃO: *
 * DIVISÃO: /
 * 
 * EXPONENCIAÇÃO: Math.pow(a, b)
 * RADICIAÇÃO: Math.sqrt(a)
 * RADICIAÇÃO enésima: Math.pow(n, 1/root);
 */


 const a = 10 + 20; // 30
 const b = 30 - 10; // 20
 
 const c = 2 * 4; // 8
 const d = 10 / 5; // 2
 
 const e = Math.pow(2, 8); // 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 - > 256
 const f = Math.sqrt(25); // 5
 
 // { a + [b - c * (a - d)]}
 
 const g = (a + b * (a + -c)) / 10;
 
 let x = 10;
 // x = x + 5;
 x += 5;
 // console.log(x);
 
 // x += 5 + 5 * 10;
 // x -= 5 + 5 * 10;
 // x *= 5 + 5 * 10;
 // x /= 5 + 5 * 10;
 // console.log(x);