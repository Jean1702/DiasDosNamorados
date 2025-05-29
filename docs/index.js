document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("botao");
    const cancelar = document.getElementById("cancelar");
    const mensagemaleatoria = document.getElementById("mensagemaleatoria");
    const stylesheet = document.styleSheets[0]
    

});

document.body.addEventListener("click", function(){
    let mensagemaleatoria = document.getElementById("mensage");
    if(mensagemaleatoria.style.display === "flex"){
        sumir();
    }else{
    }
})

function criarcoracoes(tipo, tempo){
    let tamanhodoelemento = document.getElementById("mensage").offsetWidth;
    let quantidade = tamanhodoelemento/16.5;
    document.getElementById(tipo).innerHTML = "";
    
    let posicaodoelemento = document.getElementById("mensage").getBoundingClientRect();
    let qualposicao;
    if(tipo === "corasub"){
        qualposicao = posicaodoelemento.bottom
    }else{
        qualposicao = posicaodoelemento.top
    }
    for(let i = 0; i < quantidade; i++){
        let corazione = document.createElement("span");
        corazione.innerHTML = "❤";
        document.getElementById(`${tipo}`).style.top = qualposicao+'px';
        document.getElementById(`${tipo}`).appendChild(corazione);
        corazione.className = `${tipo}`;
        corazione.style.setProperty("--tempo", `${(Math.random() * tempo + tempo).toFixed(2)}s`);
    }
}

function animacorao(qual,tipo){
    let elemento = document.getElementById("mensage");
    let alturaElemento = elemento.offsetHeight; 

    const styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
    const stylesheet = styleTag.sheet;

    if(qual === "animarcorasub"){
        stylesheet.insertRule(`
            @keyframes ${qual} {
                0% { transform: translateY(0) scale(0.4); }
                100% { transform: translateY(-${alturaElemento+5}px) scale(0.9); } 
            }
        `, stylesheet.cssRules.length);
    } else {
        stylesheet.insertRule(`
            @keyframes ${qual} {
                0% { transform: translateY(0) scale(0.9); }
                100% { transform: translateY(${alturaElemento}px) scale(0.4); } 
            }
        `, stylesheet.cssRules.length);
    }

    let coracoes = document.querySelectorAll(`.${tipo}`);
    coracoes.forEach(coracao => {
        coracao.style.animation = `${qual} var(--tempo) forwards`;
    });
}

function sumircoracao(tempo, tipo){
    setTimeout(function(){
        let coracoes = document.querySelectorAll(`.${tipo}`).forEach(coracao => coracao.remove());
    }, tempo);
}

function mensagensdobotao(){
    let mensagensbotao = [
        "De novo? ",
        "Mais uma vez?",
        "Amo você ♥",
        "Eu te amo ♥",
        "Cotinuar? ♥",
        "Continuar ♥"
    ];

    return botao.innerHTML = mensagensbotao[Math.floor(Math.random() * mensagensbotao.length)];
}

let mensagens = [
        `"Eu te amo"`,
        `"Eu quero sempre estar com você"`,
        `"Eu tenho muito orgulho de ti"`,
        `"Eu amo seu sorriso"`,
        `"Seus olhos me guiam nessa escuridão"`,
        `"Eu quero me enrolar nesses seus cachos"`,
        `"Eu vou te amar para todo sempre"`,
        `"Você é a pessoa mais lindinha de todo mundo"`,
        `"Você é minha lua cheia, pois me guia dentro da escuridão"`,
        `"Você sempre será minha princesinha"`,
        `"Eu quero assistir todas as corridas de f1 ao seu lado"`,
        `"Eu amo sua pintinha"`,
        `"Eu quero ser somente seu"`,
        `"Você é muito importante pra mim, meu bem"`,
        `"A cada dia eu percebo que te amo mais e mais"`,
        `"Juro de beijinho"`,
        `"R U MINE?"`,
        `"Eu vou casar com VOCÊ"`,
        `"Tô com muitas saudades de ti, minha rainha"`,
        `"Quero ser autista com você"`,
        `"Eu irei dar meus últimos suspiros ao seu lado"`,
        `"Você é minha razão"`,
        `"Te contar um segredo, eu sou caidinho por ti"`,
        `"Eu amo te ouvir"`,
        `"Eu amo seu narizinho, muito fofinho..."`,
        `"Pois é só no brilho dos teus olhos, onde eu me encontro"`,
        `"O seu abraço é o meu refúgio"`,
        `"Assim como a gente era criança, eu prometo te irritar muito"`,
        `"Eu amo cada lado seu..."`,
        `"Se um dia eu morrer, eu irei morrer feliz pois eu conseguir te amar"`,
        `"Vou te encher de beijinhos minha vida toda"`,
        `"Você brilha mais que a lua em noites de lua cheia"`,
        `"Vou sempre te encher o saco"`,
        `"Sempre que eu te olho, meus olhos brilham como na primeira vez"`,
        `"Você está em todos os meus pensamentos"`,
        `"Você causa disritmia no meu coração"`,
        `"Meu amor, você é incrível"`,
        `"Meu bem, você é fabulosa"`,
        `"Por você eu largo tudo"`,
        `"Você é minha gatinha...comunista"`,
        `"Você alivia minhas dores, meu anjo"`,
        `"Eu quero fazer tudo com você"`,
        `"Eu vou te amar até depois que o tempo não existir mais"`,
        `"Apesar de saber muito sobre agro, eu quero ser seu cowboy"`,
        `"Eu adoro conversar com você"`,
        `"Eu quero conhecer o mundo contigo"`,
        `"Vou te carregar no colo a minha vida toda, pois você é um neném"`,
        `"Assim como o sol espera a lua, eu te espero o tempo que for necessário"`,
        `"Somos o melhor casal de todo o mundo"`,
        `"Eu sou fanático em ti"`,
        `"Você me tira as palavras toda vez que me olha"`,
        `"Você é a mulher da minha vida"`,
        `"Não consigo me ver sem você"`,
    ];

function mensagensaleatorias(){
    if(mensagens.length === 0){
        mensagens = [
            `"Eu te amo"`,
            `"Eu quero sempre estar com você"`,
            `"Eu tenho muito orgulho de ti"`,
            `"Eu amo seu sorriso"`,
            `"Seus olhos me guiam nessa escuridão"`,
            `"Eu quero me enrolar nesses seus cachos"`,
            `"Eu vou te amar para todo sempre"`,
            `"Você é a pessoa mais lindinha de todo mundo"`,
            `"Você é minha lua cheia, pois me guia dentro da escuridão"`,
            `"Você sempre será minha princesinha"`,
            `"Eu quero assistir todas as corridas de f1 ao seu lado"`,
            `"Eu amo sua pintinha"`,
            `"Eu quero ser somente seu"`,
            `"Você é muito importante pra mim, meu bem"`,
            `"A cada dia eu percebo que te amo mais e mais"`,
            `"Juro de beijinho"`,
            `"R U MINE?"`,
            `"Eu vou casar com VOCÊ"`,
            `"Tô com muitas saudades de ti, minha rainha"`,
            `"Quero ser autista com você"`,
            `"Eu irei dar meus últimos suspiros ao seu lado"`,
            `"Você é minha razão"`,
            `"Te contar um segredo, eu sou caidinho por ti"`,
            `"Eu amo te ouvir"`,
            `"Eu amo seu narizinho, muito fofinho..."`,
            `"Pois é só no brilho dos teus olhos, onde eu me encontro"`,
            `"O seu abraço é o meu refúgio"`,
            `"Assim como a gente era criança, eu prometo te irritar muito"`,
            `"Eu amo cada lado seu..."`,
            `"Se um dia eu morrer, eu irei morrer feliz pois eu conseguir te amar"`,
            `"Vou te encher de beijinhos minha vida toda"`,
            `"Você brilha mais que a lua em noites de lua cheia"`,
            `"Vou sempre te encher o saco"`,
            `"Sempre que eu te olho, meus olhos brilham como na primeira vez"`,
            `"Você está em todos os meus pensamentos"`,
            `"Você causa disritmia no meu coração"`,
            `"Meu amor, você é incrível"`,
            `"Meu bem, você é fabulosa"`,
            `"Por você eu largo tudo"`,
            `"Você é minha gatinha...comunista"`,
            `"Você alivia minhas dores, meu anjo"`,
            `"Eu quero fazer tudo com você"`,
            `"Eu vou te amar até depois que o tempo não existir mais"`,
            `"Apesar de saber muito sobre agro, eu quero ser seu cowboy"`,
            `"Eu adoro conversar com você"`,
            `"Eu quero conhecer o mundo contigo"`,
            `"Vou te carregar no colo a minha vida toda, pois você é um neném"`,
            `"Assim como o sol espera a lua, eu te espero o tempo que for necessário"`,
            `"Somos o melhor casal de todo o mundo"`,
            `"Eu sou fanático em ti"`,
            `"Você me tira as palavras toda vez que me olha"`,
            `"Você é a mulher da minha vida"`,
            `"Não consigo me ver sem você"`,
        ];
    }
    
   let indicealeatori = Math.floor(Math.random() * mensagens.length);
   let novamensagem = mensagens.splice(indicealeatori, 1)[0];
   const mensagemaleatoria = document.getElementById("mensagemaleatoria");

   return (
        mensagemaleatoria.innerHTML = novamensagem
   );
}

let lastIndex = -1;

function imagemaleatoria(){
    let colecao = [
        "imgs/uva.jpg",
        "imgs/uva2.jpg",
        "imgs/uva3.jpg",
        "imgs/uva4.jpg",
        "imgs/uva5.jpg",
        "imgs/uva6.jpg",
        "imgs/uva7.jpg",
        "imgs/uva8.jpg",
        "imgs/uva9.jpg",
        "imgs/uva10.jpg",
        "imgs/uva11.jpg",
        "imgs/uva12.jpg",
        "imgs/uva13.jpg",
        "imgs/uva14.jpg",
        "imgs/uva15.jpg",
        "imgs/uva16.jpeg",
        "imgs/uva17.jpg",
        "imgs/uva18.jpg",
        "imgs/uva19.jpg",
        "imgs/uva20.jpg",
        "imgs/uva21.jpg",
        "imgs/uva22.jpg",
        "imgs/uva23.jpg",
        "imgs/uva24.jpg",
        "imgs/uva25.jpg",
        "imgs/uva26.jpg",
        "imgs/uva27.jpg",
        "imgs/uva28.jpg",
        "imgs/uva29.jpg",
        "imgs/uva30.jpeg",
        "imgs/uva31.jpg",
        "imgs/uva32.jpg",
        "imgs/uva33.jpg",
        "imgs/uva34.jpg",
        "imgs/uva35.jpg",
        "imgs/uva36.jpg",
        "imgs/uva37.jpg",
        "imgs/uva38.jpg",
        "imgs/uva39.png",
        "imgs/uva40.jpeg",
        "imgs/uva41.jpg",
        "imgs/uva42.jpg",
        "imgs/uva43.gif"
    ]

    let index;
    if (colecao.length > 1) {
        do {
            index = Math.floor(Math.random() * colecao.length);
        } while (index === lastIndex);
    } else {
        index = 0;
    }

    lastIndex = index;

    const imagem = document.getElementById("imagemaletoria");
    imagem.src = colecao[index];
    
}

function butone(){
    let element = document.getElementById("mensage");
    element.style.animation = `abrir 0.5s forwards`;

    element.addEventListener("animationend", function handler(){
        element.removeEventListener("animationend", handler);
        
        criarcoracoes("corasub", 1);
        animacorao("animarcorasub", "corasub");
        sumircoracao(1200, "corasub");
    });
}

function musicaalet(){
    
    let musicaalet = [
        "audio/Lonely Day78.mp3",
        "audio/Aliança30.mp3",
        "audio/Aquela Saudade104.mp3",
        "audio/Disritmia14.mp3",
        "audio/Exagerado30.mp3",
        "audio/GatinhaComunista 40.mp3",
        "audio/Gaucha 61.mp3",
        "audio/MaisNinguém7.mp3",
        "audio/Melô do Amor 67.mp3",
        "audio/MeNamora77.mp3",
        "audio/O Grilo27.mp3",
        "audio/OndaandaVoce21.mp3",
        "audio/Palavras no Corpo63.mp3",
        "audio/QuemDera70.mp3",
        "audio/R U Mine 25.mp3",
        "audio/Tiroalvóro03.mp3",
        "audio/VelhaInfancia 17.mp3",
        "audio/Mr Loverman1.mp3",
        "audio/Hey Lover1.mp3",
        "audio/i love you baby 94.mp3"
    ]
    let segundos = [78, 30, 104, 14, 30, 40, 61, 7, 67, 77, 27, 21, 63,70, 25, 3, 17, 1, 1, 94]
    let indicealeatorio = Math.floor(Math.random()*musicaalet.length)
    return ([musicaalet[indicealeatorio], segundos[indicealeatorio]    ])

}

let fadeInterval = null;
function audioalet(){
    if (fadeInterval) {
        clearInterval(fadeInterval);
        fadeInterval = null;
    }
    const musicaesegundo = musicaalet();
    console.log(musicaesegundo)
    let tagdamusica = document.getElementById("musica")

    document.querySelectorAll("#musica source").forEach(source => source.remove());
    tagdamusica.volume = 1;
    let source = document.createElement("source")
    source.src = musicaesegundo[0];
    source.type = "audio/mp3"
    
    tagdamusica.appendChild(source);
    tagdamusica.load();
    tagdamusica.addEventListener("loadeddata",()=> {
        setTimeout(()=> {
            tagdamusica.currentTime = musicaesegundo[1];
            tagdamusica.play();
        },50)
    },{ once: true });
    console.log(tagdamusica)

}

function gradientedovolume(){
    const tagdamusica = document.getElementById("musica")
     if (fadeInterval) clearInterval(fadeInterval);

    fadeInterval = setInterval(() => {
        if( tagdamusica.volume > 0.1){
            tagdamusica.volume = Math.max(0.1, tagdamusica.volume - 0.01);            console.log(tagdamusica.volume)
        }else{
            tagdamusica.volume = 0.1;
            clearInterval(fadeInterval);
            fadeInterval = null;
        }
    }, 500);
}

botao.addEventListener('click', function(){
    
    cancelar.disabled = true;
    setTimeout(function(){
        let element = document.getElementById("mensage");
        element.style.display = "flex";

        mensagensaleatorias();

        butone();

        imagemaleatoria();
        audioalet();
        cancelar.disabled = false;
    }, 50);       
});

function sumir(){

    botao.disabled = true;
   
    criarcoracoes("cora", 0.9);

    animacorao("animarcoracoes","cora");

    sumircoracao(900, "cora");
    let element = document.getElementById("mensage");
    element.style.display = "none";
    mensagensdobotao();
        
    gradientedovolume();
    botao.disabled = false;

}