angular.module('QCrowd').controller('mainController',['$scope','$state',function ($scope,$state) {

  $rootScope.$on('$stateChangeStart', function(event, toState){
    var greeting = toState;
  });

}])
