angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
    service: '<',
  },
  controller: function() {
    this.search = (query) => {
      this.service.search(query, this.result);
    };
  },
  templateUrl: 'src/templates/search.html'
});


