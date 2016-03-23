angular.module('QCrowd').controller('detailViewCtrl',function ($scope,$state,helpers) {

$scope.newStep = {};
$scope.steps = {"testCaseId":[{"id":"1","que":"Lorem Ipsum is simply dummy text of the printing and typesetting industry","check":"nsectetur, from a Lorem Ipsum "},{"id":"2","que":"Lornd typesetting industry","check":"nsectetur, from a Lorem Ipsum "},{"id":"3","que":"Lorem Ipsum is simply dummy text of the printing and typesetting industry","check":"nsectetur, from a Lorem Ipsum "},{"id":"4","que":"nsectetur, from a Lorem Ipsum nsectetur, from a Lorem Ipsum ","check":"dummy text of the printing and typesetting indust"}],
                "testCaseId2":[{"id":"1","que":"specimen book. It has survived not only five centuries, but also","check":"It has survived not only five specimen book. centuries, but also"},{"id":"2","que":"ved not only fi It has survived not only five ","check":"ved not only fi"}],
                };
// $scope.sortableOptions = { additionalPlaceholderClass: 'placeholder' };
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

$scope.addStep = function (step) {

};


$scope.addModule = function(parentNode,module) {
  $scope.expandedNodes.push(parentNode);
  newModule = {"title":module.name, "id":Date.now(),"description":module.description, "links": [{}]};
  parentNode.links.unshift(newModule);
  $scope.$broadcast('select',newModule);
  $scope.showSelected(newModule,parentNode);
  $scope.module={};
};

$scope.addLeaf = function(parentNode,testCase) {
  $scope.expandedNodes.push(parentNode);
  newNode = {"title": testCase.name, "id":Date.now(),"description":testCase.description, "links": []};
  parentNode.links.push(newNode);
  $scope.$broadcast('select',newNode);
  // $scope.selected = newNode;
  $scope.showSelected(newNode,parentNode);
  $scope.testCase= {};
};
$scope.isSteps = function () {
  if($scope.steps['testCaseId']==undefined){
    return false;
  }else{
    return true;
  }
}
$scope.stepsChecked = [];
$scope.helpers = helpers;

$scope.addStep = function () {
$scope.steps["testCaseId"].push($scope.newStep);
$scope.reset('newStep');
}
$scope.getTabName = function () {
  if($state.current.name == 'projects.statistics')
  return 'Statistics'
  else return 'History'
}

});
