function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numberTwo = getRndInteger(0, 10);
const parImpar = process.argv[2];
const numberOne = +process.argv[3];
const result = numberOne + numberTwo;
console.log(result, numberOne, numberTwo);

if (!numberOne || !parImpar) {
  console.log("Faltou o argumento esperado");
} else if (parImpar === "par" && result % 2 === 0) {
  console.log(
    `Você escolheu ${parImpar} e o computador escolheu impar. O resultado foi ${result}. Você ganhou!`
  );
} else if (parImpar === "impar" && !result % 2 === 0) {
  console.log(
    `Você escolheu ${parImpar} e o computador escolheu par. O resultado foi ${result}. Você perdeu!`
  );
} else if (parImpar === "par" && result % 2 === 1) {
  console.log(
    `Você escolheu ${parImpar} e o computador escolheu par. O resultado foi ${result}. Você perdeu!`
  );
}
