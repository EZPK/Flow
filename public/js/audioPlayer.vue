// v-bind:src=
// Permet de récupérer le nom dans une url sans qu'il soit interprêté par les 

Vue.component('song', {
  props: ['songName', 'songTitle', 'songPath'],  
  template: `
  <div class="player">
    <div class="playerTitle">
      <h2 class="songAuthor">{{ songName }}</h2>      
    </div>
    <p class="songTitle">{{ songTitle }}</p>
    <audio id="music">
      <source v-bind:src="'http://localhost:7777/music?id=' + songPath"/>
      Your browser does not support the audio element.
    </audio>
    <div id="timeline">
      <div id="playhead"></div>
    </div>
    <button id="pButton" class="play"></button>      
  </div>	
  `
})


new Vue({
  el:"#songs",
  data:{
    songs:[
      { id:0, title:"Kids with Gunz", author:"Gorillaz", album:"Demon Days", imgSrc:"/img/gorillaz.png", path:"music1.mp3" },
      { id:1, title:"Polynomial C", author:"Afx", album:"Analord", imgSrc:"/img/afx.png", path:"music2.mp3" },
      { id:2, title:"Accordion", author:"MF DOOM", album:"Mad Villany", imgSrc:"/img/mfdoom.png", path:"music3.mp3" },  
      { id:3, title:"Abbesse", author:"Birdy Nam Nam", album:"", imgSrc:"/img/birdy.png", path:"music4.mp3" },        
    ]
  }
})