module.exports = function($stateProvider) {
	$stateProvider
	  .state('index', {
	    url: '/',
	    templateUrl: '/js/templates/pages/index.html',
	    controller: 'indexCtrl',
	    data: {
	      containerClass: 'index'
	    }
	  });
}