angular.module('QCrowd').controller('detailViewCtrl',function ($scope) {

$scope.steps = {"testCaseId":[{"que":"Lorem Ipsum is simply dummy text of the printing and typesetting industry","check":"nsectetur, from a Lorem Ipsum "},{"que":"Lornd typesetting industry","check":"nsectetur, from a Lorem Ipsum "},{"que":"Lorem Ipsum is simply dummy text of the printing and typesetting industry","check":"nsectetur, from a Lorem Ipsum "},{"que":"nsectetur, from a Lorem Ipsum nsectetur, from a Lorem Ipsum ","check":"dummy text of the printing and typesetting indust"}],
                "testCaseId2":[{"que":"specimen book. It has survived not only five centuries, but also","check":"It has survived not only five specimen book. centuries, but also"},{"que":"ved not only fi It has survived not only five ","check":"ved not only fi"}],
                };
// $scope.sortableOptions = { additionalPlaceholderClass: 'placeholder' };
$scope.updateCancel =function () {
  $scope.toggle();
  $scope.showSelected($scope.nodeRef,$scope.parentNode);
};

$scope.reset = function (obj) {
   eval('$scope.'+obj+'={}');
};

$scope.addStep = function (step) {

};

$scope.toggle = function(){
  $scope.edit = !$scope.edit;
  inputs = document.querySelectorAll('.mute-input');
  angular.forEach(inputs,function (input) {
    input.disabled = !$scope.edit;
  })
}
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
  $scope.sortableOptions = {
    containment: '#sortable-container',
  };
});
