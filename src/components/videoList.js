angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<' // potential for more errors
  },

  templateUrl: 'src/templates/videoList.html'
});
