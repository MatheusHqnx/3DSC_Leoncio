const http = require('http'); // IMPORTAR HTTP
const PORT = 8000; // PORTA DO SERVIDOR

// CRIANDO O SERVIDOR
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Eu nunca passei mal bebendo leite!</h1>');
        res.end();
    } else if (req.url === '/alo') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Saiba mais...</h1>');
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>Página não encontrada</h1>');
        res.end();
    }
});

// UTILIZANDO A PORTA DO SERVIDOR
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});