//OPERADOR TERNÁRIO
// São usados para simplificar o processo de tomada de decisão e eventualmente, substituir o if/else.


const idade = 18;

if (idade >= 18) {
  console.log("PERMITA A ENTRADA");
} else {
  console.log("PROIBIDO PARA MENORES");
}

// COM OPERADOR TERNÁRIO

const passe = idade >= 18 ? "PERMITA A ENTRADA" : "PROIBIDO A ENTRADA"
console.log(passe)