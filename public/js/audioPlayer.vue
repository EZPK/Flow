let data = [
  {
    id:0,
    title:"Kids with Gunz",
    author:"Gorillaz",
    album:"Demon Days",
    imgSrc:"/img/gorillaz.png",
    path:"music1.mp3"
  },
  {
    id:1,
    title:"Polynomial C",
    author:"Afx",
    album:"Analord",
    imgSrc:"/img/afx.png",
    path:"music2.mp3"
  }
]

Vue.component('player-component', {
  template: `
  <div class="player">
    <div>
      <div class="playerTitle">
        <h2 class="songAuthor">{{ data[0].author }}</h2>      
      </div>
      <p class="songTitle">{{ data[0].title }}</p>
      <audio id="music">
        <source src="http://localhost:7777/music?id=music1.mp3"/>
        Your browser does not support the audio element.
      </audio>
      <div id="timeline">
        <div id="playhead"></div>
      </div>
      <button id="pButton" class="play"></button>      
    </div>
  </div>	
  `,
  data: {
    path: data[0].path
  }
})

Vue.component('player-component2', {
  template: `
  <div class="player">
    <div>
      <div class="playerTitle">
        <h2 class="songAuthor">{{ data[1].author }}</h2>
      </div>      
      <p class="songTitle">{{ data[1].title }}</p>
      <audio id="music">
        <source src="http://localhost:7777/music?id=music1.mp3"/>
        Your browser does not support the audio element.
      </audio>
      <div id="timeline">
        <div id="playhead"></div>
      </div>
      <button id="pButton" class="play"></button>      
    </div>
  </div>	
  `
})

new Vue({
  el:"#app",
  data: data
})