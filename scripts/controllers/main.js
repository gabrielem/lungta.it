'use strict';

angular.module('angularApp')
  .controller('MainCtrl', ['$scope','$cookies',function ($scope, $cookies) {
    
    $scope.languages = [
      {title:'English',suff:'en'},
      {title:'Italiano',suff:'it'},
      {title:'Russo',suff:'ru'},
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
			url:'en',
		},
      	{
			title:'Preservation of Tibetan Culture',
			url:'en/PreservationTibetanCulture',
		},
      	{
			title:'Lungta Tradition',
			url:'en/LungtaTradition',
		},
		{
			title:'Contacts',
			url:'en/Contacts',
		},
    ];

    $scope.pages_it = [
		{
			title:'Home',
			url:'it',
		},
      	{
			title:'Preservare la Cultura TIbetana',
			url:'it/PreservationTibetanCulture',
		},
      	{
			title:'La Tradizione delle Lungta ',
			url:'it/LungtaTradition',
		},
		{
			title:'Contatti',
			url:'it/Contacts',
		},
    ];

  }]);

