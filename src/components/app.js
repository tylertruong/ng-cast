angular.module('video-player')

.component('app', {

  controller: function (youTube) {
    
    this.selectVideo = (video) => {
      this.currentVideo = video.video;
    };

    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
    
    this.videos = [];
    this.currentVideo = {};
    youTube.search('kittens', this.searchResults);

  },
  
  templateUrl: 'src/templates/app.html'
    
});
