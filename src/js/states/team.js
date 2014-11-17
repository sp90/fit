module.exports = function($stateProvider) {
	$stateProvider
	  .state('team', {
	    url: '/team',
	    templateUrl: '/js/templates/pages/team.html',
	    controller: 'teamCtrl',
	    data: {
	      containerClass: 'page-type' /* Could be landing or frontpage */
	    }
	  });
}