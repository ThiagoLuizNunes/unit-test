import chai from 'chai';
import climateStation from '../src/climateStation';

const assert = chai.assert;

describe('TDD de Operações da Estação de Clima', () => {
  it('Teste: Deve retornar uma identificador', () => {
    assert.equal(typeof climateStation.getID(), 'number');
  });

  it('Teste: Deve retornar uma string', () => {
    assert.equal(climateStation.relatarClima(), 'nublado');
  });
  it('Teste: Deve retornar uma string', () => {
    assert.equal(climateStation.relatarStatus(), 'vento forte');
  });

  it('Teste: Deve retornar uma frase com o prefixo economizar', () => {
    assert.equal(climateStation.economizarEnergia('limitador'), 'economizar limitador');
  });

  it('Teste: Deve retornar uma frase com o prefixo reiniciar', () => {
    assert.equal(climateStation.reiniciar('termometro'), 'reiniciar termometro');
  });

  it('Teste: Deve retornar uma frase com o prefixo desligar', () => {
    assert.equal(climateStation.desligar('captador'), 'desligar captador');
  });
});

