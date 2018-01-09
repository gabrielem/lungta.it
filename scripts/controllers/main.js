'use strict';

angular.module('angularApp')
  .controller('MainCtrl', ['$scope','$http','ServiceMsg','$cookieStore','$cookies','$location','$firebase',function ($scope, $http, ServiceMsg, $cookieStore, $cookies, $location, $firebase) {

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
                //console.log(Dati);
		$scope.donations.$add(Dati);
		//$cookieStore.put("salvaDati",Dati);
		$scope.datiInviati=Dati;

		ServiceMsg.setMsg(Dati);
		$cookieStore.put('Dati', Dati);

		$scope.DataAreSaved(Dati);
	};


	$scope.confirmDonation = function (i,donation) {
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

	$scope.DataAreSaved=function(Dati){
		$scope.showBuyThis = false;
		var urlToGo="/"+$scope.locLang+"/tks";
		console.log(urlToGo);

                $http.post('http://lungta.it/sendmail.php', Dati).
                success(function(data, status, headers, config) {
                    console.log("- - data");
                    console.log(data);
                    console.log("data - - - -");
                  // this callback will be called asynchronously
                  // when the response is available
                }).
                error(function(data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });


		$location.path(urlToGo);
	};

    $scope.languages = [
      {title:'English',suff:'en'},
      {title:'Italiano',suff:'it'},
      {title:'Russo',suff:'ru'},
      {title:'Cinese',suff:'zh'},
    ];

	$scope.qta=1;
	$scope.pageTitle="Lungta.it";


	$scope.range = function(n) {
		var foo = [];
        for (var i = 1; i <= n; i++)
   		foo.push(i);
        	return foo;
    };


    $scope.footerTxt_lang=[
    	{en:'For more information please write to: <b> <a href="mailto:lungtas@shangshunguk.org">lungtas@shangshunguk.org</a> </b> '},
    	{it:'Per maggiori informazioni scrivere a: <b> <a href="mailto:lungtas@shangshunguk.org">lungtas@shangshunguk.org</a> </b> '},
    	{ru:'Если Вы хотите оплатить иначе, или оплатить коллективно, пожалуйста, свяжитесь с нами: <b> <a href="mailto:lungtas@shangshunguk.org">lungtas@shangshunguk.org</a> </b> '},
    	{zh:'For more information please write to: <b> <a href="mailto:lungtas@shangshunguk.org">lungtas@shangshunguk.org</a> </b> '},

    	];

    //$scope.footerTxt=$scope.footerTxt_lang.[$scope.locLang];

    $scope.payment_types_en=[{name:'Pay with Paypal',value:'Paypal'},{name:'Pay with Bank Transfer',value:'Bank'}];
	$scope.pages_en = [
		{
			title:'Home',
			url:'en',
		},
      	{
			title:'Preserving Tibetan Culture',
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
			title:'Istituto Shang Shung',
			url:'it/SSI',
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
			title:'Институт Шанг-Шунг',
			url:'ru/SSI',
		},
      	{
			title:'Традиция Лунгта',
			url:'ru/LungtaTradition',
		},
		{
			title:'Пхарпинг',
			url:'ru/Pharping',
		},
		{
			title:'Контакты',
			url:'ru/Contacts',
		},
    ];



    $scope.payment_types_zh=[{name:'Pay with Paypal',value:'Paypal'},{name:'Pay with Bank Transfer',value:'Bank'}];
	$scope.pages_zh = [
		{
			title:'首页',
			url:'zh',
		},
      	{
			title:'保护西藏的文化',
			url:'zh/PreservationTibetanCulture',
		},
      	{
			title:'象雄学院',
			url:'zh/SSI',
		},
      	{
			title:'风马旗传统',
			url:'zh/LungtaTradition',
		},
		{
			title:'帕平',
			url:'zh/Pharping',
		},
		{
			title:'联系方式',
			url:'zh/Contacts',
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
