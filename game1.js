function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numberTwo = getRndInteger(0, 10);
const numberOne = process.argv[2];
const parImpart = process.argv[3];
console.log(numberTwo, numberOne);

if (!numberOne || !numberTwo || !parImpart) {
  console.log("Faltou o argumento esperado");
} else if (numberOne === numberTwo) {
  console.log("Empatou! Vamos desempatar?");
} else if (numberOne > numberTwo) {
  console.log("Dev, você ganhou! Parabéns ");
} else {
  console.log("Seu adversário foi o vencedor, não desanime! <3");
}
