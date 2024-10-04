// while é um loop sem pausas 
// setInterval é um loop com pausas


/*let n = 0;
  while(n <= 5)  {
      console.log(n)
    n = n + 1;


}

setInterval(function(){
  console.log(n)
  n = n + 1;
}, 1000)

*/ 

let fps = 0;

setInterval(function() {
    // Gera um número aleatório entre 30 e 60
    fps = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
    console.clear();
    console.log(`FPS: ${fps}`);
}, 1000);