//ARRAY -> ESTRUTURA DE DADOS INEXADA
// (), [], {}
//SÃO ITERAVEIS OU SEJA, PODEM SER PERCORRIDOS ATE SEU LIMITE
//LOOPS / CICLOS E REPETIÇÃO -> FOR, FOR IN, FOR OF, FOREACH
//FOR > INICIALIZAÇÃO, CONDIÇÃO, INCREMENTO (PASSO OU STEP)

// ARRAYS SÃO UM TIPO DE OBJETO
const pokemonList = ['Pikachu', 'Charizard', 'Bulbassauro', 'Squirtle'];
//
console.log(pokemonList[3])//SQUIRTLE
for (let i = 0; i < pokemonList.length; i++) {
  console.log(pokemonList[i])
}

for(let pokemon in pokemonList) {
  console.log(pokemonList[pokemon])
}
for(let pokemon of pokemonList) {
  console.log(pokemon)
}
