angular.module('QCrowd',['ui.router','treeControl']).config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'/partials/home.html',
    controller: function($scope) {
      $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    }
  })
  .state('login',{
    url:'/login',
    views:{
      '':{templateUrl:'/partials/login.html'},
      'columnOne@login':{template:'I am on column one'},
      'columnTwo@login':{template:'column2' },
    }
  })
  .state('login.child',{
    views:{
      'columnOne':{template:'from login.child'}
    }
  })
  // nested list with custom controller
  .state('home.list', {
    url: '/list',
    templateUrl: '/partials/home.list.html',

  })
  // nested list with just some random string data
  .state('home.paragraph', {
    url: '/paragraph',
    templateU: 'I could sure use a drink right now.'
  })
  .state('tree', {
    url: '/tree',
    templateUrl: 'partials/tree.html',
    controller: function($scope) {
      $scope.treeOptions = {
        nodeChildren: "children",
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
        },isLeaf: function(node) {
          if(!node.children[0]){
             return true;
          }
          return false;
         }
      }
      $scope.dataForTheTree =
      [
        { "name" : "Joe", "age" : "21", "children" : [
          { "name" : "Smith", "age" : "42", "children" : [] },
          { "name" : "Gary", "age" : "21", "children" : [
            { "name" : "Jenifer", "age" : "23", "children" : [
              { "name" : "Dani", "age" : "32", "children" : [] },
              { "name" : "Max", "age" : "34", "children" : [] }
            ]}
          ]}
        ]},
        { "name" : "Albert", "age" : "33", "children" : [] },
        { "name" : "Ron", "age" : "29", "children" : [] }
      ];
      // $scope.treedata=createSubTree(3, 4, "");
    $scope.addRoot = function() {
        $scope.dataForTheTree.push({"name": "New Root", "age":"32", "children": [{"name": "NewRoot", "age":"32", "children": []}]});
        console.log($scope.dataForTheTree);
    };
    $scope.addChild = function(node1) {
      $scope.node1.children.push({"name": "New Child", "age":Date.now(), "children": []});
    console.log($scope.treeOptions.isLeaf());
    };

    $scope.showSelected = function(sel) {
    $scope.selectedNode = sel;
     };
    }
  })


})


angular.module("QCrowd").run(function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams) {
    console.log(event);
  }
);
});
