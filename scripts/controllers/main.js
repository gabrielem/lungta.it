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
    
    

    $scope.pages_it = [
		{
			title:'Home',
			url:'',
			text:'...'
		},
      	{
			title:'Preservare la Cultura TIbetana',
			url:'PreservationTibetanCulture',
			text:'...'
		},
      	{
			title:'La Tradizione delle Lungta ',
			url:'LungtaTradition',
			text:'...'
		},
		{
			title:'Contatti',
			url:'Contacts',
			text:'...'
		},
    ];

  }]);

