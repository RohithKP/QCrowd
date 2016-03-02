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
  // $scope.treedata=createSubTree(3, 4, "");
  $scope.isLeaf = function(node) {
    if(!!node){
    if(!node.links[0]){
       return true;
    }
    return false;
   }
 }
$scope.addModule = function(node) {
  node.links.push({"title": "New Child", "id":Date.now(),"description":"", "links": [{}]});
};
$scope.addLeaf = function(node) {
  node.links.push({"title": "New Child", "id":Date.now(),"description":"", "links": []});
};

$scope.showSelected = function(node,$parentNode,$index) {
$scope.parentNode = $parentNode;
$scope.leaf= $scope.isLeaf(node);
$scope.selectedNode =node;
 };
})
