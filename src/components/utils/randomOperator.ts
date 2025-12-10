/**
 * Retorna aleatoriamente '+' o '-'
 */
export const getRandomOperator = (): "+" | "-" => {
  return Math.random() > 0.5 ? "+" : "-";
};
