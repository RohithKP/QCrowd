angular.module('QCrowd').controller('projectCtrl',function ($scope,$state,helpers) {
  $scope.isLeaf = function(node) {
    if(!!node){
      if(!node.links[0]){
        return true;
      }
      return false;
    }
  }
  // $scope.modalOpen = helpers.modalOpen;
  $scope.helpers = helpers;

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
    // console.log($scope.dataForTheTree);
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
    $state.go('projects');
    }
    else if ($scope.leaf) {
      $state.go('projects.testCase');
    }
    else{
       $state.go('projects.module');
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
  };
})
