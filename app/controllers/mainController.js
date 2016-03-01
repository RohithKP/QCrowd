angular.module('QCrowd').controller('mainController',function ($scope,$state) {
<<<<<<< HEAD

=======
  $rootScope.$on('$stateChangeStart', function(event, toState){
    var greeting = toState;
    console.log("greeting");
  });
>>>>>>> 779e7d71f89d0f604cd796e1b7f49a475e0929b3
})
