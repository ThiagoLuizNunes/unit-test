export default { 
  getID: () => { return 123 },

  relatarClima: () => {
    return 'nublado';
  },

  relatarStatus: () => {
    return 'vento forte';
  },

  economizarEnergia: (type) => {
    return `economizar ${type}`;
  },

  controlarRemoto: (type, instruction, value) => {
    return {
      type: type,
      instruction: instruction,
      value: value
    };
  },

  reiniciar: (type) => {
    return `reiniciar ${type}`;
  },

  desligar: (type) => {
    return `desligar ${type}`;
  } 
};
