import express from 'express';

const app = express();
const host = "0.0.0.0";
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, host, ()=>{
    
})