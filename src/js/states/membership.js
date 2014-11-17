module.exports = function($stateProvider) {
	$stateProvider
	  .state('membership', {
	    url: '/membership',
	    templateUrl: '/js/templates/pages/membership.html',
	    controller: 'membershipCtrl',
	    data: {
	      containerClass: 'sub-page' /* Could be landing or frontpage */
	    }
	  });
}