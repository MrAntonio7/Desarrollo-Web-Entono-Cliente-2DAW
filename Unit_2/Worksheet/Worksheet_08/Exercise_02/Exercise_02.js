var audio = document.querySelector("#audioElement");

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({video: false, audio: true}, handleAudio, audioError);
}

function handleAudio(stream) {
   audio.src = window.URL.createObjectURL(stream);
}

function audioError(e) {
   alert("Error");
}
