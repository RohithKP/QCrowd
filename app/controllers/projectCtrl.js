angular.module('QCrowd').controller('projectCtrl',['$scope','$state','helpers','treeData',function ($scope,$state,helpers,treeData) {
  $scope.treeData = treeData;
  $scope.isLeaf = function(node) {
    if(!!node){
      if(!node.links[0]){
        return true;
      }
      return false;
    }
  }

   $scope.helpers = helpers;
   $scope.expandedNodes = [];
  $scope.toggle = function(){
    $scope.edit = !$scope.edit;
    inputs = document.querySelectorAll('.mute-input');
    angular.forEach(inputs,function (input) {
      input.disabled = !$scope.edit;
    })
    console.log($scope.edit);
  }
  $scope.update = function (currentNode) {
    $scope.toggle();
    $scope.$broadcast('rename',currentNode);
  }
  $scope.module = {}
  $scope.testCase = {}

  $scope.getTitle = function () {
    var title;
    if($scope.parentNode == null){
      title = "Project"
    }else if ($scope.leaf) {
      title = "Test Case"
    }
    else{
      title = "Module"
    }
    return title;
  }
  $scope.changeState = function () {
    if($scope.parentNode == null){
      $state.go('dashboard.projects');
    }
    else if ($scope.leaf) {
      $state.go('dashboard.projects.testCase');
    }
    else{
       $state.go('dashboard.projects.module');
        }
  }

  $scope.share = {}
  $scope.share.more = false;

 $scope.disableInputs = function () {
   inputs = document.querySelectorAll('.mute-input');
   angular.forEach(inputs,function (input) {
     input.disabled = true;
   })
}
  $scope.showSelected = function(node,$parentNode,$index) {
    $scope.share.more = false;
    $scope.edit = false;
     $scope.disableInputs();
    $scope.parentNode = $parentNode||null;
    $scope.leaf= $scope.isLeaf(node);
    $scope.nodeRef = node;
    $scope.currentNode =angular.copy(node);
    $scope.currentNode.heading = $scope.getTitle();
    $scope.changeState();
    $scope.nodeId = $scope.currentNode.id;
  };
  $scope.platforms = ['platforms','windows 10','windows 8','iOS 8','ubuntu'];
  $scope.platformOptions =   {
      options:    $scope.platforms,
      selected:   'platforms'
    };
  $scope.reqHndlresolver={
    message: {
               browsers : ["chrome","firefox","internet-explorer","safari","opera"],
               brarray : [],
              platformOptions:$scope.platformOptions
              }
            }
}]);
