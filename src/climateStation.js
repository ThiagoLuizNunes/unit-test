export default { 
  getID: () => { return 123 },

  relatarClima: () => {
    return 'nublado';
  },

  relatarStatus: () => {
    return 'vento forte';
  },

  economizarEnergia: (inst) => {
    return `economizar ${inst}`;
  },

  controlarRemoto: (comandos) => {
  },

  reiniciar: (inst) => {
    return `reiniciar ${inst}`;
  },

  desligar: (inst) => {
    return `desligar ${inst}`;
  } 
};
