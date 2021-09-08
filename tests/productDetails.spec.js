const assert = require('assert');
const { type } = require('os');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails(), 'array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails([0, 1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    /**
     * Consultado o repositório do Dávio Lopes
     * Link: https://github.com/tryber/sd-015-a-project-js-unit-tests/pull/139/files
     * 
     * Source: https://www.geeksforgeeks.org/node-js-assert-notdeepequal-function/
     */
    assert.notDeepEqual(productDetails([0]), productDetails([1]));
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails()[0].details.productId, 123);
    assert.deepStrictEqual(productDetails()[1].details.productId, 123);
  });
});
