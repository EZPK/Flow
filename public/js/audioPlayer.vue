Vue.component('song', {
  props: ['songName', 'songTitle'],  
  template: `
  <div class="player">
    <div class="playerTitle">
      <h2 class="songAuthor">{{ songName }}</h2>      
    </div>
    <p class="songTitle">{{ songTitle }}</p>
    <audio id="music">
      <source src="http://localhost:7777/music?id=music1.mp3"/>
      Your browser does not support the audio element.
    </audio>
    <div id="timeline">
      <div id="playhead"></div>
    </div>
    <button id="pButton" class="play"></button>      
  </div>	
  `
})


let song = new Vue({
  el:"#songs",
  data:{
    songs:[
      { id:0, title:"Kids with Gunz", author:"Gorillaz", album:"Demon Days", imgSrc:"/img/gorillaz.png", path:"music1.mp3" },
      { id:1, title:"Polynomial C", author:"Afx", album:"Analord", imgSrc:"/img/afx.png", path:"music2.mp3" },
      { id:2, title:"Mad Villain", author:"MF DOOM", album:"Mad Villany", imgSrc:"/img/mfdoom.png", path:"music3.mp3" },  
    ]
  }
})