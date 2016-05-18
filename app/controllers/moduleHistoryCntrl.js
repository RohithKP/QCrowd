angular.module('QCrowd').controller('moduleHistoryCntrl',['$scope','$state',function ($scope,$state) {

  $scope.modHistory.$promise.then(
  function (data) {
    $scope.history = data;
  },function () {

  }
);

$scope.showStat=function (item) {
   $state.go('dashboard.projects.module.statistics',{"key":item.date+item.time});
};
}]);
