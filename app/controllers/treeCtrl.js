angular.module('QCrowd').controller('treeCtrl',['$scope','dataFactory',function ($scope,dataFactory) {
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

  $scope.dataForTheTree =dataFactory.treeData.query();

  $scope.dataForTheTree.$promise.then(function success() {

  (function () {
    $scope.selected = $scope.dataForTheTree[0];
    $scope.$parent.expandedNodes = [$scope.dataForTheTree[0]];
    $scope.showSelected($scope.dataForTheTree[0]);
  } )();

});

}]);
