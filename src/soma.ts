
const main = ()=>{
  console.log(soma(10,10));
}

const soma = (a: number, b: number) => {
  return a + b;
};

const subtrai = (a: number, b: number) => {
  return a - b;
};

const divide = (a: number, b: number) => {
  return a / b;
};

const multiplica = (a: number, b: number) => {
  return a * b;
};

const resto = (a: number, b: number) => {
  return a % b;
};

main();

export { main, soma, subtrai, divide, multiplica, resto};