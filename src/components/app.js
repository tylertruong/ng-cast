angular.module('video-player')

.component('app', {
  // bindings: {
  //   videos: '<'
  // },
  controller: function ($scope, $window) {
    
    this.selectVideo = () => {
    },

    this.searchResults = () => {

    };
    
    this.videos = $window.exampleVideoData;
    this.currentVideo = this.videos[0];

    
    this.onClick = (video) => {
      this.currentVideo = video.video;
    };
    
 
  },
  
  templateUrl: 'src/templates/app.html'
    
});
