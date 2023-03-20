const nome = process.argv[2];
const idade = process.argv[3];
const children = process.argv[4];

if (!nome || !idade || !children) {
  console.log(
    "Faltou o argumento(name, idade ou quantidade de filhos) esperado"
  );
} else {
  const newUser = {
    nome,
    idade,
    children,
  };

  console.log(
    `Olá, ${nome}! você tem ${idade} anos. Em sete anos você terá ${
      +idade + 7
    }. A sua quantidade de filhos hoje é: ${children}`
  );
}

// console.log("Olá, o arquivo foi iniciado corretamente!");
