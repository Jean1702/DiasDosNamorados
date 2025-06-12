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
        `"Apesar de não saber muito sobre agro, eu quero ser seu cowboy"`,
        `"Eu adoro conversar com você"`,
        `"Eu quero conhecer o mundo contigo"`,
        `"Vou te carregar no colo a minha vida toda, pois você é um neném"`,
        `"Assim como o sol espera a lua, eu te espero o tempo que for necessário"`,
        `"Somos o melhor casal de todo o mundo"`,
        `"Eu sou fanático em ti"`,
        `"Você me tira as palavras toda vez que me olha"`,
        `"Você é a mulher da minha vida"`,
        `"Não consigo me ver sem você"`,
        `"Eu só sou feliz com você"`,
        `"Deixa eu te amar"`,
        `"Estar com você me traz paz"`,
        `"Falar com você é a melhor parte do meu dia"`,
        `"Seu sorriso, Ah, seu sorriso..."`,
        `"A minha maior qualidade é ser seu."`,
        `"Eu vou te conquistar todos os dias"`,
        `"Já não sei viver sem você"`,
        `"Tu, tão bela rosa, me cativas a todo momento"`,
        `"Pode ter certeza que VOCÊ estar em todos os meus sonhos"`,
        `"Te olhar é a coisa mais cativante que existe"`,
        `"Vossa senhorita me permite amá-la por toda eternidade?"`,
        `"Por ti eu caçaria mais de um milhão de valumes"`,
        `"Só você me traz essa senseção que é inexplicável"`,
        `"Você é meu abrigo."`,
        `"Todos os meus pensamentos só me levam a você."`,
        `"Desculpa pedir tantas desculpas, mas eu tenho medo de te perder"`,
        `"Você é meu lar, meu bem "`,
        `"Não consigo vê um futuro sem você"`,
        `"Eu quero te ouvir até que eu enteda"`,
        `"A minha alma precisa da tua"`,
        `"Você incendeia meu coração"`,
        `"Quero um dia poder acordar ao seu lado"`,
        `"Com você eu sou a pessoa mais feliz do mundo"`,
        `"Ah, essa boca que me rouba atenção"`,
        `"Sem ti nada faz sentido"`,
        `"Você me deixa bobinho"`,
        `"Que os outros se fodam, o que importa é a gente."`,
        `"Eu acho você a pessoa mais fofinha de todas mais cuti cuti"`,
        `"Irei sempre te dá linguinha"`,
        `"Você é a pessoa mais forte que eu conheço"`,
        `"Sonho com nosso casamento..."`,
        `"Você é minha futura esposa..."`,
        `"Quero ser estranho, mas só estranho com você"`,
        `"Eu sempre vou estar aqui pra conversar OK?"`,
        `"Me conte todas as fofocas"`,
        `"Quero ser mais que seu namorado"`,
        `"Seu sorriso me dá forças"`,
        `"Eu amo assistir os reals que você me manda"`,
        `"Ou só xonado demais em ti carinha."`,
        `"Vamos derrubar o capitalismo juntos"`,
        `"Contigo eu perco totalmente as palavras"`,
        `"Você merece o mundo"`,
        `"Caso exista o paraiso, você com certeza estar no meu"`,
        `"Meu bem, tu es a mais maravilhosa de todas"`,
        `"Você fica uma gostosa de óculos"`,
        `"Nossa como eu te amooo"`,
        `"Você faz eu ficar eufórico e meu coração bater mais rápido"`,
        `"Eu quero ser a sua melhor lembraça"`,
        `"Vamos ter um civic"`,
        `"Vamos ter um zoologico"`,
        `"Já não sei viver sem seu olhar"`,
        `"Vamos ter um zoológico"`,
    ];

function mensagensaleatorias(){
    if(mensagens.length === 0){
        mensagens = [
            `"Eu te amo muito muito muito mesmo"`,
            `"Eu quero sempre estar com você"`,
            `"Eu tenho muito orgulho de ti"`,
            `"Eu amo seu sorriso"`,
            `"Seus olhos me guiam nessa escuridão"`,
            `"Eu quero me enrolar nesses seus cachos"`,
            `"Eu vou te amar para todo sempre"`,
            `"Você é a pessoa mais lindinha de todo mundo"`,
            `"Você é minha lua cheia, pois ilumina meus caminhos"`,
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
            `"Apesar de não saber muito sobre agro, eu quero ser seu cowboy"`,
            `"Eu adoro conversar com você"`,
            `"Eu quero conhecer o mundo contigo"`,
            `"Vou te carregar no colo a minha vida toda, pois você é um neném"`,
            `"Assim como o sol espera a lua, eu te espero o tempo que for necessário"`,
            `"Somos o melhor casal de todo o mundo"`,
            `"Eu sou fanático em ti"`,
            `"Você me tira as palavras toda vez que me olha"`,
            `"Você é a mulher da minha vida"`,
            `"Não consigo me ver sem você"`,
            `"Eu só sou feliz com você"`,
            `"Deixa eu te amar"`,
            `"Estar com você me traz paz"`,
            `"Falar com você é a melhor parte do meu dia"`,
            `"Seu sorriso, Ah, seu sorriso..."`,
            `"A minha maior qualidade é ser seu."`,
            `"Eu vou te conquistar todos os dias"`,
            `"Já não sei viver sem você"`,
            `"Tu, tão bela rosa, me cativas a todo momento"`,
            `"Pode ter certeza que VOCÊ estar em todos os meus sonhos"`,
            `"Te olhar é a coisa mais cativante que existe"`,
            `"Vossa senhorita me permite amá-la por toda eternidade?"`,
            `"Por ti eu caçaria mais de um milhão de valumes"`,
            `"Só você me traz essa senseção que é inexplicável"`,
            `"Você é meu abrigo."`,
            `"Todos os meus pensamentos só me levam a você."`,
            `"Desculpa pedir tantas desculpas, mas eu tenho medo de te perder"`,
            `"Você é meu lar, meu bem "`,
            `"Não consigo vê um futuro sem você"`,
            `"Eu quero te ouvir até que eu enteda"`,
            `"A minha alma precisa da tua"`,
            `"Você incendeia meu coração"`,
            `"Quero um dia poder acordar ao seu lado"`,
            `"Com você eu sou a pessoa mais feliz do mundo"`,
            `"Ah, essa boca que me rouba atenção"`,
            `"Sem ti nada faz sentido"`,
            `"Você me deixa bobinho"`,
            `"Que os outros se fodam, o que importa é a gente."`,
            `"Eu acho você a pessoa mais fofinha de todas mais cuti cuti"`,
            `"Irei sempre te dá linguinha"`,
            `"Você é a pessoa mais forte que eu conheço"`,
            `"Sonho com nosso casamento..."`,
            `"Você é minha futura esposa..."`,
            `"Quero ser estranho, mas só estranho com você"`,
            `"Eu sempre vou estar aqui pra conversar OK?"`,
            `"Me conte todas as fofocas"`,
            `"Quero ser mais que seu namorado"`,
            `"Seu sorriso me dá forças"`,
            `"Eu amo assistir os reals que você me manda"`,
            `"Ou só xonado demais em ti carinha."`,
            `"Vamos derrubar o capitalismo juntos"`,
            `"Contigo eu perco totalmente as palavras"`,
            `"Você merece o mundo"`,
            `"Caso exista o paraiso, você com certeza estar no meu"`,
            `"Meu bem, tu es a mais maravilhosa de todas"`,
            `"Você fica uma gostosa de óculos"`,
            `"Nossa como eu te amooo"`,
            `"Você faz eu ficar eufórico e meu coração bater mais rápido"`,
            `"Eu quero ser a sua melhor lembraça"`,
            `"Vamos ter um civic"`,
            `"Vamos ter um zoologico"`,
            `"Já não sei viver sem seu olhar"`,
            `"Vamos ter um zoológico"`,
        ];
    }
    
   let indicealeatori = Math.floor(Math.random() * mensagens.length);
   let novamensagem = mensagens.splice(indicealeatori, 1)[0];
   const mensagemaleatoria = document.getElementById("mensagemaleatoria");

   return (
        mensagemaleatoria.innerHTML = novamensagem
   );
}
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
    "imgs/uva43.gif",
    "imgs/uva44.gif",
    "imgs/uva45.gif",
    "imgs/uva46.jpeg",
    "imgs/uva47.jpeg",
    "imgs/uva48.jpeg",
    "imgs/uva49.jpeg",
    "imgs/uva50.jpeg",
    "imgs/uva51.jpeg",
    "imgs/uva52.jpeg",
    "imgs/uva53.jpeg",
    "imgs/uva55.jpeg",
    "imgs/uva56.jpeg",
    "imgs/uva57.jpeg",
    "imgs/uva58.jpeg",
    "imgs/uva59.jpeg",
    "imgs/uva60.jpeg",
    "imgs/uva61.jpeg",
    "imgs/uva62.jpeg",
    "imgs/uva63.jpeg",
    "imgs/uva64.jpeg",
    "imgs/uva65.jpeg",
    "imgs/uva66.jpeg",
    "imgs/uva67.jpeg",
    "imgs/uva68.jpeg",
    "imgs/uva69.jpeg",
    "imgs/uva70.jpeg",
    "imgs/uva71.jpeg",
    "imgs/uva72.jpeg",
    "imgs/uva73.jpeg",
    "imgs/uva74.jpeg",
    "imgs/uva75.jpeg",
    "imgs/uva76.jpeg",
    "imgs/uva77.jpeg",
    "imgs/uva78.jpeg",
    "imgs/uva79.jpeg",
]


function imagemaleatoria(){
    if(colecao.length === 0){
        colecao = [
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
            "imgs/uva43.gif",
            "imgs/uva44.gif",
            "imgs/uva45.gif",
            "imgs/uva46.jpeg",
            "imgs/uva47.jpeg",
            "imgs/uva48.jpeg",
            "imgs/uva49.jpeg",
            "imgs/uva50.jpeg",
            "imgs/uva51.jpeg",
            "imgs/uva52.jpeg",
            "imgs/uva53.jpeg",
            "imgs/uva55.jpeg",
            "imgs/uva56.jpeg",
            "imgs/uva57.jpeg",
            "imgs/uva58.jpeg",
            "imgs/uva59.jpeg",
            "imgs/uva60.jpeg",
            "imgs/uva61.jpeg",
            "imgs/uva62.jpeg",
            "imgs/uva63.jpeg",
            "imgs/uva64.jpeg",
            "imgs/uva65.jpeg",
            "imgs/uva66.jpeg",
            "imgs/uva67.jpeg",
            "imgs/uva68.jpeg",
            "imgs/uva69.jpeg",
            "imgs/uva70.jpeg",
            "imgs/uva71.jpeg",
            "imgs/uva72.jpeg",
            "imgs/uva73.jpeg",
            "imgs/uva74.jpeg",
            "imgs/uva75.jpeg",
            "imgs/uva76.jpeg",
            "imgs/uva77.jpeg",
            "imgs/uva78.jpeg",
            "imgs/uva79.jpeg",
        ]
    }   
    let indexaletorio = Math.floor(Math.random() * colecao.length);
    let novaimagem = colecao.splice(indexaletorio, 1)[0];
    const imagem = document.getElementById("imagemaletoria");
    imagem.src = novaimagem;
    
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
        "audio/i love you baby 94.mp3",
        "audio/Seu sorriso2.mp3"
    ]
    let segundos = [78, 30, 104, 14, 30, 40, 61, 7, 67, 77, 27, 21, 63,70, 25, 3, 17, 1, 1, 94, 2]
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