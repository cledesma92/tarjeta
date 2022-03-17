let cancion = document.getElementById("media");

let buttonPlay = document.querySelector(".fa-circle-play");
let buttonPause = document.querySelector(".fa-circle-pause");

buttonPlay.onclick = () => { if(cancion.paused)
    {
        cancion.play();
        buttonPlay.classList.add("playHidden");
        buttonPause.classList.add("pauseVisible")
    }
}

buttonPause.onclick = () => { if(cancion.played)
    {
        cancion.pause();
        buttonPlay.classList.remove("playHidden")
        buttonPause.classList.remove("pauseVisible")
    } 
}