angular.module('QCrowd').controller('treeController',function ($scope) {
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
  $scope.dataForTheTree =
  [
    { "title" : "Joe", "id" : "21s","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ", "links" : [
      { "title" : "Smith", "id" : "42","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [] },
      { "title" : "Gary", "id" : "20s","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [
        { "title" : "Jenifer", "id" : "2s3","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [
          { "title" : "Dani", "id" : "d32","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [] },
          { "title" : "Max", "id" : "334","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [] }
        ]}
      ]}
    ]}
  ];

  $scope.isLeaf = function(node) {
    if(!!node){
      if(!node.links[0]){
        return true;
      }
      return false;
    }
  }
  $scope.toggle = function(){
    $scope.edit = !$scope.edit;
    inputs = document.querySelectorAll('.mute-input');
    angular.forEach(inputs,function (input) {
      input.disabled = !$scope.edit;
    })
  }
  $scope.rename = function (currentNode) {
    $scope.toggle();
    $scope.$broadcast('rename',currentNode);
    // console.log($scope.dataForTheTree);
  }
  $scope.module = {}
  $scope.testCase = {}
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

  $scope.showSelected = function(node,$parentNode,$index) {
    $scope.edit = false;
    $scope.parentNode = $parentNode||null;
    $scope.leaf= $scope.isLeaf(node);
    $scope.nodeRef = node;
    $scope.currentNode =angular.copy(node);
    $scope.currentNode.heading = $scope.getTitle();
  };

  $scope.updateCancel =function () {
    $scope.toggle();
    $scope.showSelected($scope.nodeRef,$scope.parentNode);
  };

  $scope.reset = function (obj) {
     eval('$scope.'+obj+'={}');
  };
  $scope.addStep = function (step) {

  };

  (function () {
    $scope.x = [];
    $scope.selected = $scope.dataForTheTree[0];
    $scope.expandedNodes = [$scope.dataForTheTree[0]];
    $scope.showSelected($scope.dataForTheTree[0]);
  } )();

})
