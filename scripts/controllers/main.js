'use strict';

angular.module('angularApp')
  .controller('MainCtrl', ['$scope','$cookies',function ($scope, $cookies) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	
	$scope.pages_en = [
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
