function main()
{

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1");
  video2 = document.getElementById("video2");
  video3 = document.getElementById("video3");
  directo = document.getElementById("directo");

  //-- Establecer el tamaño del vídeo para el realizador
  video1.width = 200; //
  video1.height= 100;
  video2.width = 200;
  video2.height= 100;
  video3.width = 200;
  video3.height= 100;
  directo.width = 600;
  directo.height = 400;

  // audio videos
  video1.onmouseover = () => {
    console.log('Audio ON!');
    video1.muted = false;
    video1.style.backgroundColor = "lightgray";
  }
  video1.onmouseout = () => {
    console.log('Audio OFF');
    video1.muted = true;
    video1.style.backgroundColor = "";
  }
  video2.onmouseover = () => {
    console.log('Audio ON!');
    video2.muted = false;
    video2.style.backgroundColor = "lightgray";
  }

  video2.onmouseout = () => {
    console.log('Audio OFF');
    video2.muted = true;
    video2.style.backgroundColor = "";
  }

  video3.onmouseover = () => {
    console.log('Audio ON!');
    video3.muted = false;
    video3.style.backgroundColor = "lightgray";
  }

  video3.onmouseout = () => {
    console.log('Audio OFF');
    video3.muted = true;
    video3.style.backgroundColor = "";
  }

  //-- Boton de ver en directo
  play1 = document.getElementById('play1');
  play2 = document.getElementById('play2');
  play3 = document.getElementById('play3');

  // direcciones de videos
  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";

  //-- Al apretar el boton de ver video
  play1.onclick = () => {
    console.log("Ver1");
    // direccion del vidieo en pantalla principal y sincronizado
    directo.src = video1.src;
    directo.currentTime= video1.currentTime;
  }
  play2.onclick = () => {
    console.log("Ver2");
    // direccion del vidieo en pantalla principal y sincronizado
    directo.src = video2.src;
    directo.currentTime= video2.currentTime;
  }
  play3.onclick = () => {
    console.log("Ver3");
    // direccion del vidieo en pantalla principal y sincronizado
    directo.src = video3.src;
    directo.currentTime= video3.currentTime;
  }
}
