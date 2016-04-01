angular.module('QCrowd').controller('treeCtrl',['$scope',function ($scope) {
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
  }

  $scope.treeData.$promise.then(function (data) {
      $scope.dataForTheTree =data;
      $scope.selected = $scope.dataForTheTree[0];
      $scope.$parent.expandedNodes = [$scope.dataForTheTree[0]];
      $scope.showSelected($scope.dataForTheTree[0]);
  },function () {
    console.log("Failed");
  })

}]);
