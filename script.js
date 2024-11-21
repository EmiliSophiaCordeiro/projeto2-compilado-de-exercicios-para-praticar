// 1. Faça um Programa que mostre a mensagem "Olá mundo" na tela.
console.log('Olá mundo');

// 2. Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
let numero = parseInt(prompt('Digite um número:'));
console.log('O número informado foi ' + numero + '.');

// 3. Faça um Programa que peça dois números e imprima a soma.
let num1 = parseInt(prompt('Digite o primeiro número:'));
let num2 = parseInt(prompt('Digite o segundo número:'));
let soma = num1 + num2;
console.log('Resultado: ' + num1 + ' + ' + num2 + ' = ' + soma);

// 4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let notaPrimeiroBimestre = parseFloat(prompt('Digite sua nota do primeiro bimestre:'));
let notaSegundoBimestre = parseFloat(prompt('Digite sua nota do segundo bimestre:'));
let notaTerceiroBimestre = parseFloat(prompt('Digite sua nota do terceiro bimestre:'));
let notaQuartoBimestre = parseFloat(prompt('Digite sua nota do quarto bimestre:'));
let media = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;
console.log('Sua média total é: ' + media);

// 5. Faça um Programa que converta metros para centímetros.
let metros = parseFloat(prompt('Digite o valor de metros que quer converter em centímetros:'));
let centimetros = metros * 100;
console.log('O valor de ' + metros + ' metros em centímetros é: ' + centimetros);

// 6. Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
let raioDoCirculo = parseFloat(prompt('Digite o raio do círculo:'));
let areaDoCirculo = 3.14 * (raioDoCirculo * raioDoCirculo);
console.log('A área do círculo é: ' + areaDoCirculo);

// 7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
let ladoDoQuadrado = parseFloat(prompt('Digite o valor do lado do quadrado:'));
let areaDoQuadrado = ladoDoQuadrado * ladoDoQuadrado;
console.log('O dobro da área do quadrado é: ' + (areaDoQuadrado * 2));

// 8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let salarioPorHora = parseFloat(prompt('Digite o valor que você recebe por hora:'));
let horasTrabalhadas = parseFloat(prompt('Digite o número de horas trabalhadas no mês:'));
let salarioPorMes = salarioPorHora * horasTrabalhadas;
console.log('O seu salário no mês é: R$ ' + salarioPorMes);

// 9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F - 32) / 9).
let temperaturaFahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit:'));
let temperaturaCelcius = 5 * ((temperaturaFahrenheit - 32) / 9);
console.log('A temperatura em Celsius é: ' + temperaturaCelcius);

// 10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
let temperaturaCelcius2 = parseFloat(prompt('Digite a temperatura em Celsius:'));
let temperaturaFahrenheit2 = temperaturaCelcius2 * 1.8 + 32;
console.log('A temperatura em Fahrenheit é: ' + temperaturaFahrenheit2);

// 11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// o produto do dobro do primeiro com metade do segundo.
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.
let numeroInteiro1 = parseInt(prompt('Digite um número inteiro:'));
let numeroInteiro2 = parseInt(prompt('Digite outro número inteiro:'));
let numeroReal = parseFloat(prompt('Digite um número real:'));
let calculo1 = (numeroInteiro1 * 2) * (numeroInteiro2 / 2);
let calculo2 = (numeroInteiro1 * 3) + numeroReal;
let calculo3 = numeroReal * numeroReal * numeroReal;
console.log(`Resultados:
Produto do dobro do primeiro com metade do segundo: ${calculo1}
Soma do triplo do primeiro com o terceiro: ${calculo2}
O terceiro elevado ao cubo: ${calculo3}`);

// 12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7 * altura) - 58
let altura = parseFloat(prompt('Digite a sua altura:'));
let pesoIdeal = (72.7 * altura) - 58;
console.log('Seu peso ideal é: ' + pesoIdeal);

// 13. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7 * h) - 58
// Para mulheres: (62.1 * h) - 44.7
let altura2 = parseFloat(prompt('Digite a sua altura:'));
let pesoIdealHomem = (72.7 * altura2) - 58;
let pesoIdealMulher = (62.1 * altura2) - 44.7;
console.log('Seu peso ideal é: ' + pesoIdealHomem + ' se for homem e ' + pesoIdealMulher + ' se for mulher');

// 14. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos), deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
let pesoDoPeixe = parseFloat(prompt('Digite o peso do peixe:'));
let excesso = pesoDoPeixe - 50;
let multa = excesso * 4;
if (excesso > 0) {
  console.log('O excesso foi de ' + excesso + 'kg' + '\n' + 'A multa foi de R$ ' + multa);
} else {
  console.log('Não houve excesso de peso.');
}

// 15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// salário bruto.
// quanto pagou ao INSS.
// quanto pagou para o sindicato.
// INSS (8%) : R$
// Sindicato (5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.
let salarioPorHora2 = parseFloat(prompt('Digite o valor que você recebe por hora:'));
let horasTrabalhadas2 = parseFloat(prompt('Digite o número de horas trabalhadas no mês:'));
let salarioBruto = salarioPorHora2 * horasTrabalhadas2;
let inss = salarioBruto * 0.08;
let sindicato = salarioBruto * 0.05;
let salarioLiquido = salarioBruto - (inss + sindicato);
console.log(`Seu salário bruto será: R$ ${salarioBruto}
O valor pago ao INSS será: R$ ${inss}
O valor pago ao sindicato será: R$ ${sindicato}
O seu salário líquido será: R$ ${salarioLiquido}`);
