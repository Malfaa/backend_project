async function init(){
    carregaAnotacoes();
}

const ulAnotacoes = document.querySelector("#anotacoes");
const formCriarAnotacao = document.querySelector("#criar-anotacao");


formCriarAnotacao.onsubmit = event => {
    event.preventDefaults();
    const texto = document.querySelector("#criar-anotacao"); // continuar aqui

}

async function carregaAnotacoes(){
    // const resposta =  await fetch("http://localhost:8080/anotacoes");
    const resposta = await fetch("https://expert-robot-vw45qr6pr5f6rg-8080.app.github.dev/anotacoes"); //Codespace
    const anotacoes = await resposta.json();
    const liAnotacoes = anotacoes.map(({texto, id}) => `<li class="item">${texto}</li>`);
    
    ulAnotacoes.innerHTML = liAnotacoes.join("");
    console.log("Teste LI"); //Testar conectividade com o server e a porta que abre o LiveServer
};

init();