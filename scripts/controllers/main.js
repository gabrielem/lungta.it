'use strict';

angular.module('angularApp')
  .controller('MainCtrl', ['$scope','ServiceMsg','$cookieStore','$cookies','$location','$firebase',function ($scope, ServiceMsg, $cookieStore, $cookies, $location, $firebase) {
    
  	var firebaseCollectionName="lungtaDonation";
	$scope.locLang=$location.$$url.substring(1,3);

	$scope.datiInviati=$cookieStore.get('Dati');
    $scope.dpaymenttype="Paypal";


    $scope.deleteDisabled=function(){alert('Delete function is disabled for this item.');}
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
	          payment_type: $scope.dpaymenttype,
	          confirmed: 'no'
	        };
	    console.log(Dati);
		$scope.donations.$add(Dati);
		//$cookieStore.put("salvaDati",Dati);
		$scope.datiInviati=Dati;
		
		ServiceMsg.setMsg(Dati);
		$cookieStore.put('Dati', Dati);

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

    $scope.payment_types_en=[{name:'Pay with Paypal',value:'Paypal'},{name:'Pay with Bank Transfer',value:'Bank'}];
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
			title:'Shang Shung Institute',
			url:'en/SSI',
		},
      	{
			title:'Lungta Tradition',
			url:'en/LungtaTradition',
		},
		{
			title:'Pharping',
			url:'en/Pharping',
		},
		{
			title:'Contacts',
			url:'en/Contacts',
		},
    ];
    
    $scope.payment_types_it=[{name:'Paga con Paypal',value:'Paypal'},{name:'Paga con Bonifico',value:'Bank'}];
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
			title:'Pharping',
			url:'it/Pharping',
		},
		{
			title:'Contatti',
			url:'it/Contacts',
		},
    ];

    
    $scope.payment_types_ru=[{name:'Paypal',value:'Paypal'},{name:'банковский перевод',value:'Bank'}];
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
			title:'Парпинг',
			url:'ru/Pharping',
		},
		{
			title:'Контакты',
			url:'ru/Contacts',
		},
    ];

  }])
.factory('ServiceMsg', [function () {
	var message='';
	var getMsg=function(){return message};
	var setMsg=function(m){message=angular.fromJson(m)};
	return {
		getMsg:getMsg,
		setMsg:setMsg
	};
}]);

