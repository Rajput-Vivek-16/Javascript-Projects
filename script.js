console.log("let's start js");
let currentSong = new Audio();

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongLink() {
    try {
        let api = await fetch("http://127.0.0.1:5500/apna/favSongs/");
        let response = await api.text();
        let div = document.createElement('div');
        div.innerHTML = response;
        let a = div.getElementsByTagName('a');
        let songLink = [];
        Array.from(a).forEach((element) => {
            if (element.href.endsWith(".mp3")) {
                songLink.push(element.href);
            }
        });
        return songLink;
    } catch (error) {
        console.error('Error processing links:', error);
        return [];
    }
}


const playMusic = async (track) => {
    let songsURL = await getSongLink();
    // Array.from(songsURL).forEach((songURL)=>{
    for (const songURL of Array.from(songsURL)) {
        if ((await songURL.split('favSongs/')[1].replaceAll('%20', ' ').replaceAll('.mp3', '')) === track) {
            currentSong.pause();
            currentSong.src = songURL;
            currentSong.load();
            currentSong.play();
            document.querySelector("#play-btn").src = "./images/pause.svg";

            document.querySelector(".above-bar").querySelector(".song-info").innerHTML = `
            <p>${track}</p>`;
            document.querySelector(".above-bar").querySelector(".song-time").innerHTML = "00:00 / 00:00";
            break;
        }
    }
}

const displayDefaultSong = async (track, songURL) => {
    document.querySelector(".above-bar").querySelector(".song-info").innerHTML = `<p>${track}</p>`;
    document.querySelector(".above-bar").querySelector(".song-time").innerHTML = "00:00 / 00:00";
    currentSong.src = songURL;
}

async function displaySong() {
    let songs = await getSongLink();
    // let defaultSongName = songs[0].split('favSongs/')[1].replaceAll('%20',' ').replaceAll('.mp3','')
    // playMusic(defaultSongName);  
    Array.from(songs).forEach((songURL, i) => {
        let songBox = document.querySelector(".songlists");
        let insertSongLink = songBox.getElementsByTagName('ul')[0];
        insertSongLink.innerHTML += `
        <li>
        <div class="side-song">
            <img src="./images/music.svg" alt="music" class="music-svg">
            <div class="library-song-info">
            <p>${songURL.split('favSongs/')[1].replaceAll('%20', ' ').replaceAll('.mp3', '')}</p>
            <p class="artist-name">Jai Shree Ram</p>
            </div>
        </div>
        <img src="./images/play.svg" alt="music" class="music-svg play-btn">
    </li>`;
    });

    //Attach an event with each song

    Array.from(document.querySelector('.songlists').querySelectorAll('li')).forEach((list) => {
        list.addEventListener("click", (e) => {
            playMusic(list.querySelector('.library-song-info').firstElementChild.innerHTML.trim(), true);
            console.log(list.querySelector('.library-song-info').firstElementChild.innerHTML.trim());
        });
    });

        // Display the first song by default
        if (songs.length > 0) {
            let defaultSongName = songs[0].split('favSongs/')[1].replaceAll('%20', ' ').replaceAll('.mp3', '');
            displayDefaultSong(defaultSongName, songs[0]);
        }
}
displaySong();

//Attach an event with play, next and previous button
document.querySelector('#play-btn').addEventListener('click', () => {
    if (currentSong.paused) {
        currentSong.play();
        document.querySelector('#play-btn').src = "./images/pause.svg";
    }
    else {
        currentSong.pause();
        document.querySelector('#play-btn').src = "./images/play.svg";
    }
})


currentSong.addEventListener('timeupdate', () => {
    let currTime = secondsToMinutesSeconds(currentSong.currentTime);
    let totalTime = secondsToMinutesSeconds(currentSong.duration);
    document.querySelector('.above-bar').querySelector('.song-time').innerHTML = `${currTime} / ${totalTime}`;
    document.querySelector('.circle').style.left = (currentSong.currentTime/currentSong.duration)*100 + "%";
})


document.querySelector(".seekbar").addEventListener("click", (e)=>{
    // console.log(e.target.getBoundingClientRect(),e.offsetX,e.offsetY,e.clientX,e.clientY);
    let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100;
    document.querySelector('.circle').style.left = percent + "%";
    currentSong.currentTime = ((currentSong.duration) * percent)/100;
})

