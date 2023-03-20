const resultOne = process.argv[2];
const resultTwo = process.argv[3];

if (!resultOne || !resultTwo) {
  console.log(
    "Está faltando algo no seu parametro. Escolha pedra, papel ou tesoura. "
  );
} else if (resultOne === "papel" && resultTwo === "tesoura") {
  console.log(
    "Você escolheu papel e seu adversário escolheu tesoura. Você perdeu!"
  );
} else if (resultOne === "papel" && resultTwo === "pedra") {
  console.log(
    "Você escolheu papel e seu adversário escolheu pedra. Você ganhou!"
  );
} else if (resultOne === "papel" && resultTwo === "papel") {
  console.log("Você escolheu papel e seu adversário escolheu papel. Empate!");
} else if (resultOne === "tesoura" && resultTwo === "papel") {
  console.log(
    "Você escolheu tesoura e seu adversário escolheu papel. Você ganhou!"
  );
} else if (resultOne === "pedra" && resultTwo === "papel") {
  console.log(
    "Você escolheu pedra e seu adversário escolheu papel. Você ganhou!"
  );
} else if (resultOne === "papel" && resultTwo === "papel") {
  console.log("Você escolheu papel e seu adversário escolheu papel. Empate!");
} else if (resultOne === "tesoura" && resultTwo === "tesoura") {
  console.log(
    "Você escolheu tesoura e seu adversário escolheu tesoura. Empate!"
  );
} else if (resultOne === "pedra" && resultTwo === "pedra") {
  console.log("Você escolheu pedra e seu adversário escolheu pedra. Empate!");
}
