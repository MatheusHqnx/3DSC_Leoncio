     const pessoa = [
         { nome: "Henrique", sexo: "M" },
         { nome: "Lorenzo", sexo: "M" },
         { nome: "Laura", sexo: "F" },
         { nome: "Yasmin", sexo: "F" },
         { nome: "Matheus", sexo: "M" }
     ];

     const meninas = [];
     const meninos = [];

     function filtroPessoas(arrPessoas) {
         if (typeof arrPessoas === "object") {
             for (const pessoa of arrPessoas) {
                 pessoa.sexo === "F" ? meninas.push(pessoa) : meninos.push(pessoa);
             }
         } else {
             console.error(arrPessoas);
         }
     }

     filtroPessoas(pessoa);

     console.log(" --- Meninas ---");
     console.log(meninas);
     console.log(" --- Meninos ---");
     console.log(meninos);