/* Funções para tratar as cores que são usadas nas 
tags de relação entre falas */
export const setColor = (estilo) => {
  if (estilo === 'negativo') {
    return 'volcano';
  }
  if (estilo === 'neutro') {
    return 'cyan';
  }
  if (estilo === 'aviso') {
    return 'purple';
  }
  if (estilo === 'positivo') {
    return 'green';
  }
  return 'blue';
};
