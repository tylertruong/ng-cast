angular.module('video-player')
.service('youTube', function($http) {
  this.search = _.debounce(function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        'key': window.YOUTUBE_API_KEY, 
        'maxResults': 5,
        'part': 'snippet',
        'q': query,
        'type': 'video',
        'videoEmbeddable': 'true'
      }
    }).then(function successCallback(response) {
      console.log('success', response.data.items);
      callback(response.data.items);
    }, function errorCallback(response) {
      console.log('error ' + JSON.stringify(response.data));
    });
  }, 500);
});
