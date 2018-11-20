var audioController = document.getElementById("audioController");
var botonVideo;
var botonAudio;

function audioUpdate () {
    botonAudio = document.getElementById("botonAudio");
    if (audioController.paused == true) {
        audioController.play();
        botonAudio.textContent = "Detener audio";
        botonAudio.classList.add('btn-outline-danger');
        botonAudio.classList.remove('btn-outline-success');
    } else {
        audioController.pause();
        botonAudio.textContent = "Reanudar audio";
        botonAudio.classList.remove('btn-outline-danger');
        botonAudio.classList.add('btn-outline-success');
    }
}

function videoUpdate() {
    var videoController = document.getElementById("videoController");
    botonVideo = document.getElementById("botonVideo");
    if (videoController.paused == true) {
        videoController.play();
        botonVideo.textContent = "Detener video";
        botonVideo.classList.add('btn-outline-danger');
        botonVideo.classList.remove('btn-outline-success');
    } else {
        videoController.pause();
        botonVideo.textContent = "Reanudar video";
        botonVideo.classList.remove('btn-outline-danger');
        botonVideo.classList.add('btn-outline-success');
    }
}



function alerta (juego) {
    alert(`Perdona, no te puedo dejar descargar ${juego}, eso sería ilegal.`);
}


