angular.module('video-player')

.component('app', {
  // bindings: {
  //   videos: '<'
  // },
  controller: function ($scope, $window, youTube) {
    
    this.selectVideo = () => {
    },

    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
    
    this.videos = $window.exampleVideoData;
    this.currentVideo = this.videos[0];

    
    this.onClick = (video) => {
      this.currentVideo = video.video;
    };
    
    youTube.search('kittens', this.searchResults);
 
  },
  
  templateUrl: 'src/templates/app.html'
    
});
