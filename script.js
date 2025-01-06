async function init(){
    carregaAnotacoes();
}

async function carregaAnotacoes(){
    const resposta =  await fetch("http://localhost:8080/anotacoes");
    const anotacoes = await resposta.json();
    console.log(anotacoes);
}

init();