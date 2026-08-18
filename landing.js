// 1.selecionar os elementos importantes(botao, msg)
// 2.verificar se o app pode ser instalado
// 3.adicionar o evento de instalação
// 4.verificar se a instalaçao deu certo

// 1
const botaoInstalar = document.getElementById("install-button");
const msgInstalar = document.getElementById("install-message");

let eventoInstalacao = null;

// 2. o navegador dispara um evento automatic. se detectar que o app é instalavel
// p vereficar se foi
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    // guardar o evento de instalação p user dps:
    eventoInstalacao = event;
    //fazer o botao aparecer
    botaoInstalar.hidden = false;
    //mudar a msg
    msgInstalar.textContent = "Essa aplicação pode ser instalada";
});

//3 fazer o botão de instalar funcionar
botaoInstalar.addEventListener("click", ()=>{
    if(!eventoInstalacao){
        //se n existe o evento de instalar ele n instala
        return;
    }    
    //o comando de aparecer instalar é:
    eventoInstalacao.prompt();

    //dps de instalar, o botao some
    botaoInstalar.hidden = true;
});

//4.se funcionou a instalaçao, o navegador dispara o evento app installed
window.addEventListener("appinstalled", ()=>{
    msgInstalar.textContent = "O app foi instalado com sucesso, você já pode abrir o app"

    botaoInstalar.hidden = true;
    eventoInstalacao = null;
})