import express from 'express';
import path from 'path';

const app = express();
const host = "localhost";
const port = 8080;

//Rota simples
app.get("/", (req, res) => { // Tentativa de colocar para abrir o index.html padrão
    // res.send("Hello World!");
    const filePath = path.join(__dirname,'pages', "index.html");
    res.sendFile(filePath);
})




app.listen(port, host, ()=>{
    console.log(`Servidor aberto na porta: ${port}`);
})