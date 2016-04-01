angular.module('QCrowd').controller('treeCtrl',['$scope','$http', function ($scope,$http) {

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

  $scope.treeData.$promise.then(function (data) {
      $scope.dataForTheTree = data;
      $scope.selected = $scope.dataForTheTree[0];
      $scope.$parent.expandedNodes = [$scope.dataForTheTree[0]];
      $scope.showSelected($scope.dataForTheTree[0]);

  }, function () {
    console.log("fail");
  })
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
