angular.module('QCrowd').controller('treeCtrl',['$scope','$http', '$timeout', 'dataFactory', function ($scope,$http, $timeout, dataFactory) {
  $scope.dataForTheTree = $scope.$parent.treeData;
  console.log(  $scope.dataForTheTree);
  $scope.treeOptions = {
    nodeChildren: "links",
    dirSelectable: true,
    injectClasses: {
      ul: "a1",
      li: "a2",
      liSelected: "a7",
      iExpanded: "a3",
      iCollapsed: "a4",
      iLeaf: "a5",
      label: "a6",
      labelSelected: "a8"
    }
  };

    $timeout(function () {
      $scope.selected = $scope.dataForTheTree[0];
      $scope.$parent.expandedNodes = [$scope.dataForTheTree[0]];
      $scope.showSelected($scope.dataForTheTree[0]);
    }, 100)

    // $http.get('./assets/json/treeData.json')
    //   .then(function (data) {
    //     $scope.selected = data[0];
    //     $scope.$parent.expandedNodes = [data[0]];
    //     $scope.showSelected(data[0]);
    //   }, function (error) {
    //     console.log(error);
    //     console.log('oops');
    //   })

      // dataFactory.myData()
      //   .then(function (data) {
      //     $scope.selected = data[0];
      //     $scope.$parent.expandedNodes = [data[0]];
      //     $scope.showSelected(data[0]);
      //   }, function (error) {
      //     console.log(error);
      //     console.log('oops');
      //   })
}]);
