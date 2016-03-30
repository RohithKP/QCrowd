angular.module('QCrowd').controller('moduleHistoryCntrl',['$scope','$state','dataFactory',function ($scope,$state,dataFactory) {
$scope.history = dataFactory.history.query();

$scope.showStat=function (item) {
   $state.go('projects.module.statistics',{"key":item.date+item.time});
}
}]);
