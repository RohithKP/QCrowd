angular.module('QCrowd').controller('statisticsCntrl',['$scope','$stateParams',function ($scope,$stateParams) {
  $scope.colors = ['#1AB394','#ED5565','#C1C1C1']
  $scope.labels = ["Passed","Failed","Not Run"];
  $scope.chartData = [50,10,30];
  $scope.type = 'Pie';
  $scope.chartOptions ={
      segmentShowStroke : false,
      animateRotate : false,
  }
  $scope.failedTests = ["Lorem  adsasdasd ","Why this colaveri","Login test"];
}])
