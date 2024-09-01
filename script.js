
// function playMusic(){
//   document.getElementById("musicPlay").innerHTML = "Music is playing";
// }

document.querySelector(".hamburger").addEventListener("click", ()=>{
  document.querySelector(".left").style.left = "0"
});

document.querySelector(".cancel").addEventListener("click", ()=>{
  document.querySelector(".left").style.left = "-110%"
});


document.querySelector(".playlists").addEventListener("click", ()=>{
  document.querySelector(".a").style.display = "none"
  document.querySelector(".playlistSearch").style.display = "block"
  document.querySelector(".playlists").style.display = "none"
  document.querySelector(".b").style.display = "none"


});

