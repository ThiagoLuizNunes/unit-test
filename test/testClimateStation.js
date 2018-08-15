import chai from 'chai';
import climateStation from '../src/climateStation';

const assert = chai.assert;
const expect = chai.expect;

describe('Operações da Estação de Climatização', () => {
  it('Teste: Deve retornar um identificador', () => {
    assert.typeOf(climateStation.getID(), 'number');
  });

  it('Teste: Deve retornar uma string', () => {
    assert.equal(climateStation.relatarClima(), 'nublado');
  });

  it('Teste: Deve retornar uma string', () => {
    assert.equal(climateStation.relatarStatus(), 'vento forte');
  });

  it('Teste: Deve retornar uma string com o prefixo economizar', () => {
    assert.equal(climateStation.economizarEnergia('limitador'), 'economizar limitador');
  });

  it('Teste: Deve dizer se o retorno da função é um objeto', () => {
    assert.typeOf(climateStation.controlarRemoto('coletor','girar', 30), 'object');
  });

  it('Teste: Deve dizer se o retorno da função é igual ao objeto comparado', () => {
    expect(climateStation.controlarRemoto('coletor','girar', 30)).to.deep.equal(
      {
        type: 'coletor',
        instruction: 'girar',
        value: 30 
      }
    );
  });

  it('Teste: Deve retornar uma string com o prefixo reiniciar', () => {
    assert.equal(climateStation.reiniciar('termometro'), 'reiniciar termometro');
  });

  it('Teste: Deve retornar uma string com o prefixo desligar', () => {
    assert.equal(climateStation.desligar('captador'), 'desligar captador');
  });
});

