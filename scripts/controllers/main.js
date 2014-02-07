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
			url:'',
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
			url:'',
		},
      	{
			title:'Preservare la Cultura TIbetana',
			url:'PreservationTibetanCulture',
		},
      	{
			title:'La Tradizione delle Lungta ',
			url:'LungtaTradition',
		},
		{
			title:'Contatti',
			url:'Contacts',
		},
    ];

  }]);

