angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
  },
  controller: function() {
    this.newSearch = '';
  },
  templateUrl: 'src/templates/search.html'
});


