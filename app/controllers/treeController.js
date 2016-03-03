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
    { "title" : "Joe", "id" : "21","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ", "links" : [
      { "title" : "Smith", "id" : "42","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [] },
      { "title" : "Gary", "id" : "21","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [
        { "title" : "Jenifer", "id" : "23","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [
          { "title" : "Dani", "id" : "32","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [] },
          { "title" : "Max", "id" : "34","description":"bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "links" : [] }
        ]}
      ]}
    ]}
  ];
  // $scope.selected =
  console.log($scope.dataForTheTree[0]);
  // $scope.treedata=createSubTree(3, 4, "");
  $scope.isLeaf = function(node) {
    if(!!node){
    if(!node.links[0]){
       return true;
    }
    return false;
   }
 }
$scope.addModule = function(parentNode) {
  parentNode.links.unshift({"title": "New Module", "id":Date.now(),"description":"", "links": [{}]});
  $scope.selected = {"title": "New Module", "id":Date.now(),"description":"", "links": [{}]};
};
$scope.addLeaf = function(parentNode) {
  parentNode.links.push({"title": "New Leaf", "id":Date.now(),"description":"", "links": []});
  $scope.selected = {"title": "New Leaf", "id":Date.now(),"description":"", "links": []};
};
$scope.buttonClick= function ($event,node) {
  console.log($event);
}
$scope.showSelected = function(node,$parentNode,$index) {
$scope.parentNode = $parentNode||null;
$scope.leaf= $scope.isLeaf(node);
$scope.selectedNode =node;
 };

(function () {
  $scope.showSelected($scope.dataForTheTree[0]);
} )();

})
