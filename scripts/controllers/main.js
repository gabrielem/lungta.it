'use strict';

angular.module('angularApp')
  .controller('MainCtrl', ['$scope','$cookies',function ($scope, $cookies) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.qta=1;
	
	$scope.range = function(n) {
		var foo = [];
        for (var i = 1; i <= n; i++)
   		foo.push(i);
        	return foo;
    };

	$scope.pages_en = [
		{
			title:'Home',
			url:'',
			text:'...'
		},
      	{
			title:'Preservation of Tibetan Culture',
			url:'PreservationTibetanCulture',
			text:'...'
		},
      	{
			title:'Lungta Tradition',
			url:'LungtaTradition',
			text:'...'
		},
		{
			title:'Contacts',
			url:'Contacts',
			text:'...'
		},
    ];
    
    

  }]);

