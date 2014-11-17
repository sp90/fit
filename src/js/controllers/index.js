var app = require('./../index.js');
var $ = angular.element;

app.controller('indexCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
	
	$scope.formData = {};
	$scope.message = "";

	$scope.onSubmit = function() {
        $http({
            url: '/api/mail',
            method: "POST", 
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
            //console.log(data);
            //console.log(status);
            $scope.message = data.message;
            setTimeout(function(){
            	$("#messages").addClass("active");
            	setTimeout(function(){
            		$("#messages").removeClass("active");
            	}, 3000);
            }, 10);
        });
    }
}]);