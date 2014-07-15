/**
* myApp Module
*
* Description
*/
angular.module('myApp', ['ngRoute', 'myFactory', 'myDirective'])
	.config(['$routeProvider', '$locationProvider', myAppRouter]);

	
function myAppRouter ($routeProvider, $locationProvider) {
	 $routeProvider.when('/', {templateUrl: 'partials/start.html', controller:'controllers'})
	 .otherwise({redirectTo: '/'}); 
	$locationProvider.html5Mode(true);
}