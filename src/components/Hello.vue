<template>
  <div>
    <h1>What is jesse listening to right now?</h1>
    <button v-on:click="getQuote()">find out</button>
    <p>song: {{ song }}</p>
    <p>album: {{ album }}</p>
    <p>artist: {{ artist }}</p>
    <img v-bind:src="img" alt="">
    <p>{{ quote }}</p>
 </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      song: '',
      album: '',
      artist: '',
      img: '',
      quote: '',
      songObj: {},
      error: '',
    };
  },
  methods: {
    getQuote() {
      this.$http
        .get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=latexchalet&api_key=8da0e63452e670716224249141e269ed&format=json').then((data) => {
          this.songObj = data;
          this.song = this.songObj.body.recenttracks.track[0].name;
          this.album = this.songObj.body.recenttracks.track[0].album['#text'];
          this.artist = this.songObj.body.recenttracks.track[0].artist['#text'];
          this.img = this.songObj.body.recenttracks.track[0].image[3]['#text'];
          this.quote = this.songObj.body.recenttracks.track[0];
          console.log(this.songObj.body.recenttracks.track);
        }, (data) => {
          this.error = data;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
