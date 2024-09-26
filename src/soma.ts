
const main = ()=>{
  console.log(soma(10,10));
}

const soma = (a: number, b: number) => {
  return a + b;
};

main();

export { main, soma };