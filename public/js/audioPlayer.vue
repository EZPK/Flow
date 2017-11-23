let data = {
  title:"Kids with Gunz",
  author:"Gorillaz",
  album:"Demon Days",
  imgSrc:"/img/gorillaz.png",
  path:"music1.mp3"
}

Vue.component('player-component', {
  template: `
  <div class="player">
    <div>
      <h2 class="songAuthor">{{ data.author }}</h2>
      <p class="songTitle">{{ data.title }}</p>
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
  el: "#app",
  data: function(){
    return data
  }
})



