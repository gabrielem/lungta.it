angular.module('angularApp').directive('footerDirective', function() {
  return {
    restrict: 'E',
    scope:{

    },
    templateUrl:"templates/directives/footer.html",
    controller: function($scope){
      //console.log(text);
    }
  }
});