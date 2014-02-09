'use strict';

angular.module('angularApp')
  .controller('MainCtrl', ['$scope','$cookies','$location','$firebase',function ($scope, $cookies, $location, $firebase) {
    
  	var firebaseCollectionName="lungtaDonation";


    $scope.locLang=$location.$$url.substring(1,3);

    $scope.isActive = function(route) {
    	return route == $location.$$url.substring(1);
    };

  	//FIREBASE
    var ref = new Firebase('https://gab-test1.firebaseio.com/'+firebaseCollectionName);
	$scope.donations = $firebase(ref.limit(5000));
	$scope.addDonation = function() {
		
		var dt = new Date();
		var codiceTrans=$scope.dname.substring(0,1).toUpperCase()
					   +$scope.dsurname.substring(0,1).toUpperCase()
					   +$scope.qta+"-"
					   +dt.getMonth()
					   +dt.getDate()
					   +dt.getHours()
					   +dt.getMinutes()
					   +dt.getSeconds();

		var Dati={
			  codeTr:codiceTrans,
	          name: $scope.dname, 
	          surname: $scope.dsurname,
	          email: $scope.demail,
	          qta: $scope.qta,
	          lang: $scope.locLang,
	          confirmed: 'no'
	        };
	    console.log(Dati);
		$scope.donations.$add(Dati);
		$scope.DataAreSaved();
	};


	$scope.confirmDonation = function (i) {
        var refUpd = new Firebase('https://gab-test1.firebaseio.com/'+firebaseCollectionName+'/'+i);
        refUpd.update({confirmed:'yes'});
    };
    $scope.unconfirmDonation = function (i) {
        var refUpd = new Firebase('https://gab-test1.firebaseio.com/'+firebaseCollectionName+'/'+i);
        refUpd.update({confirmed:'no'});
    };

	$scope.removeDonation = function (i) {
        var refDel = new Firebase('https://gab-test1.firebaseio.com/'+firebaseCollectionName+'/'+i);
        refDel.remove();
    };
	
	$scope.DataAreSaved=function(){
		$scope.showBuyThis=false;
		var urlToGo="/"+$scope.locLang+"/tks";
		console.log(urlToGo);
		$location.path(urlToGo);
	};

    $scope.languages = [
      {title:'English',suff:'en'},
      {title:'Italiano',suff:'it'},
      {title:'Russo',suff:'ru'},
    ];

	$scope.qta=1;
	$scope.pageTitle="Lungta.it";

	
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
			title:'Preservare la Cultura Tibetana',
			url:'it/PreservationTibetanCulture',
		},
      	{
			title:'La Tradizione delle Lungta',
			url:'it/LungtaTradition',
		},
		{
			title:'Contatti',
			url:'it/Contacts',
		},
    ];

    $scope.pages_ru = [
		{
			title:'Главное',
			url:'ru',
		},
      	{
			title:'Продолжение Тибетской Культуры',
			url:'ru/PreservationTibetanCulture',
		},
      	{
			title:'Традиция Лунгта',
			url:'ru/LungtaTradition',
		},
		{
			title:'Контакты',
			url:'ru/Contacts',
		},
    ];

  }]);

