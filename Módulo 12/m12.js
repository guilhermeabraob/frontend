function calcularMedia() {
    var primeiro = parseInt(document.getElementById('primeiro').value);
    var segundo = parseInt(document.getElementById('segundo').value);
    var terceiro = parseInt(document.getElementById('terceiro').value);
    var media = (primeiro + segundo + terceiro) / 3;

    var divResult = document.getElementById('result');
    divResult.innerHTML = media;

}

