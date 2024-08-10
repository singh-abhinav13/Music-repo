const play = document.getElementById(
  "play")
const music = document.getElementById(
  "music-play")
const title = document.getElementById(
  "title")
const artist = document.getElementById(
  "artist")
const img = document.querySelector(
  "img")
const prev = document.getElementById(
  "prev")
const next = document.getElementById(
  "next")
const progress = document
  .getElementById("progress")
let total_duration = document.getElementById("duration")
let current_duration = document.getElementById("current-time")

let isPlaying = false
const playMusic = () => {
  isPlaying = true
  play.classList.replace(
    "ri-play-circle-line",
    "ri-pause-circle-line")
  music.play()
}

const pauseMusic = () => {
  isPlaying = false
  play.classList.replace(
    "ri-pause-circle-line",
    "ri-play-circle-line")
  music.pause()
}

play.addEventListener("click",
function() {
  isPlaying ? pauseMusic() :
    playMusic();
})

const songs = [
  {
    name: "music1",
    title: "Dheere Dheere Se",
    artist: "Yo Yo honey singh",
  },
  {
    name: "music2",
    title: "Ve kamleya",
    artist: "Arijit Singh",
  }
];

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name +
    ".mp3";
  img.src = "images/" + songs.name +
    ".jpg";
};

songIndex = 0

const nextSong = () => {
  songIndex = (songIndex + 1) % songs
    .length
  loadSong(songs[songIndex]);
  playMusic()
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs
    .length) % songs.length;
  loadSong(songs[songIndex])
  playMusic()
};

//progress js work

music.addEventListener("timeupdate", (
  event) => {
  const { currentTime, duration } =
  event.srcElement;

  let progress_time = (currentTime /
    duration) * 100;
  progress.style.width =
    `${progress_time}%`

  let min_duration = Math.floor(duration / 60)
  let sec_duration = Math.ceil(duration % 60)
  
  let tot_duration = `${min_duration}:${sec_duration}`
  if (duration) {
    total_duration.textContent = `${tot_duration}`
  }
  
  //currently updating
  
  let min_currentTime = Math.floor(currentTime/60);
  let sec_currentTime= Math.floor(currentTime % 60)
  
  
  if (sec_currentTime < 10) {
    sec_currentTime = `0${sec_currentTime}`
  }
  let tot_currentTime = `${min_currentTime}:${sec_currentTime}`
  current_duration.textContent = `${tot_currentTime}`
  
})


next.addEventListener("click", nextSong)
prev.addEventListener("click", prevSong)