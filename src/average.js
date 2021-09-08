/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numbers) => {
// Variável que guarda a soma de todos os números para ser usada no cálculo da média
  let sum = 0;
// For para percorrer todas as posições do array e realizar a verificação do tipo
// O For também realiza a soma total de todos os valores
  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return undefined;
    }
    sum += numbers[i];
  }
// Estrutura de condição para verificar o tamanho do array
  if (numbers.length <= 0) {
    return undefined;
  }
// Variável que guarda o valor padrã da média
  let numAverage = 0;
// Cálculo da média realizado atravéz da divisão do total pelo tamanho do array
  numAverage = sum / numbers.length;
// Estrutura que arredonda o valor da média entre os números
  let newNumAverage = Math.round(numAverage);
  return newNumAverage;
};
module.exports = average;
