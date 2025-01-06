import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const host = "localhost";
const port = 8080;

app.use(express.json());

/*
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
Isso é válido para quando abrir o servidor, como iremos abrir diretamente
pelo front, o script.js irá retornar os valores do server aberto
// app.use(express.static(join(__dirname)));
*/

const anotacoes = [
    { texto: "sou uma anotacao", id: 0 },
    { text: "sou outra anotacao", id: 1 },
];


app.get("/anotacoes", (req, res) => {
    res.json(anotacoes);
});

//Rota simples
/*
app.get("/", (req, res) => { // Tentativa de colocar para abrir o index.html padrão
    // res.send("Hello World!");
    res.sendFile(join(__dirname, 'index.html'));
})
*/

app.listen(port, host, () => {
    console.log(`Servidor aberto na porta: ${port}`);
})