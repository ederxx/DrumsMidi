function tocarSom(idSom) {
  const elemento =  document.querySelector(idSom)

  if(elemento  && elemento.localName === 'audio' )   {
    elemento.play();
}
else  {
    console.log("elemeto não encontrado ou seletor inválido")

}
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //#som_{instrumento}
    tecla.onclick = function () {
        tocarSom(idAudio);

    }

    tecla.onkeydown = function (event) {
        
        if(event.code == "Space" || event.code == "Enter") {
            tecla.classList.add('ativa')
        }
    
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}

