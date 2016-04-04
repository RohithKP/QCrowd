angular.module('QCrowd').controller('detailViewCtrl',['$scope','$state','helpers','modHistory','tcHistory','steps',
function ($scope,$state,helpers,modHistory,tcHistory,steps) {
  $scope.modHistory = modHistory;
  $scope.tcHistory = tcHistory;
  $scope.newStep = {};
  $scope.steps = steps;

  $scope.updateCancel =function () {
    $scope.toggle();
    $scope.showSelected($scope.nodeRef,$scope.parentNode);
  };

  $scope.showMore = function () {
    $scope.share.more = !$scope.share.more;
  }
  $scope.reset = function (obj) {
    eval('$scope.'+obj+'={}');
  };

  $scope.addModule = function(parentNode,module) {
    if($scope.module.name !== undefined && $scope.module.name !== ""){
      $scope.$parent.expandedNodes.push(parentNode);
      newModule = {"title":module.name, "id":Date.now(),"description":module.description, "links": [{}]};
      parentNode.links.unshift(newModule);
      $scope.$parent.$broadcast('select',newModule);
      $scope.showSelected(newModule,parentNode);
      $scope.module={};
    }
  };

  $scope.addLeaf = function(parentNode,testCase) {
    if($scope.testCase.name !== undefined && $scope.testCase.name !== ""){
      $scope.$parent.expandedNodes.push(parentNode);
      newNode = {"title": testCase.name, "id":Date.now(),"description":testCase.description, "links": []};
      parentNode.links.push(newNode);
      $scope.$parent.$broadcast('select',newNode);
      $scope.showSelected(newNode,parentNode);
      $scope.testCase= {};
    }
  };
  $scope.isSteps = function () {
    if($scope.steps[$scope.nodeId]==undefined){
      return false;
    }else{
      return true;
    }
  };
  $scope.stepsChecked = [];
  $scope.helpers = helpers;

  $scope.addStep = function () {
    if($scope.newStep.que !== undefined && $scope.newStep.que !== ""){
      if($scope.steps[$scope.nodeId]==undefined){
        $scope.steps[$scope.nodeId] = [];
      }
      $scope.steps[$scope.nodeId].push($scope.newStep);
      $scope.reset('newStep');
    }
  };
  $scope.getTabName = function () {
    if($state.current.name == 'dashboard.projects.module.statistics')
      return 'Statistics'
    else
      return 'History'
  };

}]);
