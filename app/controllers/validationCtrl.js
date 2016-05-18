
angular.module('QCrowd').controller('validationCtrl',['$scope','$state',function($scope,$state) {
  $scope.login = function() {
    $scope.$broadcast('show-errors-check-validity');
    if ($scope.loginForm.$valid) {
        $state.go('dashboard');
    }
  };
  $scope.submit = function () {
    $scope.$broadcast('show-errors-check-validity');
    if ($scope.registerForm.$valid) {
      $state.go('login');
    }
  };
}]);
