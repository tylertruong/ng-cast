angular.module('video-player')

.component('app', {
  // bindings: {
  //   videos: '<'
  // },
  controller: function (youTube) {
    
    this.selectVideo = () => {
    },

    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
    
    this.videos = [];
    this.currentVideo = {};
    youTube.search('kittens', this.searchResults);

    
    this.onClick = (video) => {
      this.currentVideo = video.video;
    };
    
    
    this.result = (query) => {
      youTube.search(query, this.searchResults);
    };
 
  },
  
  templateUrl: 'src/templates/app.html'
    
});
