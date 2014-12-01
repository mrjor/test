angular.module('myDirective', [])
	.directive('custom', customDirective);



function customDirective (){
	return {
		require : 'ngModel',
		link : function(scope, elem, attr, ngModel) { 
	    	
		}
	} 
}

