angular.module('QCrowd').controller('mainController',function ($scope,$state) {

  $rootScope.$on('$stateChangeStart', function(event, toState){
    var greeting = toState;
  });

})
